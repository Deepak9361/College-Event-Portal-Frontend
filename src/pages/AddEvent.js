import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AddEvent() {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: ""
  });

  const handleChange = e =>
    setEvent({ ...event, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/events/add", event);
    alert("Event Added 🎉");
  };

  return (
    <div style={{ background: "#f4f6f9", minHeight: "100vh" }}>
      <Navbar />

      <div className="container mt-5">
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
          <h3 className="mb-3">➕ Add New Event</h3>

          <form onSubmit={handleSubmit}>
            <input className="form-control mb-3" name="title" placeholder="Title" onChange={handleChange} />
            <input className="form-control mb-3" name="date" placeholder="Date" onChange={handleChange} />
            <input className="form-control mb-3" name="location" placeholder="Location" onChange={handleChange} />
            <textarea className="form-control mb-3" name="description" placeholder="Description" onChange={handleChange} />

            <button className="btn btn-success w-100">Add Event</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEvent;