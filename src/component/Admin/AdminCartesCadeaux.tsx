import "../CarteCadeau/CarteCadeau.scss";
import "./AdminCartesCadeaux.scss";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_APP_API_BASE_URL;
const TOKEN_KEY = "admin_token";

type Mode = "duration" | "free_amount";

const MODE_LABELS: Record<Mode, string> = {
  duration: "Durée (soins & massages)",
  free_amount: "Montant libre",
};

const DURATION_LABELS: Record<number, string> = {
  30: "30 min",
  45: "45 min",
  60: "1h",
  90: "1h30",
  120: "2h",
};

const STATUS_LABELS: Record<"pending" | "paid" | "redeemed", string> = {
  pending: "En attente de paiement",
  paid: "Payée",
  redeemed: "Utilisée",
};

interface GiftCard {
  code: string;
  amountCents: number;
  currency: string;
  buyerName: string;
  buyerEmail: string;
  recipientName: string | null;
  message: string | null;
  status: "pending" | "paid" | "redeemed";
  mode: Mode;
  durationMinutes: number | null;
  expiresAt: string | null;
  invoiceNumber: string | null;
  createdAt: string;
  paidAt: string | null;
  redeemedAt: string | null;
}

interface Stats {
  soldCount: number;
  totalRevenueCents: number;
  redeemedCount: number;
  activeCount: number;
  byMode: { mode: Mode; count: number; revenueCents: number }[];
  byDuration: { durationMinutes: number; count: number; revenueCents: number }[];
}

const money = (cents: number, currency: string) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency }).format(cents / 100);

function AdminCartesCadeaux() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem(TOKEN_KEY));
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const [code, setCode] = useState("");
  const [giftCard, setGiftCard] = useState<GiftCard | null>(null);
  const [lookupError, setLookupError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);

  const authHeader = (extra?: Record<string, string>) => ({
    Authorization: `Bearer ${token}`,
    ...extra,
  });

  const fetchStats = async (authToken: string) => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/gift-cards/stats`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (res.status === 401) return handleLogout();
      const data = await res.json();
      if (res.ok) setStats(data);
    } catch {
      // Stats are a nice-to-have — a failed fetch shouldn't block the rest of the admin page.
    }
  };

  useEffect(() => {
    if (token) fetchStats(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoggingIn(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Connexion impossible.");
      sessionStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      fetchStats(data.token);
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Connexion impossible.");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLookupError(null);
    setGiftCard(null);
    if (!code.trim()) return;
    setBusy(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin/gift-cards/${encodeURIComponent(code.trim())}`, {
        headers: authHeader(),
      });
      if (res.status === 401) return handleLogout();
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Carte introuvable.");
      setGiftCard(data.giftCard);
    } catch (err) {
      setLookupError(err instanceof Error ? err.message : "Carte introuvable.");
    } finally {
      setBusy(false);
    }
  };

  const performRedeem = async (force: boolean): Promise<void> => {
    if (!giftCard) return;
    const res = await fetch(
      `${API_BASE}/api/admin/gift-cards/${encodeURIComponent(giftCard.code)}/redeem`,
      {
        method: "POST",
        headers: authHeader({ "Content-Type": "application/json" }),
        body: JSON.stringify({ force }),
      }
    );
    if (res.status === 401) return handleLogout();
    const data = await res.json();
    if (!res.ok) {
      if (data.expired && !force && window.confirm(`${data.error} Voulez-vous la valider quand même ?`)) {
        return performRedeem(true);
      }
      throw new Error(data.error || "Impossible de marquer la carte comme utilisée.");
    }
    setGiftCard(data.giftCard);
    if (token) fetchStats(token);
  };

  const handleRedeem = async () => {
    setBusy(true);
    setLookupError(null);
    try {
      await performRedeem(false);
    } catch (err) {
      setLookupError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setBusy(false);
    }
  };

  const handleDownloadInvoice = async () => {
    if (!giftCard?.invoiceNumber) return;
    try {
      const res = await fetch(
        `${API_BASE}/api/admin/invoices/${encodeURIComponent(giftCard.invoiceNumber)}/pdf`,
        { headers: authHeader() }
      );
      if (res.status === 401) return handleLogout();
      if (!res.ok) throw new Error("Impossible de télécharger la facture.");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${giftCard.invoiceNumber}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setLookupError(err instanceof Error ? err.message : "Impossible de télécharger la facture.");
    }
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="carte-cadeau-page admin-page">
        <section className="admin-section" aria-label="Administration des cartes cadeaux">
          <div className="admin-card">
            {!token ? (
              <form className="fields" onSubmit={handleLogin} noValidate>
                <h1 className="admin-heading">Espace administration</h1>
                <div className="field">
                  <label>Mot de passe</label>
                  <div className="password-field">
                    <input
                      className="form-input"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    >
                      {showPassword ? (
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : (
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 3l18 18" />
                          <path d="M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a15.5 15.5 0 0 1-4 4.6M6.5 6.6C3.6 8.5 2 12 2 12s3.5 7 10 7a10.4 10.4 0 0 0 3.4-.6" />
                          <path d="M9.9 10a3 3 0 0 0 4.2 4.2" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                {loginError && (
                  <div className="carte-cadeau-error" role="alert">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8v5" strokeLinecap="round" />
                      <circle cx="12" cy="15.5" r="0.9" fill="currentColor" stroke="none" />
                    </svg>
                    <span>{loginError}</span>
                  </div>
                )}
                <button type="submit" className="cta-btn" disabled={loggingIn}>
                  {loggingIn ? "Connexion..." : "Se connecter"}
                </button>
              </form>
            ) : (
              <div className="admin-dashboard">
                <div className="admin-dashboard-header">
                  <h1 className="admin-heading">Cartes cadeaux</h1>
                  <button className="admin-logout" onClick={handleLogout}>
                    Se déconnecter
                  </button>
                </div>

                <nav className="admin-tabs">
                  <span className="admin-tab admin-tab--active">Cartes cadeaux</span>
                  <Link to="/Admin/Prix" className="admin-tab">Prix du site</Link>
                </nav>

                <h2 className="admin-subheading">Vérifier une carte cadeau</h2>
                <form className="admin-lookup-form" onSubmit={handleLookup} noValidate>
                  <div className="field">
                    <label>Code de la carte</label>
                    <input
                      className="form-input"
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="UIPS-XXXX-XXXX"
                    />
                  </div>
                  <button type="submit" className="cta-btn cta-btn--outline" disabled={busy}>
                    Rechercher
                  </button>
                </form>

                {lookupError && (
                  <div className="carte-cadeau-error" role="alert">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8v5" strokeLinecap="round" />
                      <circle cx="12" cy="15.5" r="0.9" fill="currentColor" stroke="none" />
                    </svg>
                    <span>{lookupError}</span>
                  </div>
                )}

                {giftCard && (
                  <div className="admin-result">
                    <div className="admin-result-row">
                      <span>Code</span>
                      <strong>{giftCard.code}</strong>
                    </div>
                    <div className="admin-result-row">
                      <span>Montant</span>
                      <strong>{money(giftCard.amountCents, giftCard.currency)}</strong>
                    </div>
                    <div className="admin-result-row">
                      <span>Type</span>
                      <strong>
                        {MODE_LABELS[giftCard.mode]}
                        {giftCard.mode === "duration" && giftCard.durationMinutes && (
                          <> — {DURATION_LABELS[giftCard.durationMinutes] ?? `${giftCard.durationMinutes} min`}</>
                        )}
                      </strong>
                    </div>
                    <div className="admin-result-row">
                      <span>Acheteur</span>
                      <strong>{giftCard.buyerName} ({giftCard.buyerEmail})</strong>
                    </div>
                    {giftCard.recipientName && (
                      <div className="admin-result-row">
                        <span>Destinataire</span>
                        <strong>{giftCard.recipientName}</strong>
                      </div>
                    )}
                    <div className="admin-result-row">
                      <span>Statut</span>
                      <strong>{STATUS_LABELS[giftCard.status]}</strong>
                    </div>
                    {giftCard.expiresAt && (
                      <div className="admin-result-row">
                        <span>Expire le</span>
                        <strong>{new Date(giftCard.expiresAt).toLocaleDateString("fr-FR")}</strong>
                      </div>
                    )}
                    {giftCard.redeemedAt && (
                      <div className="admin-result-row">
                        <span>Utilisée le</span>
                        <strong>{new Date(giftCard.redeemedAt).toLocaleDateString("fr-FR")}</strong>
                      </div>
                    )}

                    <div className="gift-card-actions">
                      {giftCard.status === "paid" && (
                        <button className="cta-btn" onClick={handleRedeem} disabled={busy}>
                          Marquer comme utilisée
                        </button>
                      )}

                      {giftCard.invoiceNumber && (
                        <button className="cta-btn cta-btn--outline" onClick={handleDownloadInvoice} disabled={busy}>
                          Télécharger la facture
                        </button>
                      )}

                    </div>
                  </div>
                )}

                {stats && (
                  <>
                    <div className="gift-card-stats">
                      <div>
                        <strong>{stats.soldCount}</strong>
                        <span>cartes vendues</span>
                      </div>
                      <div>
                        <strong>{money(stats.totalRevenueCents, "eur")}</strong>
                        <span>total encaissé</span>
                      </div>
                      <div>
                        <strong>{stats.activeCount}</strong>
                        <span>encore valables</span>
                      </div>
                      <div>
                        <strong>{stats.redeemedCount}</strong>
                        <span>déjà utilisées</span>
                      </div>
                    </div>

                    {stats.byMode.length > 0 && (
                      <div className="gift-card-stats-section">
                        <h2 className="admin-subheading">Par type de carte</h2>
                        <div className="gift-card-stats gift-card-stats--secondary">
                          {stats.byMode.map((row) => (
                            <div key={row.mode}>
                              <strong>{row.count}</strong>
                              <span>
                                {MODE_LABELS[row.mode] ?? row.mode} · {money(row.revenueCents, "eur")}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(() => {
                      const freeAmount = stats.byMode.find((row) => row.mode === "free_amount");
                      if (!freeAmount || freeAmount.count === 0) return null;
                      const average = freeAmount.revenueCents / freeAmount.count;
                      return (
                        <div className="gift-card-stats-section">
                          <h2 className="admin-subheading">Montant libre — moyenne</h2>
                          <div className="gift-card-stats gift-card-stats--secondary">
                            <div>
                              <strong>{money(average, "eur")}</strong>
                              <span>par carte, sur {freeAmount.count} vendue{freeAmount.count !== 1 ? "s" : ""}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {stats.byDuration.length > 0 && (
                      <div className="gift-card-stats-section">
                        <h2 className="admin-subheading">Par durée</h2>
                        <div className="gift-card-stats gift-card-stats--secondary">
                          {stats.byDuration.map((row) => (
                            <div key={row.durationMinutes}>
                              <strong>{row.count}</strong>
                              <span>{row.count !== 1 ? "cartes vendues" : "carte vendue"}</span>
                              <span className="gift-card-stats-duration">
                                {DURATION_LABELS[row.durationMinutes] ?? `${row.durationMinutes} min`}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default AdminCartesCadeaux;
