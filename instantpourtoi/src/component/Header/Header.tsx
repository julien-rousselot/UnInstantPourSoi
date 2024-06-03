import './Header.scss';
import logoLoup from '../../assets/images/loup-removebg-preview.png';
import { NavLink } from 'react-router-dom';


function Header ({ isVisible, toggleVisibility }) {
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
                <ul className= {`navList ${isVisible ? 'active' : ''}`} >
                <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">A propos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Prestations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/prices">Tarifs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
         
            <nav className="navigationLaptop">
                <img src={logoLoup} alt="logo un instant pour soi" />
                <div>
                <ul className={`navList ${isVisible ? 'active' : ''}`}>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Tarifs">Tarifs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Apropos">Apropos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Prestations">Prestations</NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    )
}
// ajouter le onclick sur le span vide pour rendre visible le burger
export default Header;