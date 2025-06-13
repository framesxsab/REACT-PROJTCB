import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contribute() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newResource = {
      id: Date.now(),
      ...formData,
      status: "pending",
    };
    const pendingResources = JSON.parse(localStorage.getItem("pendingResources")) || [];
    pendingResources.push(newResource);
    localStorage.setItem("pendingResources", JSON.stringify(pendingResources));
    setSubmitted(true);
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="font-serif min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-300 relative overflow-hidden">
      {/* Soft overlay for glass effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none z-0" />
      <nav className="relative z-10 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white hover:text-cyan-300 transition-colors font-semibold text-lg flex items-center gap-1">
            <span className="text-xl">←</span> Back to Home
          </a>
        </div>
      </nav>
      <main className="flex-grow flex items-center justify-center py-12 px-4 relative z-10">
        <div className="w-full max-w-2xl bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-10 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent mb-8 font-[Cinzel] drop-shadow-lg">
            Contribute a Resource
          </h1>
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12">
              <span className="text-5xl text-cyan-400">✅</span>
              <p className="text-xl font-semibold text-center text-white">Thank you for your contribution!<br />Redirecting...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7 w-full">
              <div>
                <label htmlFor="title" className="flex text-sm font-medium text-cyan-100 mb-1 items-center gap-2">
                  <span className="text-lg">📚</span> Resource Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter the resource title"
                  className="w-full px-4 py-3 bg-white/80 border border-cyan-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none shadow-sm placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="category" className="flex text-sm font-medium text-cyan-100 mb-1 items-center gap-2">
                  <span className="text-lg">🏷️</span> Category
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 border border-cyan-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none shadow-sm"
                >
                  <option value="" disabled>Select a category</option>
                  <option value="bookstore">Bookstore</option>
                  <option value="cafe">Cafe</option>
                  <option value="study_material">Study Material</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="description" className="flex text-sm font-medium text-cyan-100 mb-1 items-center gap-2">
                  <span className="text-lg">📝</span> Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Provide a brief description"
                  className="w-full px-4 py-3 bg-white/80 border border-cyan-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none shadow-sm placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <div>
                <label htmlFor="location" className="flex text-sm font-medium text-cyan-100 mb-1 items-center gap-2">
                  <span className="text-lg">📍</span> Location (Optional)
                </label>
                <input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter the location (if applicable)"
                  className="w-full px-4 py-3 bg-white/80 border border-cyan-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none shadow-sm placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg font-semibold text-lg flex items-center justify-center gap-2"
              >
                <span>Submit Resource</span> <span>🚀</span>
              </button>
            </form>
          )}
        </div>
      </main>
      <footer className="bg-gradient-to-r from-gray-800/90 via-gray-900/95 to-black/90 backdrop-blur-md border-t border-white/10 text-white py-6 mt-auto shadow-inner relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center gap-2">
          <span className="text-2xl">🤝</span>
          <p className="text-white/90 font-medium">&copy; 2025 Student Resources. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}