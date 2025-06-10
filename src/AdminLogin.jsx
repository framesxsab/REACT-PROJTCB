import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const adminUsername = "admin";
        const adminPassword = "Balaji@123";
        if (username === adminUsername && password === adminPassword) {
            localStorage.setItem("isAdminLoggedIn", "true");
            navigate("/admin-dashboard");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-800 via-cyan-600 to-teal-500 flex items-center justify-center p-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-white text-center mb-8">Admin Login</h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-white mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-white mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-white/20 text-white py-3 px-6 rounded-xl hover:bg-white/30 transition"
                    >
                        Login
                    </button>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </form>
            </div>
        </div>
    );
}
