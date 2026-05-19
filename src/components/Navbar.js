import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand fw-bold">🎓 Event SaaS</span>

      <div>
        <button className="btn btn-outline-light me-2" onClick={() => navigate("/dashboard")}>
          Dashboard
        </button>

        <button className="btn btn-outline-info me-2" onClick={() => navigate("/add-event")}>
          Add Event
        </button>

        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;