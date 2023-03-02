import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Home } from "./pages/Home/Home.js";
import { Footer } from "./components/Footer.js";
import image1 from "./pages/images/mercedes1.jpg";
import image2 from "./pages/images/mercedes2.jpg";

function App() {
  const images = [
    {
      src: image1, //0 Home
    },
    {
      src: image2, //1 Oferta
    },
  ];

  const sentences = [
    {
      title: "ARG", //0 Home
      subTitle: "Text nr 1",
      top: "Top sentence top sentence top sentence",
      bottom: "Bottom sentence bottom senence bottom sentence",
    },
    {
      title: "Oferta", //1 Oferta
      subTitle: "Text nr 2",
      top: "Top sentence 2",
      bottom: "Bottom sentence 2",
    },
  ];

  // const section1 = useRef();

  // const scrollHandler = (elmRef) => {
  //   console.log(elmRef.current);
  //   window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  // };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              title={sentences[0].title}
              subTitle={sentences[0].subTitle}
              src={images[0].src}
              top={sentences[0].top}
              bottom={sentences[0].bottom}
            />
          }
        />
        <Route
          path="/Oferta"
          element={
            <Main
              title={sentences[1].title}
              subTitle={sentences[1].subTitle}
              src={images[1].src}
              top={sentences[1].top}
              bottom={sentences[1].bottom}
            />
          }
        />
      </Routes>
      <Home />
      <Footer />
    </Router>
  );
}
export default App;
