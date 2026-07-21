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
      <main>
        <section className="carte-cadeau-form-section" aria-label="Confirmation de paiement">
          <div className="carte-cadeau-form">
            <h2>Merci pour votre achat !</h2>
            <p>
              Votre paiement a bien été validé. Vous allez recevoir votre carte
              cadeau par email dans quelques instants, avec le code à présenter
              à l'institut. Pensez à vérifier vos courriers indésirables si
              vous ne le voyez pas arriver.
            </p>
            <Link className="cta-carte-cadeau" to="/">
              Retour à l'accueil
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default CarteCadeauSucces;
