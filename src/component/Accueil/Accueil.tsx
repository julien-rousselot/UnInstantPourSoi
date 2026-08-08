import './Accueil.scss';
import sand from '../../assets/images/Sable-image-de-fond-accueil.webp';
import accueil from '../../assets/images/accueil.webp';
import owner from '../../assets/images/owner.jpg';
import soinNeocare from '../../assets/images/soinsNeocare.jpg';
import soinSurMesure from '../../assets/images/soinSurMesure.png';
import prestationBeaute from '../../assets/images/prestationsBeauté.jpg';
import ligne from '../../assets/images/ligne.svg';
import backDraw from '../../assets/images/backDraw.png';
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
            <title>Un Instant Pour Soi - Institut de Beauté à Port-d'Envaux</title>
            <meta name="description" content="Découvrez Un Instant Pour Soi, votre havre de paix à Port-d'Envaux. Soins Neocare, massages sur mesure, épilation, ongles et maquillage. Sur rendez-vous au 09 51 91 19 20." />
            <meta name="keywords" content="institut de beauté, Port-d'Envaux, soins visage, massages, bien-être, relaxation, esthétique" />
            <meta property="og:title" content="Un Instant Pour Soi - Institut de Beauté à Port-d'Envaux" />
            <meta property="og:description" content="Votre havre de paix à Port-d'Envaux. Soins Neocare, massages sur mesure, épilation, ongles, maquillage. Rendez-vous au 09 51 91 19 20." />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://un-instantpoursoi.fr/" />
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
            {/* Placée après les prestations : la visiteuse a vu ce que
                l'institut propose avant qu'on lui suggère de l'offrir. */}
            <section className='carte-cadeau-teaser'>
                <div className='teaser-inner'>
                    <div className='teaser-visual' aria-hidden='true'>
                        <div className='teaser-card-back'></div>
                        <div className='teaser-card'>
                            <img className='teaser-card-backdraw' src={backDraw} alt='' />
                            <div className='teaser-card-title'>Un instant<br />pour soi</div>
                            <div className='teaser-card-subtitle'>Institut de beauté</div>
                            <div className='teaser-card-divider'></div>
                            <div className='teaser-card-desc'>Offrez un moment précieux<br />à ceux que vous aimez</div>
                        </div>
                    </div>

                    <div className='teaser-text'>
                        <p className='teaser-eyebrow'>Une idée cadeau</p>
                        <h2>La carte cadeau</h2>
                        <h3>offrez une parenthèse de bien-être</h3>
                        <p className='teaser-body'>
                            Pour un anniversaire, une naissance, un merci ou simplement pour faire plaisir :
                            choisissez la durée d'un soin ou le montant de votre choix. La carte est envoyée
                            par email, prête à imprimer et à offrir.
                        </p>
                        <button>
                            <NavLink className='buttonDecouvrir' to='/CarteCadeau' aria-label='Redirige vers la page carte cadeau'>OFFRIR UNE CARTE</NavLink>
                        </button>
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

