import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div>
        <h3>Contact</h3>
        <p>
          📍 123 Mediterranean Way, Chicago<br />
          📞 (312) 555-LEMON<br />
          ✉️ info@littlelemon.com
        </p>
      </div>
      <div>
        <h3>Hours</h3>
        <p>
          Mon–Thu 5-10 PM<br />
          Fri–Sat 5-11 PM<br />
          Sun 4-9 PM
        </p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <a href="#">📘 Facebook</a>
        <a href="#">📷 Instagram</a>
        <a href="#">🐦 Twitter</a>
        <a href="#">⭐ Yelp</a>
      </div>
    </div>
    <div className="bottom">
      <div className="brand">
        <img
          src="https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=40&h=40&fit=crop&crop=center"
          alt="logo"
        />
        <span>Little Lemon</span>
      </div>
      <p>&copy; 2025 Little Lemon Restaurant. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
