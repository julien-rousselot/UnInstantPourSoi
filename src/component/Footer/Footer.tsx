import './Footer.scss';
import logo from '../../assets/images/logo.jpg';
import facebookLogo from '../../assets/images/facebookLogo.svg';
import instagramLogo from '../../assets/images/instagramLogo.svg';
// import carteInstitut from '../../assets/images/Plan.jpg';


import { Link } from 'react-router-dom';

function Footer () {

    return(
        <section>
            <div className='footerNav'>
                <div className='footer-noimage'>
                    <div className='left-footer'>
                        <img className='footerLogo' src={logo} alt="logo" />
                    </div>
                    <div className='right-footer'>
                        <div className='page-network'>
                            <h3><Link className='link-text' to="/">ACCUEIL</Link></h3>
                            <h3><Link className='link-text' to="/CONTACT">CONTACT</Link></h3>
                        </div>
                        <div className='page-network'>    
                            <h3><Link className='link-text' to="https://www.instagram.com/_uninstantpoursoi/?hl=fr-ca">INSTAGRAM </Link><img className='reseaux' src={instagramLogo} alt="Instagram" /></h3>
                            <h3><Link className='link-text' to="https://www.facebook.com/profile.php?id=100083218066222">FACEBOOK  </Link><img className='reseaux' src={facebookLogo} alt="Facebook" /></h3>
                            <h3><Link className='link-text' to="/MENTIONS LEGALES">MENTIONS LEGALES</Link></h3> 
                        </div>
                        <p className='madeBy'>Site réalisé par Julien Rousselot</p>
                    </div>    
                </div>   
            </div>
        </section>
        )
}

export default Footer;