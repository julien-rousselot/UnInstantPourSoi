import './Header.scss';
import logo from '../../assets/images/logo.jpg';
import { NavLink } from 'react-router-dom';

interface HeaderProps{
    isVisible:  boolean,
    toggleVisibility: () => void,
}
function Header ({ isVisible, toggleVisibility }:HeaderProps) {
    return(
        <header>
       <nav id="navigation">
                <NavLink  to="/"><img src={logo} alt="logo un instant pour soi" /></NavLink>
                <div className={`menu-icon ${isVisible ? 'is-opened' : ''}`}>
                    <span onClick={toggleVisibility}>
                    </span>
                </div>

                <div>
                    <NavLink 
                        className={({ isVisible }) => `navList ${isVisible ? 'active' : ''}`}
                        to="/"
                    > 
                        Accueil
                    </NavLink>
                </div>
                <ul className={`navList ${isVisible ? 'active' : ''}`}>
                    <li>
                        <NavLink className={'nav-link'} to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-link'} to="/Apropos">A propos</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-link'}  to="/Prestations">Prestations</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-link'} to="/Tarifs">Tarifs</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-link'} to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <nav className="navigationLaptop">
                <img src={logo} alt="logo un instant pour soi" />
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
// ajouter le onclick sur le span vide pour rendre visible le burger
export default Header;