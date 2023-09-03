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

export const Contact = () => {
  const observer3 = new IntersectionObserver((entries3) => {
    entries3.forEach((entry3) => {
      console.log(entry3);
      if (entry3.isIntersecting) {
        entry3.target.classList.add("show");
      } else {
        entry3.target.classList.remove("show");
      }
    });
  });

  const hiddenElementsContact = document.querySelectorAll(".hidden");
  hiddenElementsContact.forEach((el) => observer3.observe(el));
  return (
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
          <div className="hidden">
            <h1>KONTAKT</h1>
          </div>
          <section className="contactTable">
            <div className="hidden">
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
            <div className="hidden">
              <h3>
                <FontAwesomeIcon
                  icon={faDoorOpen}
                  style={{ color: "#f8f9fa" }}
                />
              </h3>
              <h3>GODZINY OTWARCIA</h3>
              <p>PON - PT 8 - 18</p>
              <p>SOB 8 - 13</p>
            </div>
            <div className="hidden">
              <h3>
                <FontAwesomeIcon
                  icon={faHashtag}
                  style={{ color: "#f8f9fa" }}
                />
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
          </section>
          <section className="phoneTable">
            <div className="hidden">
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
            <div className="hidden">
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
          </section>
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
};
