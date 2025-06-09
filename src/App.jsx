import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ResourcePage from "./pages/ResourcePage";
import Explore from "./pages/Explore";
import '../index.css';

function App(){
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

    
 
// Ye code React Router ka istemal karta hai jismein alag-alag routes define kiye gaye hain.

