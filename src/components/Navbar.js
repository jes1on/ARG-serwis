import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    ARGSerwis
                </Link>

                <div className='menu-container'>
                    <Link to="/" className='oferta'>
                        Oferta
                    </Link>
                    <Link to="/" className='geometria'>
                        Geometria 3D
                    </Link>
                    <Link to="/" className='klasyki'>
                        Klasyki
                    </Link>
                    <Link to="/" className='cennik'>
                        Cennik
                    </Link>
                    <Link to="/" className='galeria'>
                        Galeria
                    </Link>                      
                </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar;