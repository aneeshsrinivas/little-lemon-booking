import React from 'react';
import './Testimonials.css';

const data = [
  {
    id: 1,
    name: 'Emma B.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    review:
      'Best experience! Perfect atmosphere and delicious food – can’t wait to come back!'
  },
  {
    id: 2,
    name: 'Michael R.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=center',
    review:
      'Incredible Mediterranean cuisine and friendly staff. Highly recommend the Greek salad!'
  },
  {
    id: 3,
    name: 'Sarah L.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=center',
    review:
      'A hidden gem! The lemon dessert is to die for – perfect date night spot.'
  },
  {
    id: 4,
    name: 'David K.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=center',
    review:
      'Outstanding service and amazingly fresh flavours – authentic Mediterranean taste!'
  }
];

const stars = '★★★★★';

const Testimonials = () => (
  <section id="testimonials" className="testimonials section">
    <h2 className="section-title">What Our Customers Say</h2>
    <p className="section-subtitle">Hear it straight from our guests</p>
    <div className="test-grid">
      {data.map(({ id, name, avatar, review }) => (
        <article key={id} className="test-card">
          <header>
            <img src={avatar} alt={name} />
            <div>
              <h4>{name}</h4>
              <span className="stars">{stars}</span>
            </div>
          </header>
          <p>“{review}”</p>
        </article>
      ))}
    </div>
  </section>
);

export default Testimonials;
