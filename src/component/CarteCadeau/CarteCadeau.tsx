import "./CarteCadeau.scss";
import carteCadeau from "../../assets/images/carteCadeau.png";
import HeaderAccueil from "../Prestations/HeaderAccueil";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const FIXED_AMOUNTS = [30, 50, 100];
const MIN_AMOUNT = 10;
const MAX_AMOUNT = 500;

function CarteCadeau() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedAmount, setSelectedAmount] = useState<number | null>(30);
  const [customAmount, setCustomAmount] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const amount = selectedAmount ?? Number(customAmount);

  const handleSelectFixed = (value: number) => {
    setSelectedAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!amount || amount < MIN_AMOUNT || amount > MAX_AMOUNT) {
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
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}/api/gift-cards/checkout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amountCents: Math.round(amount * 100),
            buyerName,
            buyerEmail,
            recipientName: recipientName || undefined,
            message: message || undefined,
          }),
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
      <header>
        <HeaderAccueil
          imageSrc={carteCadeau}
          title="Carte cadeau"
          subtitle="Offrez un instant de bien-être"
          altTexte="Carte cadeau bien-être Un Instant Pour Soi"
        />
      </header>
      <main>
        <section className="carte-cadeau-form-section" aria-label="Achat d'une carte cadeau">
          <form className="carte-cadeau-form" onSubmit={handleSubmit}>
            <h2>Choisissez un montant</h2>
            <div className="amount-buttons">
              {FIXED_AMOUNTS.map((value) => (
                <button
                  type="button"
                  key={value}
                  className={selectedAmount === value ? "amount-btn selected" : "amount-btn"}
                  onClick={() => handleSelectFixed(value)}
                >
                  {value}€
                </button>
              ))}
            </div>
            <label className="custom-amount-label">
              Ou montant libre ({MIN_AMOUNT}€ - {MAX_AMOUNT}€)
              <input
                type="number"
                min={MIN_AMOUNT}
                max={MAX_AMOUNT}
                placeholder="Montant en €"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
              />
            </label>

            <h2>Vos informations</h2>
            <label>
              Votre nom
              <input
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                required
              />
            </label>
            <label>
              Votre email
              <input
                type="email"
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Nom du destinataire (optionnel)
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
              />
            </label>
            <label>
              Message à joindre (optionnel)
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </label>

            {error && <p className="carte-cadeau-error">{error}</p>}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Redirection vers le paiement..." : "Payer et recevoir ma carte cadeau"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default CarteCadeau;
