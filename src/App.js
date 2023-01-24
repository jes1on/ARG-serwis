import './App.css';
import React, { Component }  from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>  
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact />
            {/*<Route path='/' exact component={Oferta} />
            <Route path='/' exact component={Geometria 3d}} />
            <Route path='/' exact component={Klasyki} />
            <Route path='/' exact component={Cennik} />
            <Route path='/' exact component={Galeria} />*/}
          </Routes>
      </Router>
    </>
  );
}

export default App;
