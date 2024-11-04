import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Main = ({ data }) => {
/*   if (window.scrollY > window.innerHeight) {
    setTimeout(function () {
      window.scrollBy({
        top: 100,
      });
    }, 750);
  } */

  return (
    <section className="container">
      <div className="leftColumn">
        <p className="backgroundName">{data.title}</p>
      </div>
      <div className="backgroundImg" />
      <div className="textLeft">
        <p className="text1">{data.subTitle}</p>
        <div className="icons">
          <ul>
            <li>
              <a className="facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} />
              </a>
            </li>
            <li>
              <a className="instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "white" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sentences">
        <p className="text2">{data.top}</p>
        <p className="text3">{data.bottom}</p>
      </div>
      <div className="line"></div>
    </section>
  );
};
