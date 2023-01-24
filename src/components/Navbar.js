import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

  return (
    <>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className='navbar-container'>      
                <Link to="/" className='navbar-logo' onClick={handleClick}>
                    ARGSerwis
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            OFERTA
                        </Link>
                    </li>
                    <li className='nav-item'>                    
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            GEOMETRIA 3D
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            KLASYKI
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            CENNIK
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            GALERIA
                        </Link>
                    </li>                      
                </ul>
            </div>
        </nav>
        <div className='lolo'>
                lolo
            </div>
    </>
  );
}

export default Navbar;