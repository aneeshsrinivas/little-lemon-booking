import React from 'react';
import './Header.css';

const Header = () => (
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
    </div>
  </header>
);

export default Header;
