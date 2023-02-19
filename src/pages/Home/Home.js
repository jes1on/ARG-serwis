import React from "react";
import "./Home.css";

export const Home = (props) => (
  <section className="container">
    <div className="leftColumn">
      <div className="backgroundName">Home</div>
    </div>
    <img src={props.src}/>
    <div className="text1">Text nr 1</div>
    <div className="sentences">
      <div className="text2">{props.top}</div>
      <div className="text3">{props.bottom}</div>
    </div>
    <div className="line"></div>
  </section>
);
