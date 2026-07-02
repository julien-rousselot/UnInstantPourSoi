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
      <main>
        <section className="carte-cadeau-form-section" aria-label="Paiement annulé">
          <div className="carte-cadeau-form">
            <h2>Paiement annulé</h2>
            <p>Votre carte cadeau n'a pas été achetée, aucun montant n'a été débité.</p>
            <Link className="cta-carte-cadeau" to="/CarteCadeau">
              Réessayer
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default CarteCadeauAnnule;
