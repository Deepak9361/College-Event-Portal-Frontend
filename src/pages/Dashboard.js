import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import API from "../api";

function Dashboard() {
  const [events, setEvents] = useState([]);

  // 🔹 FETCH EVENTS
  useEffect(() => {
    axios
      .get(`${API}/api/events`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 🔹 DELETE EVENT
  const handleDelete = (id) => {
    axios
      .delete(`${API}/api/events/${id}`)
      .then(() => {
        setEvents((prev) => prev.filter((event) => event._id !== id));
      })
      .catch((err) => console.log(err));
  };

  // 🔹 EDIT EVENT
  const handleEdit = (event) => {
    const newTitle = prompt("Enter new title", event.title);

    if (!newTitle) return;

    axios
      .put(`${API}/api/events/update/${event._id}`, {
        title: newTitle,
        date: event.date,
        location: event.location,
        description: event.description,
      })
      .then((res) => {
        setEvents((prev) =>
          prev.map((e) => (e._id === event._id ? res.data : e))
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ background: "#b5bac0", minHeight: "100vh" }}>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4 fw-bold">📅 Events Dashboard</h2>

        <div className="row">
          {events.length === 0 ? (
            <p>No events found</p>
          ) : (
            events.map((event) => (
              <div className="col-md-4 mb-3" key={event._id}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">📍 {event.location}</p>
                    <p className="card-text">📅 {event.date}</p>
                    <p className="card-text text-muted">
                      {event.description}
                    </p>

                    <div className="d-flex gap-2">
                      {/* EDIT */}
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleEdit(event)}
                      >
                        Edit
                      </button>

                      {/* DELETE */}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(event._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;