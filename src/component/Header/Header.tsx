import './Header.scss';
import logo from '../../assets/images/logothick.png';
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
    isVisible: boolean;
    toggleVisibility: () => void;
}

function Header({ isVisible, toggleVisibility }: HeaderProps) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    // Closing on a short delay (instead of immediately) survives the gap the
    // pointer crosses between the trigger and the floating panel below it —
    // without it, mouseleave fires mid-transit and the panel vanishes before
    // the pointer arrives.
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearCloseTimer = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const handleMouseEnter = () => {
        clearCloseTimer();
        setDropdownOpen(true);
    };
    const handleMouseLeave = () => {
        clearCloseTimer();
        closeTimer.current = setTimeout(() => setDropdownOpen(false), 200);
    };

    useEffect(() => clearCloseTimer, []);

    useEffect(() => {
        const val = isVisible ? 'hidden' : '';
        document.body.style.overflow = val;
        document.documentElement.style.overflow = val;
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isVisible]);

    return (
        <header>
            {/* Phone Navigation */}
            <nav id="headerPhone">
                <Link to="/">
                    <img className='headerLogo' src={logo} alt="logo un instant pour soi" />
                </Link>
                <div className={`menu-icon ${isVisible ? 'is-opened' : ''}`}>
                    <span onClick={toggleVisibility}></span>
                </div>
                <ul className={`navList ${isVisible ? 'active' : ''}`}>
                    <li><NavLink className={'nav-link'} to="/" onClick={toggleVisibility}>ACCUEIL</NavLink></li>
                    {/* <li><NavLink className={'nav-link'} to="/Apropos" onClick={toggleVisibility}>A PROPOS</NavLink></li> */}
                    <li><NavLink className={'nav-link'} to="/SoinsNeocare" onClick={toggleVisibility}>SOINS NEOCARE</NavLink></li>
                    <li><NavLink className={'nav-link'} to="/SoinsSurMesure" onClick={toggleVisibility}>SOINS SUR MESURE</NavLink></li>
                    <li><NavLink className={'nav-link'} to="/PrestationsBeaute" onClick={toggleVisibility}>PRESTATIONS BEAUTE</NavLink></li>
                    {/* Carte cadeau: page not linked yet, not ready for production */}
                    <li><NavLink className={'nav-link'} to="/Contact" onClick={toggleVisibility}>CONTACT</NavLink></li>
                </ul>
            </nav>

            {/* Laptop Navigation */}
            <nav id="headerLaptop">
                <div className='logoDiv'>
                    <Link to="/">
                        <img className='headerLogoLaptop' src={logo} alt="logo un instant pour soi" />
                    </Link>
                </div>
                <div className="linkDiv">
                    <ul>
                        <li><NavLink className={`nav-link`} to="/" aria-label="Redirige vers la page d'accueil">ACCUEIL</NavLink></li>
                        {/* <li><NavLink className={`nav-link`} to="/Apropos">A PROPOS</NavLink></li> */}

                        {/* Dropdown for Prestations */}
                        <li
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className={`nav-link dropdown${isDropdownOpen ? ' open' : ''}`}
                        >
                            <span className="dropdown-trigger">
                                PRESTATIONS
                                <svg className="dropdown-chevron" width="11" height="7" viewBox="0 0 11 7" fill="none">
                                    <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <ul className="dropdown-content">
                                <li><NavLink className="linkPrestaDetails" to="/SoinsNeocare" aria-label="Redirige vers page Soins neocare">Soins neocare</NavLink></li>
                                <li><NavLink className="linkPrestaDetails" to="/SoinsSurMesure" aria-label="Redirige vers page Soins sur mesure">Soins sur mesure</NavLink></li>
                                <li><NavLink className="linkPrestaDetails" to="/PrestationsBeaute" aria-label="Redirige vers page Prestations beauté">Prestations beauté</NavLink></li>
                            </ul>
                        </li>

                        {/* Carte cadeau: page not linked yet, not ready for production */}
                        <li><NavLink className={`nav-link`} to="/Contact">CONTACT</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
