import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className='footer-container'>   
                <div className='footer-loc'>
                    <h2>Lokalizacja</h2>
                        ul. G. Ziętka x/D<br></br>
                        40-400 Katowice
                </div>
                <div className='footer-menu'>
                    <Link to="/" className='footer-link'>
                        Oferta
                    </Link>
                    <Link to="/" className='footer-link'>
                        Geometria 3D
                    </Link>
                    <Link to="/" className='footer-link'>
                        Klasyki
                    </Link>
                    <Link to="/" className='footer-link'>
                        Cennik
                    </Link>
                    <Link to="/" className='footer-link'>
                        Galeria
                    </Link>
                    <Link to="/" className='footer-link'>
                        Kontakt
                    </Link>
                </div>
                <div className='footer-call-container'>
                        <h1>Zadzwoń do nas</h1> 
                    
                        123 123 123
                </div>
            </div>
            <div className='sign'>
                BL S.A.
            </div>
        </footer>
    </>
  );
}

export default Footer;