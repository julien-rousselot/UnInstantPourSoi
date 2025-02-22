import './SoinsSurMesure.scss';
import hanche from '../../assets/images/hanche.jpg';
import visageMassage from '../../assets/images/soinsvisage.png';
import dosMassage from '../../assets/images/dosMassage.png';
import jambeMassage from '../../assets/images/jambeMassage.png';
import cuisseMassage from '../../assets/images/cuisseMassage.png';
import epauleMassage from '../../assets/images/epauleMassage.png';
import carteCadeau from '../../assets/images/carteCadeau.png';
import HeaderAccueil from './HeaderAccueil';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function SoinsSurMesure () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Helmet>
                <title>Soins sur mesure : massages, soins du visage & bien-être</title>
                <meta name="description" content="Profitez d'un moment de détente avec nos soins personnalisés : massages, drainage lymphatique, gommages et soins du visage adaptés à vos besoins." />
                {/* <meta property="og:image" content="URL_IMAGE" />
                <meta property="og:url" content="URL_DE_LA_PAGE" />
                <meta property="og:type" content="website" /> */}
                <meta name="keywords" content="massage, soins du visage, bien-être, drainage lymphatique, détente, relaxation" />
            </Helmet>

            <header>
                <HeaderAccueil imageSrc={hanche} title="Les prestations" subtitle="Soins sur mesure" altTexte="soins sur mesures" />
            </header>
            <main>
                <section className='container-img-text right' aria-label="Massage du visage relaxant pour une peau éclatante">
                    <img src={visageMassage} alt="Massage du visage relaxant pour une peau éclatante" />
                    <div className='text-massage'><h2>Soin visage sur mesure </h2>
                    <p>Les soins du visage destinés de l'enfant, à l'adolescent et à l'adulte prennent soin de votre peau tout en douceur et avec respect. <br /> <br />
                    Après un diagnostic sur vos ressentis, votre routine beauté et ce dont votre peau a réellement besoin, les cosmétiques seront choisi. <br /> <br />
                    Découvrez les textures, granuleuses, crémeuse et onctueuse, les senteurs florales, gourmandes et fruitées, les sensations et stimulantes. <br /> <br />
                    Une ambiance, calme et tamisée, bercée d'une musique apaisante, vous invite à vous relaxer, apprécier cet instant pour vous. <br /> <br />
                    Recevez un soin du visage complet, alliant efficacité et détente, ou n'hésitez pas à retrouver l'éclat, douceur et hydratation.
                    Les durées de soins sont de 30 minutes, 45 minutes, 1h et 1h30 sont proposées.
                    </p></div>
                </section>
                <section className='container-img-text left' aria-label="Massage du dos apaisant pour soulager les tensions musculaires">
                    <img  src={dosMassage} alt="Massage du dos apaisant pour soulager les tensions musculaires" />
                    <div className='text-massage'><h2>Massage sur mesure </h2>
                    <p>Massages de l'enfant à l'adulte, permettant d'apaiser l'esprit, le corps et soulager les tensions. <br />
                    Les soins sur mesure sont élaborés ensemble afin de considérer vos attentes pour y répondre au mieux. <br />
                    Découvrez des techniques relaxantes, tonifiantes, détoxifiantes, en fonction de votre instant bien-être, selon vous choisissiez votre pression légère ou profonde. <br />
                    Evadez-vous le temps d'un instant, 30 minutes, 45 minutes, 1h ou 1h30 et profitez de chaque instant que vous invertirez à l'installer. <br /><br />
                    Pour les futures mamans, découvrez le massage précieux des moments émoi.
                    Les mains relâchent et enveloppent, pour soulager les tensions et relancer la circulation entre la mère et son bébé.</p></div>
                </section>
                <section className='container-img-text right' aria-label="Drainage lymphatique des jambes pour améliorer la circulation sanguine">
                    <img src={jambeMassage} alt="Drainage lymphatique des jambes pour améliorer la circulation sanguine" />
                    <div className='text-massage'><h2>Drainage lymphatique </h2>
                    <p>Le drainage lymphatique est un massage doux, léger, apaisant et drainant permettant d'améliorer la circulation veineuse. <br />
                    Il permet également de réduire la sensation de jambes lourdes. <br />
                    Ce soin apporte bien-être et légèreté.</p></div>
                </section>
                <section className='container-img-text left' aria-label="Massage amincissant manuel pour remodeler la silhouette et tonifier la peau">
                <img src={cuisseMassage} alt="Massage amincissant manuel pour remodeler la silhouette et tonifier la peau" />
                    <div className='text-massage'><h2>Massage amincissant manuel
                    </h2>
                    <p>Massage permettant de travailler les graisses localisées, dans le but de remodeler la silhouette, drainer pour stimuler la circulation sanguine et lymphatique, libérer les toxines et tonifier le corps grâce à des techniques de pétrissage, de palper rouler et de lissage.</p></div>
                </section>
                <section className='nostarifs' aria-label="Nos tarifs">
                    <h2 className='tarifsh2'>Nos tarifs</h2>
                    <p className='tarifsp'>15 minutes: 15€ - 30 minutes: 32€ - 45 minutes: 47€ - 1h: 62€ - 1h30: 92€</p>
                </section>
                <section className='container-img-text right' aria-label="Gommage du corps pour une peau douce, lisse et revitalisée">
                    <img src={epauleMassage} alt="Gommage du corps pour une peau douce, lisse et revitalisée" />
                    <div className='text-massage'><h2>Gommage corps
                    </h2>
                    <p>Découvrez une sélection de gommage avec différentes textures, parfums et grains fins, modéré ou fort. <br />
                    Une exfoliation globale permettant d'éliminer les cellules mortes, de stimuler la circulation sanguine et de lisser votre peau.
                    Votre épiderme sera totalement doux, soyeux et lisse. <br />
                    <br />Tarif: 36€</p></div>
                </section>
                <section className='container-img-text left' aria-label="Carte cadeau bien-être pour offrir un moment de détente personnalisé">
                <img src={carteCadeau} alt="Carte cadeau bien-être pour offrir un moment de détente personnalisé" />
                    <div className='text-massage'><h2>Carte cadeau
                    </h2>
                    <p>Offrez un instant de bien-être et de détente à vos proches. <br />
                    Les cartes cadeau permettent d’offrir soit une somme de votre choix. <br /> une prestation de bien-être ou de beauté ou une durée pour prendre son rendez-vous. <br />
                    Pour une durée elle aura le choix de faire ce qu’elle désire, jusqu’au jour de sa venue.</p></div>
                   
                </section>
            </main>
       </>
        )
}

export default SoinsSurMesure;
