import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
//import { Home } from "../pages/Home/Home";

export const ArrowButton = () => (
  <div className="arrowButton">
    <button className="button">
      <FontAwesomeIcon icon={faAngleDown} className="faAngleDown1" />
    </button>
  </div>
);
