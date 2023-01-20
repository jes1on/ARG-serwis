import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-loc'>
                    Lokalizacja <br></br>
                    Katowice
                </div>
                <div className='footer-menu'>
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
                <div className='footer-call'>
                    <h1>Zadzwoń do nas</h1> 
                </div>
                <div className='footer-call-nr'>
                    123 123 123
                </div>
                <div className='sign'>
                    BL S.A.
                </div>
            </div>
        </footer>
    </>
  );
}

export default Footer;