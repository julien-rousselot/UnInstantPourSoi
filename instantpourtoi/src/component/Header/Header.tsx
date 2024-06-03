import './Header.scss';
import logoLoup from '../../assets/images/loup-removebg-preview.png';
import { NavLink } from 'react-router-dom';

interface HeaderProps{
    isVisible:  boolean,
    toggleVisibility: () => void,
}
function Header ({ isVisible, toggleVisibility }:HeaderProps) {
    return(
        <header>
       <nav id="navigation">
                <a href="#" className="logo-container">
                    <img src={logoLoup} alt="logo un instant pour soi" />
                </a>
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
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Apropos">A propos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Prestations">Prestations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Tarifs">Tarifs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <nav className="navigationLaptop">
                <img src={logoLoup} alt="logo un instant pour soi" />
                <ul className="navListLaptop">
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/Apropos">À propos</NavLink></li>
                    <li><NavLink to="/Prestations">Prestations</NavLink></li>
                    <li><NavLink to="/Tarifs">Tarifs</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
// ajouter le onclick sur le span vide pour rendre visible le burger
export default Header;