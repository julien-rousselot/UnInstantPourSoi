import './Footer.scss';
import logo from '../../assets/images/logo.jpg';
import facebookLogo from '../../assets/images/facebookLogo.svg';
import instagramLogo from '../../assets/images/instagramLogo.svg';
// import carteInstitut from '../../assets/images/Plan.jpg';


import { Link } from 'react-router-dom';

function Footer () {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    return(
        <section>
            
            <div className='footerNav'>
                {/* <img src={carteInstitut} alt="emplacement institut" /> */}
                <div style={{ width: "100vw", height: "100%"}}>
                    <iframe title="Google Map" width="100%"
                        height="450"
                        style={{ border: "0" }}
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaxwouaIeAUgRBIhtv27de4o&key=AIzaSyDfIlLrjqE2mQ5a3Q2jkoD1EwcfAo2ImLA`}
                    ></iframe>
                </div>
                <div className='footer-noimage'>

                    <div className='left-footer'>
                        <img className='footerLogo' src={logo} alt="logo" />
                    </div>

                    <div className='right-footer'>
                        <div className='page-network'>
                            <h6><Link className='link-text' to="/">ACCUEIL</Link></h6>
                            <h6><Link className='link-text' to="/APROPOS">A PROPOS</Link></h6>
                            <h6><Link className='link-text' to="/CONTACT">CONTACT</Link></h6>
                        </div>
                        <div className='page-network'>    
                            <h6><Link className='link-text' to="https://www.instagram.com/_uninstantpoursoi/?hl=fr-ca">INSTAGRAM </Link><img className='reseaux' src={instagramLogo} alt="Instagram" /></h6>
                            <h6><Link className='link-text' to="https://www.facebook.com/profile.php?id=100083218066222&locale=fr_FR">FACEBOOK  </Link><img className='reseaux' src={facebookLogo} alt="Facebook" /></h6>
                            <h6><Link className='link-text' to="/MENTIONS LEGALES">MENTIONS LEGALES</Link></h6>
                            <h6><Link className='link-text' to="/CGV">CGV</Link></h6>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        )
}

export default Footer;