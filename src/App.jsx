import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </>
      )}
    </>
  );
}

export default App;