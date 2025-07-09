import React, { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setError("Name is required");
    } else {
      setError("");
      // Handle booking logic here
      alert(`Reservation submitted for ${name}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Reserve</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default BookingForm;
