import "./CarteCadeau.scss";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import logo from "../../assets/images/logothick.png";
import backDraw from "../../assets/images/backDraw.png";

type Mode = "duration" | "free_amount";

// Mirrors the server-side pricing table in instantpoursoi-back/src/giftCards/pricing.js —
// the server is the source of truth for the actual charge, this is display-only.
const DURATION_TIERS = [
  {
    minutes: 30,
    price: 35,
    label: "30 min",
    desc: "Un moment de détente idéal pour relâcher les tensions et se recentrer.",
  },
  {
    minutes: 45,
    price: 50,
    label: "45 min",
    desc: "Un temps parfait pour relâcher le corps et apaiser l'esprit.",
  },
  {
    minutes: 60,
    price: 65,
    label: "1h",
    desc: "Une parenthèse de bien-être complète pour une détente profonde.",
  },
  {
    minutes: 90,
    price: 95,
    label: "1h30",
    desc: "Un soin prolongé pour se relaxer en profondeur, corps et esprit.",
  },
  {
    minutes: 120,
    price: 125,
    label: "2h",
    desc: "L'expérience ultime : un véritable moment d'évasion et de bien-être total.",
  },
];

const MIN_AMOUNT = 8;
const MAX_AMOUNT = 500;

function CarteCadeau() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [mode, setMode] = useState<Mode>("duration");
  const [durationMinutes, setDurationMinutes] = useState<number | null>(null);

  const [customAmount, setCustomAmount] = useState("30");

  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const amount = Number(customAmount);
  const displayAmount = amount > 0 ? amount : 50;
  const selectedTier = DURATION_TIERS.find((t) => t.minutes === durationMinutes) ?? null;

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
  };

  const handleSwitchMode = (next: Mode) => {
    setMode(next);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (mode === "duration") {
      if (!selectedTier) {
        setError("Merci de choisir une durée.");
        return;
      }
    } else if (!amount || amount < MIN_AMOUNT || amount > MAX_AMOUNT) {
      setError(`Le montant doit être compris entre ${MIN_AMOUNT}€ et ${MAX_AMOUNT}€.`);
      return;
    }
    if (!buyerName.trim()) {
      setError("Merci de renseigner votre nom.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(buyerEmail)) {
      setError("Merci de renseigner une adresse email valide.");
      return;
    }

    setLoading(true);
    try {
      const body =
        mode === "duration"
          ? {
              mode,
              durationMinutes: selectedTier!.minutes,
              buyerName,
              buyerEmail,
              recipientName: recipientName || undefined,
              message: message || undefined,
            }
          : {
              mode,
              amountCents: Math.round(amount * 100),
              buyerName,
              buyerEmail,
              recipientName: recipientName || undefined,
              message: message || undefined,
            };

      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}/api/gift-cards/checkout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Carte Cadeau - Offrez un instant de bien-être | Un Instant Pour Soi</title>
        <meta
          name="description"
          content="Offrez une carte cadeau bien-être à un montant de votre choix pour un soin, massage ou prestation beauté à l'institut Un Instant Pour Soi à Port-d'Envaux."
        />
        <link rel="canonical" href="https://un-instantpoursoi.fr/CarteCadeau" />
      </Helmet>

      <main className="carte-cadeau-page">
        <section className="hero" aria-label="Carte cadeau Un Instant Pour Soi">
          <div className="hero-left">
            <svg className="atmosphere" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice">
              <circle cx="420" cy="-60" r="220" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
              <circle cx="420" cy="-60" r="160" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
              <circle cx="-30" cy="450" r="210" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
              <circle cx="250" cy="200" r="300" fill="rgba(255,255,255,0.04)" />
            </svg>

            <div className="card-peek-right"></div>
            <div className="card-peek-left"></div>

            <div className="gift-card-main">
              <img className="card-backdraw" src={backDraw} alt="" />
              <div className="card-title">
                Un instant
                <br />
                pour soi
              </div>
              <div className="card-subtitle">Institut de Beauté</div>
              <div className="card-divider"></div>
              <div className="card-desc">
                Offrez un moment précieux
                <br />à ceux que vous aimez
              </div>
              <div className="card-amount">
                <div className="amount-value">
                  {mode === "duration" ? (selectedTier ? `${selectedTier.price}€` : "—") : `${displayAmount}€`}
                </div>
                <div className="amount-label">
                  {mode === "duration" ? (selectedTier ? selectedTier.label : "Choisissez une durée") : "Valeur"}
                </div>
              </div>
              <div className="card-ring">
                <div className="card-ring-inner"></div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <svg className="feather" width="180" height="220" viewBox="0 0 180 220" fill="none">
              <path d="M165 8 Q140 50 115 78 Q88 108 60 132 Q32 158 12 210" stroke="#7C4A2A" strokeWidth="2.8" strokeLinecap="round" />
              <path d="M165 8 Q145 55 122 82 Q96 112 70 136 Q44 162 28 208" stroke="#7C4A2A" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
              <path d="M165 8 Q150 60 130 88 Q105 118 80 140 Q56 165 44 206" stroke="#7C4A2A" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />
              <path d="M148 36 Q130 45 115 78" stroke="#7C4A2A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
              <path d="M132 58 Q114 66 100 96" stroke="#7C4A2A" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              <path d="M116 80 Q98 88 86 115" stroke="#7C4A2A" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />
              <path d="M100 103 Q82 110 72 135" stroke="#7C4A2A" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
              <path d="M83 125 Q66 131 58 155" stroke="#7C4A2A" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
            </svg>
            <div className="hero-text">
              <div className="hero-eyebrow">Institut de Beauté</div>
              <h1 className="hero-title">
                Carte
                <br />
                cadeau
              </h1>
              <p className="hero-subtitle">Offrez un instant de bien-être</p>
            </div>
          </div>
        </section>

        <section className="form-section" aria-label="Achat d'une carte cadeau">
          <form onSubmit={handleSubmit}>
            <div className="section-label">Je choisis</div>
            <div className="amount-buttons">
              <button
                type="button"
                className={mode === "duration" ? "amount-btn active" : "amount-btn"}
                onClick={() => handleSwitchMode("duration")}
              >
                Durée (soins &amp; massages)
              </button>
              <button
                type="button"
                className={mode === "free_amount" ? "amount-btn active" : "amount-btn"}
                onClick={() => handleSwitchMode("free_amount")}
              >
                Montant libre
              </button>
            </div>

            {mode === "duration" ? (
              <>
                <div className="section-label">Choisissez une durée</div>
                <p className="mode-note">
                  Les cartes cadeaux sont réservées aux soins du visage et aux massages sur mesure.
                </p>
                <div className="card-grid">
                  {DURATION_TIERS.map((tier) => (
                    <button
                      type="button"
                      key={tier.minutes}
                      className={
                        durationMinutes === tier.minutes
                          ? "duration-card duration-card--tier selected"
                          : "duration-card duration-card--tier"
                      }
                      onClick={() => setDurationMinutes(tier.minutes)}
                    >
                      <div className="tier-icon">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7C4A2A" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3.5 2" />
                        </svg>
                      </div>
                      <div className="tier-duration">{tier.label}</div>
                      <p className="tier-desc">{tier.desc}</p>
                      <div className="tier-divider"></div>
                      <div className="tier-price">{tier.price} €</div>
                      <div className="tier-cta">
                        {durationMinutes === tier.minutes ? "Carte sélectionnée" : "Choisir cette carte"}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="section-label">Montant pour vos prestations beauté</div>
                <p className="mode-note">
                  Le montant libre est réservé aux prestations beauté uniquement.
                </p>
                <input
                  className="form-input"
                  type="number"
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                  placeholder="Montant en €"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                />

                <div className="custom-amount-card-wrap">
                  <div className="duration-card duration-card--large selected">
                    <img className="card-backdraw" src={backDraw} alt="" />
                    <div className="card-top">
                      <img className="card-icon" src={logo} alt="" />
                      <div className="card-label">CARTE CADEAU</div>
                    </div>
                    <div>
                      <div className="card-duration">{amount > 0 ? `${amount} €` : "— €"}</div>
                      <div className="card-price">Montant libre</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="divider">
              <div className="divider-line"></div>
              <span className="divider-text">Vos informations</span>
              <div className="divider-line"></div>
            </div>

            <div className="fields">
              <div className="field">
                <label>Votre nom</label>
                <input
                  className="form-input"
                  type="text"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label>Votre email</label>
                <input
                  className="form-input"
                  type="email"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label>
                  Nom du destinataire <span>(optionnel)</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                />
              </div>
              <div className="field">
                <label>
                  Message à joindre <span>(optionnel)</span>
                </label>
                <textarea
                  className="form-input"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="carte-cadeau-error">{error}</p>}

            <button type="submit" className="cta-btn" disabled={loading}>
              {loading ? "Redirection vers le paiement..." : "Payer et recevoir ma carte cadeau"}
            </button>

            <p className="trust-line">Paiement sécurisé · Envoi immédiat par email</p>
          </form>
        </section>
      </main>
    </>
  );
}

export default CarteCadeau;
