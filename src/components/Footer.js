import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className='footerContainer'>   
                <div className='footerLoc'>
                    <h2>Lokalizacja</h2>
                        ul. G. Ziętka x/D<br></br>
                        40-400 Katowice
                </div>
                <div className='footerMenu'>
                    <Link to="/" className='footerLink'>
                        OFERTA
                    </Link>
                    <Link to="/" className='footerLink'>
                        GEOMETRIA 3D
                    </Link>
                    <Link to="/" className='footerLink'>
                        KLASYKI
                    </Link>
                    <Link to="/" className='footerLink'>
                        CENNIK
                    </Link>
                    <Link to="/" className='footerLink'>
                        GALERIA
                    </Link>
                    <Link to="/" className='footerLink'>
                        KONTAKT
                    </Link>
                </div>
                <div className='footerCallContainer'>
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