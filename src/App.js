import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/heading'; 
import MapPage from './components/mappage';
import AboutPage from './components/aboutpage';
import './styles/style.css';

function App() {
  return (
    <Router>
      <Header /> {}
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
