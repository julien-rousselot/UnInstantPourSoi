import './Header.scss';
import logo from '../../assets/images/logo.jpg';
import { NavLink, Link } from 'react-router-dom';

interface HeaderProps {
    isVisible: boolean;
    toggleVisibility: () => void;
}

function Header({ isVisible, toggleVisibility }: HeaderProps) {


    return (
        <header>
            <nav id="headerPhone">
                <Link to="/">
                    <img className='headerLogo' src={logo} alt="logo un instant pour soi" />
                </Link>
                <div className={`menu-icon ${isVisible ? 'is-opened' : ''}`}>
                    <span onClick={toggleVisibility}></span>
                </div>

                <ul className={`navList ${isVisible ? 'active' : ''}`}>
                    <li>
                        <NavLink className={'nav-link'} to="/" onClick={toggleVisibility}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-link'} to="/Apropos" onClick={toggleVisibility}>A propos</NavLink>
                    </li>
                    <li>
                    <li>
                        <NavLink className={`nav-link`} to="/Apropos">Prestations</NavLink></li>
                    </li>
                    <li>
                        <NavLink className={'nav-link'} to="/Contact" onClick={toggleVisibility}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
            
            {/* Partie laptop */}
            <nav id="headerLaptop">
                <div className='logoDiv'>
                <Link to="/">
                    <img className='headerLogoLaptop' src={logo} alt="logo un instant pour soi" />
                </Link>
                </div>
                <div className="linkDiv">
                <ul>
                    <li><NavLink className={`nav-link`} to="/">Accueil</NavLink></li>
                    <li><NavLink className={`nav-link`} to="/Apropos">À propos</NavLink></li>
                    <li><NavLink className={`nav-link`} to="/Prestations">Prestations</NavLink></li>
                    <li><NavLink className={`nav-link`} to="/Contact">Contact</NavLink></li>
                </ul>
                </div>
            </nav>


        </header>
    );
}

export default Header;
