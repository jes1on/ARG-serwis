import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [click, setClick] = useState(false);
  return (
    <>
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-loc'>
                    Lokalizacja
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
                    Zadzwoń do nas 
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

export default Navbar;