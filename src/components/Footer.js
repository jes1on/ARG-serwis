import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-left'>    
                    <div className='footer-loc'>
                        Lokalizacja <br></br>
                        Katowice
                    </div>
                    <div className='footer-menu'>
                        <Link to="/" className='oferta-f'>
                            Oferta
                        </Link>
                        <Link to="/" className='geometria-f'>
                            Geometria 3D
                        </Link>
                        <Link to="/" className='klasyki-f'>
                            Klasyki
                        </Link>
                        <Link to="/" className='cennik-f'>
                            Cennik
                        </Link>
                        <Link to="/" className='galeria-f'>
                            Galeria
                        </Link>
                    </div>
                </div>
                <div className='footer-call-container'>
                    <div className='footer-call'>
                        <h1>Zadzwoń do nas</h1> 
                    </div>
                    <div className='footer-call-nr'>
                        123 123 123
                    </div>
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