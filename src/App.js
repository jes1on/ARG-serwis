import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Home } from "./pages/Home/Home.js";
import { Oferta } from "./pages/Oferta/Oferta";
import { Footer } from "./components/Footer.js";
import { ArrowButton } from "./components/Button";
import { Gallery } from "./pages/Gallery/Galeria.js";
import { Contact } from "./pages/Contact/Contact.js";
import { PriceList } from "./pages/Price list/Cennik";
import { stageManagerContent } from "./components/Data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main data={stageManagerContent[0]} />} />
        <Route
          path="/oferta"
          element={<Main data={stageManagerContent[1]} />}
        />
        <Route
          path="/geometria-3d"
          element={<Main data={stageManagerContent[2]} />}
        />
        <Route
          path="/klasyki"
          element={<Main data={stageManagerContent[3]} />}
        />
        <Route
          path="/cennik"
          element={<Main data={stageManagerContent[4]} />}
        />
        <Route
          path="/galeria"
          element={<Main data={stageManagerContent[5]} />}
        />
        <Route
          path="/kontakt"
          element={<Main data={stageManagerContent[6]} />}
        />
      </Routes>
      <ArrowButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/geometria-3d" element={<Home />} />
        <Route path="/klasyki" element={<Home />} />
        <Route path="/cennik" element={<PriceList />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
