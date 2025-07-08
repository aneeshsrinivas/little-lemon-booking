import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id="home" className="hero">
    <div className="container hero-grid">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <button
          className="btn btn-primary hero-book-btn"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('booking');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Book a Table
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=450&fit=crop&crop=center"
        alt="Mediterranean food"
        className="hero-img"
      />
    </div>
  </section>
);

export default Hero;
