import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import image1 from '../images/mercedes1.jpg';
import App from "../../App";

export const Home = (props) => (
  <section className="container">
    <img src={props.src[2]}/>
  </section>
);
