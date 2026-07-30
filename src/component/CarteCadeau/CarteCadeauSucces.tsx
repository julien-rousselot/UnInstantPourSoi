import "./CarteCadeau.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function CarteCadeauSucces() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Paiement confirmé | Un Instant Pour Soi</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="carte-cadeau-page">
        <section className="result-section" aria-label="Confirmation de paiement">
          <div className="result-card">
            <div className="result-icon result-icon--success">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAF6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4 10-10" />
              </svg>
            </div>
            <h1 className="result-title">Merci pour votre achat !</h1>
            <p className="result-text">
              Votre paiement a bien été validé. Vous allez recevoir votre carte
              cadeau par email dans quelques instants, avec le code à présenter
              à l'institut. Pensez à vérifier vos courriers indésirables si
              vous ne le voyez pas arriver.
            </p>
            <Link className="cta-btn" to="/">
              Retour à l'accueil
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default CarteCadeauSucces;
