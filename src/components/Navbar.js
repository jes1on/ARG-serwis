import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            ARGSerwis
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={
                click ? (
                  <FontAwesomeIcon icon={faXmark} style={{ color: "#fff" }} />
                ) : (
                  <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                )
              }
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/oferta"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                OFERTA
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/geometria-3d"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                GEOMETRIA 3D
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/klasyki"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                KLASYKI
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cennik"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CENNIK
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/galeria"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                GALERIA
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/kontakt"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                KONTAKT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
