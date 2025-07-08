import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="about section">
    <div className="about-grid container">
      <img
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=550&h=650&fit=crop&crop=center"
        alt="Restaurant interior"
      />
      <div className="about-text">
        <h2>Little Lemon’s Story</h2>
        <p>
          Our restaurant began with a simple idea: bring authentic Mediterranean
          flavors to the heart of Chicago. Founded by the Rossi family in 1995,
          we blend time-honoured recipes with modern culinary techniques.
        </p>
        <p>
          Great food brings people together. Every dish is prepared with the
          finest locally-sourced ingredients and a dash of Mediterranean
          hospitality.
        </p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  </section>
);

export default About;
