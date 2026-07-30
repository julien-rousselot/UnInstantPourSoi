import './MentionsLegales.scss';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function MentionsLegales() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Mentions légales | Un Instant Pour Soi</title>
                <meta name="description" content="Mentions légales du site Un Instant Pour Soi, institut de beauté à Port-d'Envaux." />
                <link rel="canonical" href="https://un-instantpoursoi.fr/MENTIONS LEGALES" />
            </Helmet>
            <main>
                <section className="mentions-legales">
                    <div className="mentions-container">
                        <h1>Mentions légales</h1>

                        <h2>Éditeur du site</h2>
                        <p>
                            Le site un-instantpoursoi.fr est édité par Elisa Arnaud, exerçant sous le nom
                            commercial « Un Instant Pour Soi ».
                        </p>
                        <p>
                            Forme juridique : Entrepreneur individuel <br />
                            SIRET : 914 291 380 00014 <br />
                            TVA non applicable, art. 293 B du CGI <br />
                            Adresse : 2 F rue de la Corderie, 17350 Port-d'Envaux <br />
                            Téléphone : 09 51 91 19 20 <br />
                            Email : elisa.arnaud16@gmail.com
                        </p>
                        <p>Directrice de la publication : Elisa Arnaud.</p>

                        <h2>Hébergement</h2>
                        <p>
                            Hébergement du site : Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789,
                            États-Unis — vercel.com
                        </p>
                        <p>
                            Hébergement des données et du service de paiement : Railway Corporation —
                            railway.com
                        </p>

                        <h2>Propriété intellectuelle</h2>
                        <p>
                            L'ensemble des contenus présents sur ce site (textes, photographies, logo,
                            mise en page) est la propriété d'Un Instant Pour Soi, sauf mention contraire.
                            Toute reproduction, représentation ou diffusion, totale ou partielle, sans
                            autorisation préalable, est interdite.
                        </p>

                        <h2>Données personnelles</h2>
                        <p>
                            Lors d'un achat de carte cadeau, les informations suivantes sont collectées :
                            nom, adresse email, et le cas échéant nom du destinataire et message
                            personnalisé. Les informations de paiement (numéro de carte bancaire) ne
                            transitent jamais par ce site : elles sont traitées directement par Stripe,
                            notre prestataire de paiement, qui applique ses propres mesures de sécurité.
                        </p>
                        <p>
                            Ces données sont utilisées uniquement pour le traitement de la commande, l'envoi
                            de la carte cadeau par email et le suivi comptable (facturation). Elles ne sont
                            ni revendues, ni transmises à des tiers à des fins commerciales.
                        </p>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous
                            disposez d'un droit d'accès, de rectification et de suppression des données vous
                            concernant. Pour l'exercer, contactez l'institut au 09 51 91 19 20 ou par
                            email à elisa.arnaud16@gmail.com.
                        </p>

                        <h2>Cookies</h2>
                        <p>
                            Ce site n'utilise pas de cookies de mesure d'audience ni de traceurs publicitaires.
                            Lors du paiement, Stripe peut déposer ses propres cookies techniques sur son
                            propre domaine, dans le cadre de la sécurisation de la transaction.
                        </p>

                        <h2>Droit applicable</h2>
                        <p>
                            Le présent site est soumis au droit français. En cas de litige, et à défaut de
                            résolution amiable, les tribunaux français seront seuls compétents.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}

export default MentionsLegales;
