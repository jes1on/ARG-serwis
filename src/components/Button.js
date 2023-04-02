import React, { useState, useEffect } from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const ArrowButton = () => {
  const [showScrollDownButton, setShowScrollDownButton] = useState(true);
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  const [showDownButton, setShowDownButton] = useState(true);
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 1.1 * window.innerHeight) {
        setShowScrollDownButton(true);
        setShowScrollUpButton(false);
        setShowDownButton(true);
        setShowUpButton(false);
      } else {
        setShowScrollDownButton(false);
        setShowScrollUpButton(true);
        setShowDownButton(false);
        setShowUpButton(true);
      }
    });
  }, []);

  //scroll down
  const scrollDown = () => {
    window.scrollBy({
      top: 100,
    });
  };

  //scroll up
  const scrollUp = () => {
    window.scrollTo({
      top: innerHeight,
    });
  };

  return (
    <div className="arrowButton">
      {showDownButton && <button className="buttonDown">
        {showScrollDownButton && (
          <FontAwesomeIcon
            icon={faAngleDown}
            className="faAngleDown1"
            onClick={scrollDown}
          />
        )}
      </button>}
      {showUpButton && <button className="buttonUp">
        {showScrollUpButton && (
          <FontAwesomeIcon
            icon={faAngleUp}
            className="faAngleUp1"
            onClick={scrollUp}
          />
        )}
      </button>}
    </div>
  );
};
