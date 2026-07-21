import "./AdminCartesCadeaux.scss";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

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

  const handleDelete = async () => {
    if (!giftCard) return;
    if (!window.confirm("Supprimer définitivement cette carte cadeau ? Cette action est irréversible.")) return;
    setBusy(true);
    setLookupError(null);
    try {
      const res = await fetch(`${API_BASE}/api/admin/gift-cards/${encodeURIComponent(giftCard.code)}`, {
        method: "DELETE",
        headers: authHeader(),
      });
      if (res.status === 401) return handleLogout();
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Impossible de supprimer la carte.");
      setGiftCard(null);
      setCode("");
      if (token) fetchStats(token);
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
      <main>
        <section className="carte-cadeau-form-section" aria-label="Administration des cartes cadeaux">
          {!token ? (
            <form className="carte-cadeau-form" onSubmit={handleLogin}>
              <h2>Espace administration</h2>
              <label>
                Mot de passe
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              {loginError && <p className="carte-cadeau-error">{loginError}</p>}
              <button type="submit" className="submit-btn" disabled={loggingIn}>
                {loggingIn ? "Connexion..." : "Se connecter"}
              </button>
            </form>
          ) : (
            <div className="carte-cadeau-form">
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
                      <h3>Par type de carte</h3>
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

                  {stats.byDuration.length > 0 && (
                    <div className="gift-card-stats-section">
                      <h3>Par durée</h3>
                      <div className="gift-card-stats gift-card-stats--secondary">
                        {stats.byDuration.map((row) => (
                          <div key={row.durationMinutes}>
                            <strong>{row.count}</strong>
                            <span>{DURATION_LABELS[row.durationMinutes] ?? `${row.durationMinutes} min`}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              <h2>Vérifier une carte cadeau</h2>
              <form onSubmit={handleLookup}>
                <label>
                  Code de la carte
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="UIPS-XXXX-XXXX"
                  />
                </label>
                <button type="submit" className="submit-btn" disabled={busy}>
                  Rechercher
                </button>
              </form>

              {lookupError && <p className="carte-cadeau-error">{lookupError}</p>}

              {giftCard && (
                <div className="gift-card-result">
                  <p><strong>Code :</strong> {giftCard.code}</p>
                  <p><strong>Montant :</strong> {money(giftCard.amountCents, giftCard.currency)}</p>
                  <p>
                    <strong>Type :</strong> {MODE_LABELS[giftCard.mode]}
                    {giftCard.mode === "duration" && giftCard.durationMinutes && (
                      <> — {DURATION_LABELS[giftCard.durationMinutes] ?? `${giftCard.durationMinutes} min`}</>
                    )}
                  </p>
                  <p><strong>Acheteur :</strong> {giftCard.buyerName} ({giftCard.buyerEmail})</p>
                  {giftCard.recipientName && <p><strong>Destinataire :</strong> {giftCard.recipientName}</p>}
                  <p><strong>Statut :</strong> {giftCard.status}</p>
                  {giftCard.expiresAt && (
                    <p><strong>Expire le :</strong> {new Date(giftCard.expiresAt).toLocaleDateString("fr-FR")}</p>
                  )}
                  {giftCard.redeemedAt && (
                    <p><strong>Utilisée le :</strong> {new Date(giftCard.redeemedAt).toLocaleDateString("fr-FR")}</p>
                  )}

                  <div className="gift-card-actions">
                    {giftCard.status === "paid" && (
                      <button className="submit-btn" onClick={handleRedeem} disabled={busy}>
                        Marquer comme utilisée
                      </button>
                    )}

                    {giftCard.invoiceNumber && (
                      <button className="submit-btn" onClick={handleDownloadInvoice} disabled={busy}>
                        Télécharger la facture
                      </button>
                    )}

                    {giftCard.status === "redeemed" && (
                      <button className="submit-btn danger-btn" onClick={handleDelete} disabled={busy}>
                        Supprimer
                      </button>
                    )}
                  </div>
                </div>
              )}

              <button className="cta-carte-cadeau" onClick={handleLogout}>
                Se déconnecter
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default AdminCartesCadeaux;
