import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Main = (props) => {
  const { title, subTitle, top, bottom, src } = props.data;
  return (
    <section className="container">
      <div className="leftColumn">
        <p className="backgroundName">{title}</p>
      </div>
      <img className="backgroundImg" src={src} />
      <div className="textLeft">
        <p className="text1">{subTitle}</p>
        <div className="icons">
          <ul>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} />
              </a>
            </li>
            <li>
              <a
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
        <p className="text2">{top}</p>
        <p className="text3">{bottom}</p>
      </div>
      <div className="line"></div>
    </section>
  );
};
