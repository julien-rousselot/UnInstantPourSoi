import "../CarteCadeau/CarteCadeau.scss";
import "./AdminCartesCadeaux.scss";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_APP_API_BASE_URL;
const TOKEN_KEY = "admin_token";

interface PriceEntry {
  key: string;
  page: string;
  section: string;
  label: string;
  amountCents: number;
  prefix: string | null;
  suffix: string | null;
}

const PAGE_LABELS: Record<string, string> = {
  "soins-neocare": "Soins Neocare",
  "soins-sur-mesure": "Soins sur mesure",
  "prestations-beaute": "Prestations beauté",
};

const ErrorBox = ({ message }: { message: string }) => (
  <div className="carte-cadeau-error" role="alert">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5" strokeLinecap="round" />
      <circle cx="12" cy="15.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
    <span>{message}</span>
  </div>
);

function AdminPrices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem(TOKEN_KEY));
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const [prices, setPrices] = useState<PriceEntry[]>([]);
  // key -> raw text the admin typed, kept separate from `prices` so an
  // in-progress edit isn't clobbered by a re-fetch until it's saved.
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [loadError, setLoadError] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const authHeader = (extra?: Record<string, string>) => ({
    Authorization: `Bearer ${token}`,
    ...extra,
  });

  const fetchPrices = async (authToken: string) => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/prices`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (res.status === 401) return handleLogout();
      const data = await res.json();
      if (res.ok) setPrices(data.prices);
      else setLoadError(data.error || "Impossible de charger les prix.");
    } catch {
      setLoadError("Impossible de charger les prix.");
    }
  };

  useEffect(() => {
    if (token) fetchPrices(token);
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
      fetchPrices(data.token);
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

  const handleEdit = (key: string, value: string) => {
    setEdits((prev) => ({ ...prev, [key]: value }));
    setSavedMessage(null);
  };

  const handleSave = async () => {
    const updates = Object.entries(edits)
      .map(([key, value]) => {
        const parsed = Number(value.replace(",", "."));
        if (!Number.isFinite(parsed) || parsed < 0) return null;
        return { key, amountCents: Math.round(parsed * 100) };
      })
      .filter((u): u is { key: string; amountCents: number } => u !== null);

    if (updates.length === 0) return;

    setSaving(true);
    setSaveError(null);
    try {
      const res = await fetch(`${API_BASE}/api/admin/prices`, {
        method: "PUT",
        headers: authHeader({ "Content-Type": "application/json" }),
        body: JSON.stringify({ prices: updates }),
      });
      if (res.status === 401) return handleLogout();
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Impossible d'enregistrer les prix.");
      setPrices(data.prices);
      setEdits({});
      setSavedMessage(`${updates.length} prix mis à jour.`);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Impossible d'enregistrer les prix.");
    } finally {
      setSaving(false);
    }
  };

  const grouped: Record<string, Record<string, PriceEntry[]>> = {};
  for (const entry of prices) {
    (grouped[entry.page] ??= {});
    (grouped[entry.page][entry.section] ??= []).push(entry);
  }

  const editedCount = Object.keys(edits).length;

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="carte-cadeau-page admin-page">
        <section className="admin-section" aria-label="Administration des prix du site">
          <div className="admin-card admin-card--wide">
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
                {loginError && <ErrorBox message={loginError} />}
                <button type="submit" className="cta-btn" disabled={loggingIn}>
                  {loggingIn ? "Connexion..." : "Se connecter"}
                </button>
              </form>
            ) : (
              <div className="admin-dashboard">
                <div className="admin-dashboard-header">
                  <h1 className="admin-heading">Prix du site</h1>
                  <button className="admin-logout" onClick={handleLogout}>
                    Se déconnecter
                  </button>
                </div>

                <nav className="admin-tabs">
                  <Link to="/Admin" className="admin-tab">Cartes cadeaux</Link>
                  <span className="admin-tab admin-tab--active">Prix du site</span>
                </nav>

                {loadError && <ErrorBox message={loadError} />}

                {Object.entries(grouped).map(([page, sections]) => (
                  <div key={page} className="admin-prices-page">
                    <h2 className="admin-subheading">{PAGE_LABELS[page] ?? page}</h2>
                    {Object.entries(sections).map(([section, entries]) => (
                      <div key={section} className="admin-prices-section">
                        <h3 className="admin-prices-section-title">{section}</h3>
                        <div className="admin-prices-grid">
                          {entries.map((entry) => (
                            <div key={entry.key} className="admin-price-row">
                              <label>{entry.label}</label>
                              <div className="admin-price-input">
                                {entry.prefix && <span className="admin-price-affix">{entry.prefix}</span>}
                                <input
                                  className="form-input"
                                  type="text"
                                  inputMode="decimal"
                                  value={edits[entry.key] ?? String(entry.amountCents / 100).replace(".", ",")}
                                  onChange={(e) => handleEdit(entry.key, e.target.value)}
                                />
                                <span className="admin-price-affix">€{entry.suffix ?? ""}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}

                {saveError && <ErrorBox message={saveError} />}
                {savedMessage && !saveError && <p className="admin-saved-message">{savedMessage}</p>}

                <button className="cta-btn admin-save-prices" onClick={handleSave} disabled={editedCount === 0 || saving}>
                  {saving ? "Enregistrement..." : editedCount > 0 ? `Enregistrer (${editedCount})` : "Enregistrer"}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default AdminPrices;
