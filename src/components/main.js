import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { ArrowButton } from "./Button";

export const Main = (props) => (

  <section className="container">
    <div className="leftColumn">
      <div className="backgroundName">{props.title}</div>
    </div>
    <img src={props.src} />
    <div className="textLeft">
      <div className="text1">{props.subTitle}</div>
      <div className="icons">
        <ul>
          <li><a href="https://facebook.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{color:"white"}}/></a></li>
          <li><a href="https://instagram.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} style={{color:"white"}}/></a></li>
        </ul>
      </div>
    </div>
    <div className="sentences">
      <div className="text2">{props.top}</div>
      <div className="text3">{props.bottom}</div>
    </div>
    <div className="line"></div>
    <ArrowButton />
  </section>
);
