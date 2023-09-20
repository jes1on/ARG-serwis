import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import {Footer} from './components/Footer.js';

function App() {
  return (
    <>  
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact />
          </Routes>
        <Footer />
          <Routes>
            <Route path='/' exact />
          </Routes>
      </Router>
    </>
  );
}

export default App;
