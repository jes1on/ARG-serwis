import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/Home.js';
import {Footer} from './components/Footer.js';

function App() {
  return (
    <>  
      <Router>
        <Home />
          <Routes>
            <Route path='/' exact component={Home} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
