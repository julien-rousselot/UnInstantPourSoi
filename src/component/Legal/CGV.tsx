import './MentionsLegales.scss';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function CGV() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Conditions générales de vente | Un Instant Pour Soi</title>
                <meta name="description" content="Conditions générales de vente des cartes cadeaux Un Instant Pour Soi, institut de beauté à Port-d'Envaux." />
                <link rel="canonical" href="https://un-instantpoursoi.fr/CGV" />
            </Helmet>
            <main>
                <section className="mentions-legales">
                    <div className="mentions-container">
                        <h1>Conditions générales de vente</h1>

                        <h2>Objet et portée du contrat</h2>
                        <p>
                            Les présentes conditions générales de vente (CGV) s'appliquent à toute
                            commande de carte cadeau passée sur le site un-instantpoursoi.fr, édité par
                            Elisa Arnaud, exerçant sous le nom commercial « Un Instant Pour Soi »
                            (voir les <a href="/MENTIONS LEGALES">mentions légales</a>). Toute commande
                            implique l'acceptation sans réserve des présentes CGV.
                        </p>

                        <h2>Produits proposés</h2>
                        <p>
                            Le site propose exclusivement des cartes cadeaux dématérialisées, valables sur
                            les prestations de l'institut, selon deux formules :
                        </p>
                        <p>
                            Carte « durée » : 30 min (35 €), 45 min (50 €), 1h (65 €), 1h30 (95 €) ou 2h
                            (125 €), correspondant à un temps de soin réservable à l'institut. <br />
                            Carte « montant libre » : de 8 € à 500 €, utilisable sur l'ensemble des
                            prestations proposées par l'institut.
                        </p>
                        <p>
                            Les tarifs sont indiqués en euros, toutes taxes comprises (TVA non applicable,
                            art. 293 B du CGI). L'institut se réserve le droit de modifier ses tarifs à
                            tout moment ; seul le prix affiché au moment de la commande s'applique à
                            l'achat en cours.
                        </p>

                        <h2>Commande et paiement</h2>
                        <p>
                            La commande se fait directement en ligne. Le paiement s'effectue par carte
                            bancaire, de façon sécurisée, via notre prestataire Stripe. Les coordonnées
                            bancaires ne sont à aucun moment transmises ni conservées par Un Instant Pour
                            Soi. La commande est considérée comme définitive dès confirmation du paiement
                            par Stripe.
                        </p>

                        <h2>Livraison</h2>
                        <p>
                            La carte cadeau est immatérielle : elle est envoyée par email, sous forme de
                            fichier PDF imprimable, à l'adresse indiquée par l'acheteur au moment de la
                            commande, immédiatement après confirmation du paiement. Il appartient à
                            l'acheteur de vérifier l'exactitude de l'adresse email et du nom du
                            destinataire saisis avant de valider la commande.
                        </p>
                        <p>
                            Une facture est également transmise par email à l'acheteur.
                        </p>

                        <h2>Droit de rétractation</h2>
                        <p>
                            Conformément à l'article L221-28 du Code de la consommation, le droit de
                            rétractation ne peut être exercé pour la fourniture d'un contenu numérique non
                            fourni sur support matériel dont l'exécution a commencé après accord préalable
                            exprès du consommateur. En validant sa commande, l'acheteur demande
                            expressément la délivrance immédiate de la carte cadeau par email et reconnaît
                            renoncer à son droit de rétractation dès l'envoi de celle-ci.
                        </p>

                        <h2>Validité et utilisation</h2>
                        <p>
                            Chaque carte cadeau est valable 6 mois à compter de la date d'achat ; la date
                            limite figure sur la carte et dans l'email de confirmation. Passé ce délai, la
                            carte n'est plus garantie utilisable, mais l'institut reste libre de l'accepter
                            à titre commercial.
                        </p>
                        <p>
                            La carte doit être présentée (imprimée ou sur smartphone) le jour du
                            rendez-vous. Le rendez-vous se prend par téléphone au 09 51 91 19 20. Une carte
                            cadeau ne peut être utilisée qu'une seule fois ; en cas d'utilisation partielle
                            d'une carte « montant libre » sur une prestation d'un montant inférieur, le
                            solde éventuel est à convenir directement avec l'institut.
                        </p>
                        <p>
                            La carte cadeau n'est ni échangeable contre des espèces, ni remboursable, sauf
                            obligation légale contraire.
                        </p>

                        <h2>Réclamations</h2>
                        <p>
                            Pour toute question ou réclamation relative à une commande, l'acheteur peut
                            contacter l'institut au 09 51 91 19 20 ou par email à
                            elisa.arnaud16@gmail.com.
                        </p>

                        <h2>Droit applicable</h2>
                        <p>
                            Les présentes CGV sont soumises au droit français. En cas de litige, et à
                            défaut de résolution amiable, les tribunaux français seront seuls compétents.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}

export default CGV;
