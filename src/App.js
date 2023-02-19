import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.js";
import { Footer } from "./components/Footer.js";
import image1 from './pages/images/mercedes1.jpg';
import image2 from './pages/images/mercedes2.jpg';

function App() {
  const images = [
  {
    id: [1],
    //src: '../images/mercedes1.jpg',
    src: image1,
  },
  {
    id: [2],
    //src: '../images/mercedes2.jpg'
    src: image2,
  },
];

  return (
  <Router>
    <Routes>
      <Route path="/" element={ <Home src={images[1]}/> } />
    </Routes>
    <Footer />
  </Router>
  );
}
export default App;
