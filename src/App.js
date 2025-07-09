// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all components you use below:
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Specials from './components/Specials/Specials';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import BookingModal from './components/BookingModal/BookingModal';
import Footer from './components/Footer/Footer';

// Import your global styles
import './App.css';

function App() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <Router>
      {/* Booking modal overlay */}
      <BookingModal open={showBooking} onClose={() => setShowBooking(false)} />

      <div className="App">
        <Header onBook={() => setShowBooking(true)} />

        <main>
          <Hero />
          <Specials />
          <About />
          <Testimonials />
        </main>

        <Footer />

        {/* Optional floating button if desired */}
        {/* <button className="floating-book-btn btn btn-primary" onClick={() => setShowBooking(true)}>
          Book a Table
        </button> */}
      </div>
    </Router>
  );
}

export default App;
