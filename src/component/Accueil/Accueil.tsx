import './Accueil.scss';
import sand from '../../assets/images/Sable-image-de-fond-accueil.webp';
import accueil from '../../assets/images/accueil.webp';
import owner from '../../assets/images/owner.jpg';
import soinNeocare from '../../assets/images/soinsNeocare.jpg';
import soinSurMesure from '../../assets/images/soinSurMesure.png';
import prestationBeaute from '../../assets/images/prestationsBeauté.jpg';
import ligne from '../../assets/images/ligne.svg';
import Carousel from '../Message/Message';
import flower from '../../assets/images/Fleur.jpg';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';


function Accueil () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
    <>
        <Helmet>
            <title>Accueil - Institut de Beauté</title>
            <meta name="description" content="Découvrez un havre de paix dédié au bien-être et à la beauté à Port d'Envaux." />
            <meta name="keywords" content="bien-être, beauté, soins, institut, esthétique, relaxation" />
            <meta name="author" content="Elisa - Esthéticienne" />
        </Helmet>
        <header>
            <section className='header-home accueil-header'>
            <img className='background-header-front' src={accueil} alt="accueil du salon" />

                <img className='sand' src={sand} alt="sable" />
                <div className='text-header-style'>
                    <h1>Decouvrez <br /> un instant <br />pour soi</h1>
                    <p>Un véritable  havre de paix, dans un lieu calme et authentique, vous invitant au lacher prise.</p>
                </div>
                <img className='ligne-header' src={ligne} alt='ligne design'/>
            </section>
       </header>
        <main>
            <section className='presentation-owner' >
                <img src={owner} alt="Elisa Esthéticienne" className='self-picture' />
                <div className='presentation-text'>                 
                    <h2>Bonjour, <br />je suis Elisa</h2>
                    <p>Passionnée par l'univers du bien-être, c'est dans ce milieu que j'ai choisi d'exercer mon métier. </p>
                    <p>Originaire de Charente, c'est après avoir réalisé 7 ans d'étude dans l'esthétique et obtenu des expériences professionnelles par le biais de l'alternance, que j'ai décidé de créer mon institut de beauté à Port d'Envaux.</p> 
                    <p>Grâce à mon expérience professionnelle variée, je sais m'adapter au mieux à vos besoins. Je vous propose de découvrir mes diverses prestations de bien-être et de beauté.</p>
                </div> 
                <img src={flower} alt="fleur décorative" className='flower' />
            </section>
        </main>
        <footer> 
                <section>
                    <h2 >Les prestations</h2>
                    <h3>personnalisées et sur mesure</h3>
                    <div className='prestations'>
                        <div className='prestations-div'>
                            <img src={soinNeocare} alt="Soin Neocare" />
                            <h4> Soins <br />neocare</h4>
                            <button><NavLink className="buttonDecouvrir" to="/soinsNeocare" aria-label="Redirige vers la page soins neocare" >DECOUVRIR</NavLink></button>
                            <span></span>
                        </div>

                        <div className='prestations-div'>
                            <img src={soinSurMesure} alt="soin Sur Mesure" />
                            <h4>Soins <br />sur mesure</h4>
                            <button><NavLink className="buttonDecouvrir" to="/SoinsSurMesure" aria-label="Redirige vers la page soins sur mesure" >DECOUVRIR</NavLink></button>
                            <span></span>
                        </div>

                        <div className='prestations-div'>
                            <img src={prestationBeaute} alt="prestation Beaute" />
                            <h4>Prestations<br /> beaute</h4>
                            <button><NavLink className="buttonDecouvrir" to="/PrestationsBeaute" aria-label="Redirige vers la page prestations beauté" >DECOUVRIR</NavLink></button>
                            <span></span>
                        </div>
                    </div>
                </section>
            <section>
                <Carousel />
            </section>
        </footer>
    </>
    )
}

export default Accueil;

