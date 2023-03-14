import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Home } from "./pages/Home/Home.js";
import { Oferta } from "./pages/Oferta/Oferta";
import { Footer } from "./components/Footer.js";
import image1 from "./pages/images/mercedes1.jpg";
import image2 from "./pages/images/mercedes2.jpg";
import { ArrowButton } from "./components/Button";

function App() {
  const stageManager = [
    {
      src: image1,
      title: "ARG", //0 Home
      subTitle: "Text nr 1",
      top: "Top sentence top sentence top sentence",
      bottom: "Bottom sentence bottom senence bottom sentence",
    },
    {
      src: image2,
      title: "ARG", //1 Oferta
      subTitle: "Oferta",
      top: "Top sentence 2",
      bottom: "Bottom sentence 2",
    },
    {
      src: image1,
      title: "ARG", //2 Geometria 3D
      subTitle: "Geometria 3D",
      top: "Top sentence top sentence top sentence",
      bottom: "Bottom sentence bottom senence bottom sentence",
    },
    {
      src: image2,
      title: "ARG", //3 Klasyki
      subTitle: "Klasyki",
      top: "Top sentence top sentence top sentence",
      bottom: "Bottom sentence bottom senence bottom sentence",
    },
    {
      src: image1,
      title: "ARG", //4 Cennik
      subTitle: "Cennik",
      top: "Top sentence top sentence top sentence",
      bottom: "Bottom sentence bottom senence bottom sentence",
    },
    {
      src: image2,
      title: "ARG", //5 Galeria
      subTitle: "Galeria",
      top: "Top sentence top sentence top sentence",
      bottom: "Bottom sentence bottom senence bottom sentence",
    },
    {
      src: image1,
      title: "ARG", //6 Kontakt
      subTitle: "Kontakt",
      top: "Top sentence top sentence top sentence",
      bottom: "Bottom sentence bottom senence bottom sentence",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main data={stageManager[0]} />} />
        <Route path="/oferta" element={<Main data={stageManager[1]} />} />
        <Route path="/geometria-3d" element={<Main data={stageManager[2]} />} />
        <Route path="/klasyki" element={<Main data={stageManager[3]} />} />
        <Route path="/cennik" element={<Main data={stageManager[4]} />} />
        <Route path="/galeria" element={<Main data={stageManager[5]} />} />
        <Route path="/kontakt" element={<Main data={stageManager[6]} />} />
      </Routes>
      <ArrowButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/geometria-3d" element={<Oferta />} />
        <Route path="/klasyki" element={<Oferta />} />
        <Route path="/cennik" element={<Oferta />} />
        <Route path="/galeria" element={<Oferta />} />
        <Route path="/kontakt" element={<Oferta />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
