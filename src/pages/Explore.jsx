import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ExploreResources() {
  const [showResources, setShowResources] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // Rename the static resources to curatedResources
  const curatedResources = [
    {
      title: "Best Bookstores",
      description: "Find the best places to buy textbooks and study materials."
    },
    {
      title: "Affordable Cafes",
      description: "Top study-friendly cafes for students."
    },
    {
      title: "Quiet Libraries",
      description: "Discover peaceful libraries for focused study sessions."
    }
  ];
  // Load contributed/approved resources from localStorage
  const [contributedResources, setContributedResources] = useState([]);
  useEffect(() => {
    const approved = JSON.parse(localStorage.getItem("approvedResources")) || [];
    setContributedResources(approved);
  }, []);
  // Combine the static and contributed resources
  const allResources = [...curatedResources, ...contributedResources];
  const filteredResources = allResources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleExploreClick = () => {
    setShowResources(!showResources);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (!showResources && e.target.value) {
      setShowResources(true);
    }
  };
  return (
    <div className="font-serif min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-300 opacity-80" style={{ backgroundSize: '200% 200%' }} />
      {/* Header with enhanced gradient and shadow */}
      <header className="relative z-10 bg-gradient-to-r from-cyan-900 via-blue-800 to-cyan-700 text-white py-7 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4 font-[Cinzel] tracking-wide drop-shadow-lg">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">Explore Resources</span>
          </h1>
          <nav className="flex flex-col md:flex-row justify-center items-center">
            <ul className="flex space-x-6 mb-4 md:mb-0 text-lg font-semibold">
              <li>
                <a href="/" className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-white px-5 py-2 rounded-xl hover:from-cyan-400 hover:to-blue-800 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-1 shadow-md">Home</a>
              </li>
              <li>
                <a href="/explore" className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-white px-5 py-2 rounded-xl hover:from-cyan-400 hover:to-blue-800 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-1 shadow-md">Resources</a>
              </li>
              <li>
                <a href="/contribute" className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-white px-5 py-2 rounded-xl hover:from-cyan-400 hover:to-blue-800 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-1 shadow-md">Contribute</a>
              </li>
              <li>
                <a href="/about" className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-white px-5 py-2 rounded-xl hover:from-cyan-400 hover:to-blue-800 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-1 shadow-md">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-14 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent font-[Cinzel] drop-shadow-lg">
          Explore Our Curated & Contributed Resources
        </h2>
        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex gap-2 items-center">
            <span className="text-2xl text-cyan-400">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search resources..."
              className="w-full px-5 py-3 rounded-xl border border-cyan-200 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none shadow-md bg-white/90 text-gray-800 placeholder-gray-400"
            />
          </div>
          <button
            onClick={handleExploreClick}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg font-semibold text-lg flex items-center justify-center gap-2"
          >
            {showResources ? "Hide Resources" : "Explore Resources"} <span>{showResources ? "🙈" : "🚀"}</span>
          </button>
        </div>
        {showResources && (
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource, index) => (
                <div
                  key={index}
                  className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-105 group bg-gradient-to-br from-cyan-200/70 via-blue-200/70 to-white/90 animate-fadein"
                  style={{ opacity: 0.98, animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glass effect overlay with higher opacity */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl group-hover:bg-white/60 transition rounded-3xl" />
                  <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="text-4xl mb-3">{index % 3 === 0 ? "📚" : index % 3 === 1 ? "☕" : "🏛️"}</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-900 drop-shadow-lg font-[Cinzel]">
                      {resource.title}
                    </h3>
                    <p className="text-blue-900/90 mb-6 flex-1">{resource.description}</p>
                    <div className="flex items-center justify-end">
                      <span className="inline-block px-4 py-1 rounded-full bg-white/80 text-xs font-semibold text-blue-900 shadow backdrop-blur-md">
                        {resource.category || "Resource"}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-cyan-400/40 group-hover:border-cyan-600/70 transition" />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-blue-900/80 py-12 text-xl flex flex-col items-center gap-2">
                <span className="text-5xl">😕</span>
                <span>No resources found matching your search.</span>
              </div>
            )}
          </div>
        )}
      </main>
      <footer className="relative z-10 bg-gradient-to-r from-gray-800/90 via-gray-900/95 to-black/90 backdrop-blur-md border-t border-white/10 text-white py-8 mt-auto shadow-inner">
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center gap-2">
          <span className="text-2xl">🌐</span>
          <p className="text-white/90 font-medium">&copy; 2025 Student Resources. All rights reserved.</p>
        </div>
      </footer>
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