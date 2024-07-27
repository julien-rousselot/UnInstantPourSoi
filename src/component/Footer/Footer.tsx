import './Footer.scss';
import logo from '../../assets/images/logo.jpg';
import facebookLogo from '../../assets/images/facebookLogo.svg';
import instagramLogo from '../../assets/images/instagramLogo.svg';

import { Link } from 'react-router-dom';

function Footer () {
    return(
            <footer className='footerInfos'>

                <div className='menuLien'>
                    <h2>MENU</h2>
                    <h3><Link className='menuLink' to="/">Accueil</Link></h3>
                    <h3><Link className='menuLink' to="/Apropos">A propos</Link></h3>
                    <h3><Link className='menuLink' to="/Prestations">Prestations</Link></h3>
                    <h3><Link className='menuLink' to="/Tarifs">Tarifs</Link></h3>
                </div>
                <div>
                    <Link  to="/"><img className='footerLogo menu' src={logo} alt="logo un instant pour soi" /></Link>
                </div>
                <div className='menu'>
                    <h2>CONTACT</h2>
                    <h3>06 25 99 26 62</h3>
                </div>

                <div className='menu'>
                    <h2>RETROUVEZ MOI SUR :</h2>
                    <a href="https://www.instagram.com/_uninstantpoursoi/?hl=fr-ca"><img className='logoReseaux' src={instagramLogo} alt="Instagram" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100083218066222&locale=fr_FR"><img className='logoReseaux' src={facebookLogo} alt="facebook" /></a>
                </div>
                
            <div className='mention'>
                <p className='copyrightFooter'>© 2024 - Mentions légales - CGV</p>
            </div>
        </footer>
        )
}

export default Footer;