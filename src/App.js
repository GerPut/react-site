import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutPage from './components/pages/AboutPage';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<AboutPage />} />
          <Route path='/sign-up' element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
