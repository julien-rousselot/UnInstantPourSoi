import "./CarteCadeau.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function CarteCadeauAnnule() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Paiement annulé | Un Instant Pour Soi</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="carte-cadeau-page">
        <section className="result-section" aria-label="Paiement annulé">
          <div className="result-card">
            <div className="result-icon result-icon--cancel">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FAF6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </div>
            <h1 className="result-title">Paiement annulé</h1>
            <p className="result-text">Votre carte cadeau n'a pas été achetée, aucun montant n'a été débité.</p>
            <Link className="cta-btn" to="/CarteCadeau">
              Réessayer
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default CarteCadeauAnnule;
