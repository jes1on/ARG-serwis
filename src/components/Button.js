import React, { useState, useEffect } from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const ArrowButton = () => {
  const [showScrollDownButton, setShowScrollDownButton] = useState(true);
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 1.1 * window.innerHeight) {
        setShowScrollDownButton(true);
        setShowScrollUpButton(false);
      } else {
        setShowScrollDownButton(false);
        setShowScrollUpButton(true);
      }
    });
  }, []);

  //scroll w dol
  const scrollDown = () => {
    window.scrollBy({
      top: 100,
    });
  };

  //scroll w gore
  const scrollUp = () => {
    window.scrollTo({
      top: innerHeight,
    });
  };

  return (
    <div className="arrowButton">
      <button className="buttonDown">
        {showScrollDownButton && (
          <FontAwesomeIcon
            icon={faAngleDown}
            className="faAngleDown1"
            onClick={scrollDown}
          />
        )}
      </button>
      <button className="buttonUp">
        {showScrollUpButton && (
          <FontAwesomeIcon
            icon={faAngleUp}
            className="faAngleUp1"
            onClick={scrollUp}
          />
        )}
      </button>
    </div>
  );
};
