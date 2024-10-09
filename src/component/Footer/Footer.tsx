import './Footer.scss';
import logo from '../../assets/images/logo.jpg';
import facebookLogo from '../../assets/images/facebookLogo.svg';
import instagramLogo from '../../assets/images/instagramLogo.svg';
import carteInstitut from '../../assets/images/Plan.jpg';


import { Link } from 'react-router-dom';

function Footer () {
    return(
        <section>
            
            <div className='footerNav'>
                <img src={carteInstitut} alt="emplacement institut" />
                <div className='footer-noimage'>

                    <div className='left-footer'>
                        <img className='footerLogo' src={logo} alt="logo" />
                    </div>

                    <div className='right-footer'>
                        <div className='page-network'>
                            <h6><Link className='link-text' to="/">ACCUEIL</Link></h6>
                            <h6><Link className='link-text' to="/APROPOS">A PROPOS</Link></h6>
                            <h6><Link className='link-text' to="/PRESTATIONS">PRESTATIONS</Link></h6>
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