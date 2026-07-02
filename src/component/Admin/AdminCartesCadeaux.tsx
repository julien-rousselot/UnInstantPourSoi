import "./AdminCartesCadeaux.scss";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const API_BASE = import.meta.env.VITE_APP_API_BASE_URL;
const TOKEN_KEY = "admin_token";

interface GiftCard {
  code: string;
  amountCents: number;
  currency: string;
  buyerName: string;
  buyerEmail: string;
  recipientName: string | null;
  message: string | null;
  status: "pending" | "paid" | "redeemed";
  createdAt: string;
  paidAt: string | null;
  redeemedAt: string | null;
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

  const authHeader = (extra?: Record<string, string>) => ({
    Authorization: `Bearer ${token}`,
    ...extra,
  });

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

  const handleRedeem = async () => {
    if (!giftCard) return;
    setBusy(true);
    setLookupError(null);
    try {
      const res = await fetch(
        `${API_BASE}/api/admin/gift-cards/${encodeURIComponent(giftCard.code)}/redeem`,
        { method: "POST", headers: authHeader() }
      );
      if (res.status === 401) return handleLogout();
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Impossible de marquer la carte comme utilisée.");
      setGiftCard(data.giftCard);
    } catch (err) {
      setLookupError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setBusy(false);
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
                  <p><strong>Acheteur :</strong> {giftCard.buyerName} ({giftCard.buyerEmail})</p>
                  {giftCard.recipientName && <p><strong>Destinataire :</strong> {giftCard.recipientName}</p>}
                  <p><strong>Statut :</strong> {giftCard.status}</p>
                  {giftCard.redeemedAt && (
                    <p><strong>Utilisée le :</strong> {new Date(giftCard.redeemedAt).toLocaleDateString("fr-FR")}</p>
                  )}
                  {giftCard.status === "paid" && (
                    <button className="submit-btn" onClick={handleRedeem} disabled={busy}>
                      Marquer comme utilisée
                    </button>
                  )}
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
