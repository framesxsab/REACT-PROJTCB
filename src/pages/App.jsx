import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contribute from "./Contribute";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import ResourcePage from "./ResourcePage";
import Explore from "./Explore";
import "../index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/resource/:id" element={<ResourcePage />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}

export default App;