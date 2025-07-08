import React, { useState } from 'react';
import './BookingForm.css';

const empty = { name: '', email: '', date: '', time: '', guests: '2', occasion: 'none' };

const BookingForm = () => {
  const [data, setData] = useState(empty);
  const [err, setErr] = useState({});

  const handle = (e) => {
    const { name, value } = e.target;
    setData((v) => ({ ...v, [name]: value }));
    if (err[name]) setErr((v) => ({ ...v, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!data.name.trim()) e.name = 'Name required';
    if (!data.email.trim()) e.email = 'Email required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) e.email = 'Invalid email';
    if (!data.date) e.date = 'Date required';
    if (!data.time) e.time = 'Time required';
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const submit = (evt) => {
    evt.preventDefault();
    if (!validate()) return;
    alert('Reservation submitted – see console');
    console.log(data);
    setData(empty);
  };

  return (
    <section id="booking" className="booking section">
      <div className="container booking-wrap">
        <h2 className="section-title">Reserve a Table</h2>
        <p className="section-subtitle">Book your table for an unforgettable evening</p>
        <form onSubmit={submit} className="booking-form">
          <div className="group">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              name="name"
              value={data.name}
              onChange={handle}
              className={err.name ? 'error' : ''}
              placeholder="Jane Doe"
            />
            {err.name && <span className="msg">{err.name}</span>}
          </div>
          <div className="group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={data.email}
              onChange={handle}
              className={err.email ? 'error' : ''}
              placeholder="jane@example.com"
            />
            {err.email && <span className="msg">{err.email}</span>}
          </div>
          <div className="row">
            <div className="group">
              <label htmlFor="date">Date *</label>
              <input
                id="date"
                type="date"
                name="date"
                value={data.date}
                onChange={handle}
                className={err.date ? 'error' : ''}
              />
              {err.date && <span className="msg">{err.date}</span>}
            </div>
            <div className="group">
              <label htmlFor="time">Time *</label>
              <select
                id="time"
                name="time"
                value={data.time}
                onChange={handle}
                className={err.time ? 'error' : ''}
              >
                <option value="">Select</option>
                {[
                  '17:00',
                  '17:30',
                  '18:00',
                  '18:30',
                  '19:00',
                  '19:30',
                  '20:00',
                  '20:30',
                  '21:00'
                ].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {err.time && <span className="msg">{err.time}</span>}
            </div>
          </div>
          <div className="row">
            <div className="group">
              <label htmlFor="guests">Guests</label>
              <select id="guests" name="guests" value={data.guests} onChange={handle}>
                {[...Array(8)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="group">
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                name="occasion"
                value={data.occasion}
                onChange={handle}
              >
                <option value="none">None</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date">Date Night</option>
                <option value="business">Business Dinner</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary full">
            Make Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
