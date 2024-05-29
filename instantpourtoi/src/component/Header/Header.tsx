import './Header.scss';
import logoLoup from '../../assets/images/loup-removebg-preview.png';


function Header ({ isVisible, toggleVisibility }) {
    return(
        <header>
            <nav id="navigation">
                <img src={logoLoup} alt="logo un instant pour soi" />
                <div className={`menu-icon ${isVisible ? 'is-opened' : ''}`}>
                    <span onClick={toggleVisibility}>
                    </span>
                </div>
                <ul className= {`navList ${isVisible ? 'active' : ''}`} >
                    <li>Accueil</li>
                    <li>A propos</li>
                    <li>Prestations</li>
                    <li>Tarifs</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <nav className="navigationLaptop">
                <img src={logoLoup} alt="logo un instant pour soi" />
                <ul className="navListLaptop">
                    <li>Accueil</li>
                    <li>À propos</li>
                    <li>Prestations</li>
                    <li>Tarifs</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
// ajouter le onclick sur le span vide pour rendre visible le burger
export default Header;