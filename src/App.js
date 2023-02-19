import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.js";
import { Footer } from "./components/Footer.js";
import image1 from "./pages/images/mercedes1.jpg";
import image2 from "./pages/images/mercedes2.jpg";

function App() {
  const images = [
    {
      stages: [1],
      src: image1,
    },
    {
      stages: [2],
      src: image2,
    },
  ];

  // mainTitles = [
  //   {
  //     stages: [1, 2],
  //     title: "Title 1",
  //     slot: (
  //       <div className="icons">

  //       </div>
  //     )
  //   }
  // ];

  const sentences = [
    {
      stages: [1, 2],
      top: "Top sentence",
      bottom: "Bottom sentence",
    },
    {
      stages: [3, 4],
      top: "Top sentence1",
      bottom: "Bottom sentence1",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              src={images[0].src}
              top={sentences[0].top}
              bottom={sentences[0].bottom}
            />
          }
        />
        <Route
          path="/Oferta"
          element={
            <Home
              src={images[1].src}
              top={sentences[1].top}
              bottom={sentences[1].bottom}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
