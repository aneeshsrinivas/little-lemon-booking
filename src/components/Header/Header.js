import React from 'react';
import './Header.css';

const Header = ({ onBook }) => (
  <header className="header">
    <div className="container header-content">
      <div className="logo">
        <img
          src="https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=60&h=60&fit=crop&crop=center"
          alt="Little Lemon logo"
          className="logo-img"
        />
        <h1>Little Lemon</h1>
      </div>

      <nav className="nav-menu" aria-label="Main navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#specials">Specials</a></li>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>

      <button
        className="btn btn-primary book-header-btn"
        onClick={onBook}
      >
        Book a Table
      </button>
    </div>
  </header>
);

export default Header;
