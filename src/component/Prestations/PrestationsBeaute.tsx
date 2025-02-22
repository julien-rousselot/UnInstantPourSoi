import './SoinsSurMesure.scss';
import PhotoPrestationBeaute from '../../assets/images/PhotoPrestationBeaute.jpg';
import PhotoPrestationEpilation from '../../assets/images/PhotoPrestationEpilation.jpg';
import PhotoPrestationOngles from '../../assets/images/PhotoPrestationOngles.jpg';
import PhotoPrestationRegard from '../../assets/images/PhotoPrestationRegard.jpg';
import PhotoMaquillage from '../../assets/images/PhotoMaquillage.jpg';
import HeaderAccueil from './HeaderAccueil';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function PrestationsBeaute () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Helmet>
                <title>Prestations Beauté - Institut de Beauté</title>
                <meta name="description" content="Découvrez les prestations beauté : épilation, soins des ongles, maquillage et mise en valeur du regard à l'Institut de Beauté." />
                <meta name="keywords" content="épilation, ongles, maquillage, rehaussement de cils, institut de beauté" />
                <meta name="author" content="Elisa - Esthéticienne" />
            </Helmet>
            <header>
                <HeaderAccueil imageSrc={PhotoPrestationBeaute} title="Les prestations" subtitle="Beauté" altTexte="Beauté" />
            </header>
            <main>
                <section className='container-img-text right' aria-labelledby="epilation">
                    <img className='first-pic' src={PhotoPrestationEpilation} alt="visage Massage" />
                    <div className='text-massage' id="epilation">
                        <h2>Les epilations a la cire</h2>
                        <p>Une épilation durable, une peau lisse et douce, les épilations se réalisent avec une cire chaude traditionnelle. <br /><br />
                        Sourcils : 7€ <br />
                        Lèvres : 7€ <br />
                        Menton : 7€ <br />
                        Aisselles : 12€ <br />
                        1/2 bras : 12€ <br />
                        Bras : 16€ <br />
                        Maillot simple : 12€ <br />
                        Maillot brésilien : 16€ <br />
                        Maillot intégral : 22€ <br />
                        1/2 jambes : 16€ <br />
                        Cuisses : 16€ <br />
                        Jambes entières : 26€ <br />
                        Épaules et cou : 10€ <br />
                        1/2 torse : 15€ <br />
                        Torse : 20€ <br />
                        1/2 dos : 15€ <br />
                        Dos : 25€ <br />
                        </p>
                    </div>
                </section>
                <section className='container-img-text left' aria-labelledby="ongles">
                    <img src={PhotoPrestationOngles} alt="dos Massage" />
                    <div className='text-massage' id="ongles">
                        <h2>Les ongles</h2>
                        <p>Prendre soin de ses mains et de ses pieds, créer une forme d'ongle, repousser les cuticules, grâce à la manucure et/ou la beauté des pieds express. <br />
                        Exfolier en douceur et recevoir un massage grâce à la manucure et/ou la beauté des pieds complète. <br /> Colorer ses ongles par du vernis semi permanent ou classique. <br /> <br />
                        Manucure express : 20€<br />
                        Manucure complète : 40€<br />
                        Beauté des pieds express : 20€<br />
                        Beauté des pieds complète : 40€<br />
                        Pose de vernis classique : 10€<br />
                        Pose de vernis semi permanent : 35€<br />
                        Pose de vernis semi permanent french : 40€<br />
                        Dépose et remise en forme des ongles : 15€<br />
                        </p>
                    </div>
                </section>
                <section className='container-img-text right' aria-labelledby="regard">
                    <img src={PhotoPrestationRegard} alt="jambe Massage" />
                    <div className='text-massage' id="regard">
                        <h2>Le regard</h2>
                        <p>Teindre ses sourcils et/ou ses cils pour mieux les distinguer. <br /> Recourber ses cils naturellement pour une durée entre 6 à 12 semaines, grâce au rehaussement de cils qui est une technique permettant de rehausser et courber la frange de cils sans ajout de bouquet comme les extensions de cils.  <br /> Cette prestation respecte vos cils sans les abîmer. <br /> <br />
                        Teinture des sourcils : 15€ <br />
                        Teinture des cils : 15€ <br />
                        Rehaussement de cils : 70€ <br />
                        </p>
                    </div>
                </section>
                <section className='container-img-text left' aria-labelledby="maquillage">
                    <img src={PhotoMaquillage} alt="jambe Massage" />
                    <div className='text-massage' id="maquillage">
                        <h2>Le maquillage</h2>
                        <p>Mettre en valeur son visage, son teint, ses yeux et ses lèvres. Estomper ses imperfections, faire ressortir l’iris de vos yeux, porter des couleurs qui vous subliment, grâce aux maquillages jour. <br /> Une mise en beauté pour l’un de votre plus beau jour de votre vie, votre mariage. <br />
                        Un essai est recommandé pour réaliser ensemble votre maquillage selon votre désir, vos habitudes et vos inspirations. <br /> Pour votre jour J, je vous propose mon déplacement à votre domicile, ou sur le lieu de réception (domaine, château). <br /> <br />
                        Maquillage jour : 40€ <br />
                        Essai et maquillage mariée à l’institut : 80€ <br />
                        Essai et maquillage mariée sur le lieu de réception : 90€ <br />
                        </p>
                    </div>
                </section>
            </main>
       </>
    );
}


export default PrestationsBeaute;
