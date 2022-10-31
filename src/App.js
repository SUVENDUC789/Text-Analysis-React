import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Footer from './components/Footer'
import TextForm from './components/TextForm';
import React, { useState } from 'react'

import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const tougleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(4, 39, 53)';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text-Analysis" aboutUs="About text analysis" mode={mode} tougleMode={tougleMode} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
