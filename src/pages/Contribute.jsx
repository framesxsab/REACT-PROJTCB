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

    alert("Your contribution has been submitted for review.");
    navigate("/"); // Redirect to home
  };

  return (
    <div className="font-serif text-gray-100 min-h-screen bg-cover bg-fixed bg-no-repeat relative"
         style={{ backgroundImage: "url('/assets/studentbg.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/80 z-0" />

      <nav className="relative z-10 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white hover:text-blue-300 transition-colors">← Back to Home</a>
        </div>
      </nav>

      <main className="min-h-screen py-12 px-4 relative z-10">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-center text-white mb-8 font-[Cinzel]">Contribute a Resource</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-200 mb-1">Resource Title</label>
              <input
                id="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter the resource title"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-200 mb-1">Category</label>
              <select
                id="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              >
                <option value="" disabled>Select a category</option>
                <option value="bookstore">Bookstore</option>
                <option value="cafe">Cafe</option>
                <option value="study_material">Study Material</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-200 mb-1">Description</label>
              <textarea
                id="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Provide a brief description"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              ></textarea>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-200 mb-1">Location (Optional)</label>
              <input
                id="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter the location (if applicable)"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>

            <button type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Submit Resource
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
