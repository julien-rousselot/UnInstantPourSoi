import './Accueil.scss';
import sand from '../../assets/images/Sable image de fond accueil.jpg';
import accueil from '../../assets/images/accueil.png';
import owner from '../../assets/images/owner.jpg';
import soinNeocare from '../../assets/images/soinsNeocare.jpg';
import soinSurMesure from '../../assets/images/soinSurMesure.png';
import prestationBeaute from '../../assets/images/prestationsBeauté.jpg';
import ligne from '../../assets/images/ligne.svg';
import lignelaptop from '../../assets/images/lignelaptop.svg';

import Carousel from '../Message/Message';
import flower from '../../assets/images/Fleur.jpg';
import { NavLink } from 'react-router-dom';


function Accueil () {

      
    return(
    <>
        <header>
            <section className='header-accueil'>
            <img className='background-header-front' src={accueil} alt="accueil du salon" />

                <img className='background-header' src={sand} alt="sable" />
                <div className='text-header-style'>
                    <h2>Decouvrez <br /> un instant <br />pour soi</h2>
                    <p>Un véritable  havre de paix, dans un lieu calme et authentique, vous invitant au lacher prise.</p>
                    <button>DECOUVRIR</button>
                </div>
                <img className='ligne-header' src={ligne}/>
                <img className='ligne-header-laptop' src={lignelaptop}/>


            </section>
       </header>
        <main>
            <section className='presentation-owner' >
                <img src={owner} alt="Elisa Esthéticienne" className='self-picture' />
                <div className='presentation-text'>                 
                    <h3>Bonjour, <br />je suis Elisa</h3>
                    <p>Passionnée par l'univers du bien-être, c'est dans ce milieu que j'ai choisi d'exercer mon métier. </p>
                    <p>Originaire de Charente, c'est après avoir réalisé 7 ans d'étude dans l'esthétique et obtenu des expériences professionnelles par le biais de l'alternance, que j'ai décidé de créer mon institut de beauté à Port d'Envaux.</p> 
                    <p>Grâce à mon expérience professionnelle variée, je sais m'adapter au mieux à vos besoins. Je vous propose de découvrir mes diverses prestations de bien-être et de beauté.</p>
                </div> 
                <img src={flower} alt="fleur décorative" className='flower' />
            </section>
        </main>
        <footer> 
                <section>
                    <h3>Les prestations</h3>
                    <h4>personnalisées et sur mesure</h4>
                    <div className='prestations'>
                        <div className='prestations-div'>
                            <img src={soinNeocare} alt="Soin Neocare" />
                            <h5> Soins <br />neocare</h5>
                            <button><NavLink className="buttonDecouvrir" to="/soinsNeocare" >DECOUVRIR</NavLink></button>
                            <span></span>
                        </div>

                        <div className='prestations-div'>
                            <img src={soinSurMesure} alt="soin Sur Mesure" />
                            <h5>Soins <br />sur mesure</h5>
                            <button><NavLink className="buttonDecouvrir" to="/SoinsSurMesure" >DECOUVRIR</NavLink></button>
                            <span></span>
                        </div>

                        <div className='prestations-div'>
                            <img src={prestationBeaute} alt="prestation Beaute" />
                            <h5>Prestations<br /> beauté</h5>
                            <button><NavLink className="buttonDecouvrir" to="/PrestationsBeaute" >DECOUVRIR</NavLink></button>
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

