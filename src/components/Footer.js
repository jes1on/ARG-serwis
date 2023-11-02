import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      duration: 1000,
    });
  }
  return (
  <footer className="footerContainer">
    <div className="footerContent">
      <div className="footerLoc">
        <h2>Lokalizacja</h2>
        <p>ul. Gliwicka 234</p>
        <p>40-860 Katowice</p>
      </div>
      <div className="footerMenu">
        <Link to="/oferta" className="footerLink" onClick={scrollToTop}>
          OFERTA
        </Link>
        <Link to="/geometria-3d" className="footerLink" onClick={scrollToTop}>
          GEOMETRIA 3D
        </Link>
        <Link to="/klasyki" className="footerLink" onClick={scrollToTop}>
          KLASYKI
        </Link>
        <Link to="/cennik" className="footerLink" onClick={scrollToTop}>
          CENNIK
        </Link>
        <Link to="/galeria" className="footerLink" onClick={scrollToTop}>
          GALERIA
        </Link>
        <Link to="/kontakt" className="footerLink" onClick={scrollToTop}>
          KONTAKT
        </Link>
      </div>
      <div className="footerCallContainer">
        <h2>Zadzwoń do nas</h2>
        <p>32 307 44 34</p>
      </div>
    </div>
    <div className="sign">BL S.A.</div>
  </footer>
)};
