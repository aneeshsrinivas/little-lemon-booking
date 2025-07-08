import React, { useState } from 'react';
import './BookingModal.css';

const seedStatus = (i) =>
  [3, 7, 10].includes(i)
    ? 'booked'
    : [5, 11].includes(i)
    ? 'pending'
    : 'available';

const tablesInit = Array.from({ length: 13 }, (_, i) => ({
  id: i + 1,
  status: seedStatus(i + 1)
}));

const fieldsInit = {
  name: '',
  email: '',
  phone: '',
  people: 1,
  date: '',
  time: '',
  table: null
};

const BookingModal = ({ open, onClose }) => {
  const [fields, setFields] = useState(fieldsInit);
  const [tables, setTables] = useState(tablesInit);
  const [errors, setErrors] = useState({});

  if (!open) return null;

  const update = (e) =>
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  const chooseTable = (t) => {
    if (t.status !== 'available') return;
    setFields((f) => ({ ...f, table: t.id }));
  };

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = 'Required';
    if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = 'Email invalid';
    if (!fields.phone.trim()) e.phone = 'Required';
    if (!fields.date) e.date = 'Pick a date';
    if (!fields.time) e.time = 'Pick a time';
    if (!fields.table) e.table = 'Select a table';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    alert(`Reservation confirmed for ${fields.name}!`);
    setFields(fieldsInit);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2>Make a Reservation</h2>
        <form onSubmit={submit}>
          <div className="grid">
            <label>
              Name &amp; Surname *
              <input
                name="name"
                value={fields.name}
                onChange={update}
                className={errors.name ? 'error' : ''}
              />
            </label>
            <label>
              Email Address *
              <input
                type="email"
                name="email"
                value={fields.email}
                onChange={update}
                className={errors.email ? 'error' : ''}
              />
            </label>
            <label>
              Phone Number *
              <input
                name="phone"
                value={fields.phone}
                onChange={update}
                className={errors.phone ? 'error' : ''}
              />
            </label>
            <label>
              Number of People
              <input
                type="number"
                name="people"
                min="1"
                max="8"
                value={fields.people}
                onChange={update}
              />
            </label>
            <label>
              Select Date *
              <input
                type="date"
                name="date"
                value={fields.date}
                onChange={update}
                className={errors.date ? 'error' : ''}
              />
            </label>
            <label>
              Select Time *
              <input
                type="time"
                name="time"
                value={fields.time}
                onChange={update}
                className={errors.time ? 'error' : ''}
              />
            </label>
          </div>
          <h3>Select Table</h3>
          {errors.table && <p className="msg">{errors.table}</p>}
          <div className="table-map">
            {tables.map((t) => (
              <div
                key={t.id}
                className={`table ${t.status} ${
                  fields.table === t.id ? 'selected' : ''
                }`}
                onClick={() => chooseTable(t)}
              >
                {t.id}
              </div>
            ))}
          </div>
          <div className="legend">
            <span>
              <span className="square available"></span>Available
            </span>
            <span>
              <span className="square pending"></span>Pending
            </span>
            <span>
              <span className="square booked"></span>Booked
            </span>
          </div>
          <button className="btn btn-primary full">Make Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
