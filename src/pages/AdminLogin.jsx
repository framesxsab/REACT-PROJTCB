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
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-400 flex items-center justify-center p-6 relative overflow-hidden">
      {/* background gradient */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-300 opacity-80" style={{ backgroundSize: '200% 200%' }} />
      <div className="relative z-10 bg-white/20 backdrop-blur-2xl border border-cyan-400/20 rounded-2xl shadow-2xl p-10 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent font-[Cinzel] drop-shadow-lg">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-7">
          <div>
            <label className="flex text-cyan-100 mb-2 font-semibold items-center gap-2">
              <span className="text-xl">👤</span> Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-white/80 text-gray-900 border border-cyan-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none shadow-sm placeholder-gray-400"
              required
              placeholder="Enter admin username"
            />
          </div>
          <div>
            <label className="flex text-cyan-100 mb-2 font-semibold items-center gap-2">
              <span className="text-xl">🔒</span> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/80 text-gray-900 border border-cyan-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none shadow-sm placeholder-gray-400"
              required
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-white py-3 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-md"
          >
            <span>Login</span> <span>🔑</span>
          </button>
          {error && <p className="text-red-400 mt-4 text-center font-semibold animate-fadein">{error}</p>}
        </form>
      </div>
      <style>{`
        @keyframes gradient {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .animate-gradient { animation: gradient 12s ease-in-out infinite; }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadein { animation: fadein 0.7s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </div>
  );
}