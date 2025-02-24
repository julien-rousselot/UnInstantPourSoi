import './SoinsNeocare.scss';
import soinsNeocare from '../../assets/images/soinNeocareVisage.jpg';
import visage from '../../assets/images/visagePageNeocare.jpg';
import ventre from '../../assets/images/ventrePageNeocare.jpg';
import neocareMachine from '../../assets/images/Neocare.jpg';
import metre from '../../assets/images/couture.jpg';
import HeaderAccueil from './HeaderAccueil';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";

function SoinsNeocare () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Helmet>
                <title>Soins Neocare - Minceur & Anti-âge</title>
                <meta name="description" content="Découvrez les soins Neocare de Bloomea pour le visage et le corps. Réduction des signes de vieillissement, cellulite et graisses localisées." />
                <meta name="keywords" content="Neocare, soin visage, soin corps, minceur, anti-âge, Bloomea" />
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Soins Neocare - Minceur & Anti-âge" />
                <meta property="og:description" content="Découvrez les soins Neocare de Bloomea pour le visage et le corps. Réduction des signes de vieillissement, cellulite et graisses localisées." />
                <meta property="og:image" content={soinsNeocare} />
                {/* <meta property="og:url" content="URL_DE_LA_PAGE" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" /> */}
                {/* <meta name="twitter:creator" content="@VotreNom" /> */}
            </Helmet>
            <header>
                <HeaderAccueil 
                    imageSrc={soinsNeocare} 
                    title="Les prestations" 
                    subtitle="Neocare" 
                    altTexte="Neocare, technologie anti-âge et minceur pour le visage et le corps"
                    aria-label="Header de la page avec image de soins Neocare"
                />
            </header>
            <main>
                <section aria-label="Introduction aux soins Neocare pour le visage et le corps">
                    <div className='text-soin-visage'>
                        <h2>Decouvrez Neocare de Bloomea</h2>
                        <img 
                            className='soins-picture' 
                            src={neocareMachine} 
                            alt="Appareil Neocare, technologie moderne pour les soins du visage et du corps" 
                            aria-describedby="description-soin-visage"
                        />
                        <p id="description-soin-visage" className='p-soinNeocare'>
                            Neocare est une technologie moderne permettant de travailler le visage et le corps. En effet, cet appareil révèle des soins révolutionnaires pour lutter contre le vieillissement cutané, les signes de fatigue, la cellulite et les graisses localisées. <br /><br />
                            C’est un soin chaleureux et agréable, Neocare produit une chaleur grâce à la stimulation cellulaire. <br /><br />
                            Des résultats peuvent être visibles dès la première séance, pour les maintenir durablement et se rapprocher de vos objectifs minceur ou anti-âge, il est recommandé d’effectuer une cure qui est disponible sur devis. <br /><br />
                            Avant tout début de cure, un bilan est réalisé afin de connaître vos besoins, les zones à travailler, votre alimentation, vos dépenses sportives et votre santé. Pour le corps, les prises de mesure sont effectuées afin d’établir une comparaison entre le début et la fin de votre cure.
                        </p>
                    </div>
                </section>

                <section aria-label="Soin Neocare pour le visage - Tarifs et informations supplémentaires" className='face-neocare-position-left'>
                    <img src={visage} alt="Soins Neocare du visage, traitement anti-âge et revitalisant" aria-describedby="tarifs-visage" />
                    <div className='text-massage'>
                        <p id="tarifs-visage" className='p-soinNeocare'>
                            Neocare pour votre visage à la séance :<br /><br />
                            Petite zone du visage : 40 €<br />
                            Visage sans masque : 80 €<br />
                            Visage avec masque : 90 €<br /><br /><br />
                            <div className='p-italique'>Sur la photo, ma cliente a effectué une cure de 10 soins, réalisée une fois par semaine.</div><br /><br />
                            <div className='bold-devis'>Cure sur devis.</div>
                        </p>
                    </div>
                </section>

                <section aria-label="Soin Neocare pour le corps - Tarifs et informations supplémentaires" className='face-neocare-position-right'>
                    <div className='text-massage'>
                        <p className='p-soinNeocare'>
                            Neocare pour votre corps à la séance : <br /><br />
                            Petite zone du corps : 55 € <br />
                            Séance corps : 80 €<br /><br /><br />
                            <div className='p-italique'>Sur la photo, ma cliente a effectué une cure de 14 séances sur la partie abdominale et une perte centimétrique de 6 cm.<br /><br /></div>
                            <div className='bold-devis'>Cure sur devis.</div>
                        </p>
                        <div>
                            <img className='couture-metre' src={metre} alt="Mètre de couture pour mesurer les progrès de la cure Neocare" aria-describedby="metre-description" />
                        </div>
                    </div>
                    <img src={ventre} className='ventre-picture' alt="Avant-après des résultats de soin Neocare pour le ventre" aria-describedby="ventre-description" />
                </section>
                
            </main>
        </>
    )
}
export default SoinsNeocare;
