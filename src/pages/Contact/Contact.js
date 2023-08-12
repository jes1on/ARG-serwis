import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMapLocationDot,
  faClipboard,
  faDoorOpen,
  faHashtag,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => (
  <section className="containerContact">
    <div className="contentContact">
      <iframe
        className="mapWindow-1"
        width="600"
        height="600"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=523&amp;height=432&amp;hl=en&amp;q=ARG%20Serwis%20Katowice%20Ilford+(ARG%20serwis)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <div className="textContact">
        <h1>KONTAKT</h1>

        <div className="contactTable">
          <div className="location">
            <h3>
              <FontAwesomeIcon
                icon={faMapLocationDot}
                style={{ color: "#f8f9fa" }}
              />
            </h3>
            <h3>ADRES</h3>
            <p>ul. Gliwicka 234</p>
            <p>40-860 Katowice</p>
          </div>
          <div className="time">
            <h3>
              <FontAwesomeIcon icon={faDoorOpen} style={{ color: "#f8f9fa" }} />
            </h3>
            <h3>GODZINY OTWARCIA</h3>
            <p>PON - PT 8 - 18</p>
            <p>SOB 8 - 13</p>
          </div>
          <div className="followUs">
            <h3>
              <FontAwesomeIcon icon={faHashtag} style={{ color: "#f8f9fa" }} />
            </h3>
            <h3>OBSERWUJ NAS!</h3>
            <div className="contactIcons">
              <ul>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "white" }}
                    />
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
        </div>
        <div className="phoneTable">
          <div className="phone-1">
            <h3>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ backgroundColor: "none" }}
              />
            </h3>
            <h3>E-MAIL</h3>
            <div className="phoneText">
              <p>
                <button className="btnPhone" title="Skopiuj do schowka">
                  <FontAwesomeIcon
                    icon={faClipboard}
                    onClick={() => {
                      navigator.clipboard.writeText("argcarspa@gmail.com");
                    }}
                  />
                </button>
                argcarspa@gmail.com
              </p>
            </div>
          </div>
          <div className="phone-1">
            <h3>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ backgroundColor: "none" }}
              />{" "}
            </h3>
            <h3>TELEFON</h3>
            <div className="phoneText">
              <p>
                <button className="btnPhone" title="Skopiuj do schowka">
                  <FontAwesomeIcon
                    icon={faClipboard}
                    onClick={() => {
                      navigator.clipboard.writeText(323074434);
                    }}
                  />
                </button>
                32 307 44 34
              </p>
            </div>
          </div>
        </div>
      </div>
      <iframe
        className="mapWindow-2"
        width="400"
        height="400"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=523&amp;height=432&amp;hl=en&amp;q=ARG%20Serwis%20Katowice%20Ilford+(ARG%20serwis)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  </section>
);
