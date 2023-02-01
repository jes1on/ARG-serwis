import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Footer} from './components/Footer.js';

function App() {
  return (
    <>  
      <Router>
        <Routes>
          <Route path='/' exact />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
