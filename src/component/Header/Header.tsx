import './Header.scss';
import logo from '../../assets/images/logo.jpg';
import { NavLink, Link} from 'react-router-dom';

interface HeaderProps{
    isVisible:  boolean,
    toggleVisibility: () => void,
}

function Header ({ isVisible, toggleVisibility }:HeaderProps) {
    return(
        <header>
       <nav id="navigation">
            <Link to="/"><img className='footerLogo' src={logo} alt="logo un instant pour soi" /></Link>
                <div className={`menu-icon ${isVisible ? 'is-opened' : ''}`}>
                    <span onClick={toggleVisibility}>
                    </span>
                </div>
                
                <ul className={`navList ${isVisible ? 'active' : ''}`}>
                    <li>
                        <NavLink className={'nav-link'} to="/" onClick={toggleVisibility}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-link'} to="/Apropos" onClick={toggleVisibility}>A propos</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-link'}  to="/Prestations" onClick={toggleVisibility}>Prestations</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-link'} to="/Tarifs" onClick={toggleVisibility}>Tarifs</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-link'} to="/Contact" onClick={toggleVisibility}>Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <nav className="navigationLaptop">
            <Link to="/"><img className='footerLogo' src={logo} alt="logo un instant pour soi" /></Link>

                <ul className="navListLaptop">
                    <li><NavLink className={`nav-link`} to="/">Accueil</NavLink></li>
                    <li><NavLink className={`nav-link`} to="/Apropos">À propos</NavLink></li>
                    <li><NavLink className={`nav-link`} to="/Prestations">Prestations</NavLink></li>
                    <li><NavLink className={`nav-link`} to="/Tarifs">Tarifs</NavLink></li>
                    <li><NavLink className={`nav-link`} to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;