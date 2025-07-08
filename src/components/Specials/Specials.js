import React from 'react';
import './Specials.css';

const specials = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    desc: 'Fresh vegetables, feta cheese, olives, and our signature dressing.',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=250&fit=crop&crop=center'
  },
  {
    id: 2,
    name: 'Lemon Dessert',
    price: '$8.99',
    desc: 'Traditional Greek lemon cake served with vanilla ice-cream.',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=250&fit=crop&crop=center'
  },
  {
    id: 3,
    name: 'Grilled Sea Bass',
    price: '$24.99',
    desc: 'Mediterranean sea bass grilled with herbs, lemon and olive oil.',
    img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=250&fit=crop&crop=center'
  }
];

const Specials = () => (
  <section id="specials" className="specials section">
    <h2 className="section-title">This Week’s Specials</h2>
    <p className="section-subtitle">Chef-selected dishes you shouldn’t miss</p>
    <div className="specials-grid">
      {specials.map(({ id, name, price, desc, img }) => (
        <article key={id} className="card">
          <img src={img} alt={name} />
          <div className="card-body">
            <header>
              <h3>{name}</h3>
              <span className="price">{price}</span>
            </header>
            <p>{desc}</p>
            <button className="btn btn-secondary">Order Now</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Specials;
