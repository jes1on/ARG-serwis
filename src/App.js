import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/Home.js';
import {Footer} from './components/Footer.js';

export const App = () => (  
  <Router>
    <Routes>
      <Route path='/' exact component={Home} />
    </Routes>
    <Footer />
  </Router>
);
