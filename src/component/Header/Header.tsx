import './Header.scss';
import logo from '../../assets/images/logo.jpg';
import { NavLink, Link } from 'react-router-dom';
import React, { useState } from 'react';

interface HeaderProps {
    isVisible: boolean;
    toggleVisibility: () => void;
}

function Header({ isVisible, toggleVisibility }: HeaderProps) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);

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
                    <li><NavLink className={'nav-link'} to="/" onClick={toggleVisibility}>Accueil</NavLink></li>
                    <li><NavLink className={'nav-link'} to="/Apropos" onClick={toggleVisibility}>À propos</NavLink></li>
                    <li>Prestations</li>
                    <li><NavLink className={'nav-link'} to="/Contact" onClick={toggleVisibility}>Contact</NavLink></li>
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
                        <li><NavLink className={`nav-link`} to="/">Accueil</NavLink></li>
                        <li><NavLink className={`nav-link`} to="/Apropos">À propos</NavLink></li>

                        {/* Dropdown for Prestations */}
                        <li
                            // className="dropdown"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} 
                            className={`nav-link dropdown`}
                        >
                            Prestations
                            {isDropdownOpen && (
                                <ul className="dropdown-content">
                                    <li><NavLink className="linkPrestaDetails" to="/SoinsNeocare">Soins neocare</NavLink></li>
                                    <li><NavLink className="linkPrestaDetails" to="/SoinsSurMesure">Soins sur mesure</NavLink></li>
                                    <li><NavLink className="linkPrestaDetails" to="/PrestationsBeaute">Prestations beauté</NavLink></li>
                                </ul>
                            )}
                        </li>

                        <li><NavLink className={`nav-link`} to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
