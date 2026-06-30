import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function ScriptInitializer() {
  const location = useLocation();

  useEffect(() => {
    // Remove spinner
    const spinner = document.getElementById('spinner');
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show');
      }, 100);
    }

    // Re-initialize plugins like Wow.js, Waypoints, OwlCarousel after a short delay to allow React to render the DOM
    const timer = setTimeout(() => {
      if (window.jQuery && window.jQuery(document).ready) {
        window.jQuery(document).trigger('ready');
      }
      if (window.WOW) {
        new window.WOW().init();
      }
      
      // Trigger resize for OwlCarousel
      window.dispatchEvent(new Event('resize'));
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-grow text-primary" role="status"></div>
      </div>
      
      <Header />
      <ScriptInitializer />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* We will add other routes later */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
