import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AddEvent from "./pages/AddEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
         path="/dashboard"
         element={
         <PrivateRoute>
           <Dashboard />
         </PrivateRoute>
       }/>
      <Route path="/add-event" element={<AddEvent />} />
    </Routes>
  );
}

export default App;