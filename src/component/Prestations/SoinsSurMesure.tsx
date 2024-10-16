import './SoinsSurMesure.scss';
import PhotoPrestationBeaute from '../../assets/images/PhotoPrestationBeaute.jpg';
import PhotoPrestationEpilation from '../../assets/images/PhotoPrestationEpilation.jpg';
import PhotoPrestationOngles from '../../assets/images/PhotoPrestationOngles.jpg';
import PhotoPrestationRegard from '../../assets/images/PhotoPrestationRegard.jpg';
import PhotoMaquillage from '../../assets/images/PhotoMaquillage.jpg';
// import courbe from '../../assets/images/courbes.svg';



function SoinsSurMesure () {

    return(
        <>
            <header>
                <section className='header-accueil'>
                    <img className='background-header' src={PhotoPrestationBeaute} alt="sable" />
                    <div className='text-header-style'>
                        <h2>Les prestations</h2>
                        <p>Les soins sur mesure</p>
                    </div>
                    {/* <img className='ligne-prestations' src={courbe}/> */}

                </section>
            </header>
            <main>
                <section className='container-img-text right'>
                    <img className='first-pic' src={PhotoPrestationEpilation} alt="visage Massage" />
                    <div className='text-massage'><h4>Les épilations à la cire
                    </h4>
                    <p>Les épilations à la cire
                        Une épilation durable, une peau lisse et douce, les épilations se réalise avec une cire chaude traditionnelle.
                        Sourcils : 7€
                        Lèvres : 7€
                        Menton : 7€
                        Aisselles : 12€
                        1/2 bras : 12€
                        Bras : 18€
                        Maillot simple : 12€
                        Maillot brésilien : 16€
                        Maillot intégral : 22€
                        1/2 jambes : 16€
                        Cuisses : 16€
                        Jambes entières : 28€
                        Épaules et cou : 10€
                        1/2 torse : 15€
                        Torse : 20€
                        1/2 dos : 15€
                        Dos : 25€
                    </p></div>
                </section>
                <section className='container-img-text left'>
                <img src={PhotoPrestationOngles} alt="dos Massage" />

                    <div className='text-massage'><h4>Les ongles</h4>
                    <p>Prendre soin de ses mains et de ses pieds, créer une forme d'ongle, repousser les cuticules, grâce à la manucure et/ou la beauté des pieds express. Exfolier en douceur et recevoir un massage grâce à la manucure et/ou la beauté des pieds complète. Colorer ses ongles par du vernis semi permanent ou classique.
                        Manucure express : 30€
                        Manucure complète : 45€
                        Beauté des pieds express : 30€
                        Beauté des pieds complète : 45€
                        Pose de vernis classique : 12€
                        Pose de vernis semi permanent : 40€
                        Pose de vernis semi permanent french : 45€
                        Dépose et remise en forme de vernis semi permanent : 10€
                        Dépose et remise en forme des ongles : 15€
                    </p></div>
                </section>
                <section className='container-img-text right'>
                    <img src={PhotoPrestationRegard} alt="jambe Massage" />
                    <div className='text-massage'><h4>Le regard</h4>
                    <p>Teindre ses sourcils et/ou ses cils pour mieux les distinguer. Recourber ses cils naturellement pour une durée entre 6 à 12 semaines, grâce au rehaussement de cils qui est une technique permettant de rehausser et courber la frange de cils sans ajout de bouquet comme les extensions de cils. Cette prestation respecte vos cils sans les abîmer.

                        Teinture des sourcils : 15€
                        Teinture des cils : 15€
                        Rehaussement de cils : 70€
                    </p></div>
                </section>
                <section className='container-img-text left'>
                <img src={PhotoMaquillage} alt="jambe Massage" />
                    <div className='text-massage'><h4>Le maquillage</h4>
                    <p>Mettre en valeur son visage, son teint, ses yeux et ses lèvres. Estomper ses imperfections, faire ressortir l’iris de vos yeux, porter des couleurs qui vous sublime, grâce aux maquillages jour. Une mise en beauté pour l’un de votre plus beau jour de votre vie, votre mariage.

                        Un essai est recommandé pour réaliser ensemble votre maquillage selon votre désir, vos habitudes et vos inspirations. Pour votre jour J, je vous propose mon déplacement à votre domicile, ou sur le lieu de réception (domaine, château).

                        Maquillage jour : 40€
                        Essai et maquillage mariée à l’institut : 80€
                        Essai et maquillage mariée sur le lieu de réception : 90€
                    </p></div>
                </section>
            </main>
       </>
        )
}

export default SoinsSurMesure;
