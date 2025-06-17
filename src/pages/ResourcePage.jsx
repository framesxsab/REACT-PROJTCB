import React, { useEffect, useState } from "react";

export default function ResourcePage() {
  const [resources, setResources] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("titleAsc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("approvedResources")) || [];
      setResources(data);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let result = [...resources];
    // Filter by category
    if (category !== "all") {
      result = result.filter(
        (r) => r.category.toLowerCase() === category
      );
    }
    // Filter by search
    if (search.trim() !== "") {
      const query = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query)
      );
    }
    // Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case "titleAsc":
          return a.title.localeCompare(b.title);
        case "titleDesc":
          return b.title.localeCompare(a.title);
        case "ratingDesc":
          return (b.rating || 0) - (a.rating || 0);
        case "ratingAsc":
          return (a.rating || 0) - (b.rating || 0);
        default:
          return 0;
      }
    });
    setFiltered(result);
  }, [resources, search, category, sortBy]);

  return (
    <div className="min-h-screen font-sans relative overflow-hidden">
      {/*  Background */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] animate-pulse"
        style={{
          background:
            'linear-gradient(45deg, rgb(255, 0, 0), rgb(255, 0, 255), rgb(0, 0, 255))',
          backgroundSize: '400% 400%',
          animation: 'backgroundFade 15s ease-in-out infinite',
        }}
      />
      {/* Dark Overlay (accha laga ) */}
      <div className="fixed inset-0 bg-purple-900/70 backdrop-blur-sm z-0" />
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="py-8 bg-white/10 backdrop-blur-md border-b border-white/10">
          <h1
            className="text-5xl font-bold text-center text-blue-500 mb-6 uppercase tracking-widest font-serif"
            style={{
              fontFamily: 'Cinzel, serif',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
              letterSpacing: '0.15em',
            }}
          >
            Available Resources
          </h1>
          <nav className="text-center">
            <a
              href="/"
              className="mx-4 text-white hover:text-blue-300 transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-md"
            >
              Home
            </a>
            <a
              href="/resources"
              className="mx-4 text-white hover:text-blue-300 transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-md"
            >
              Resources
            </a>
            <a
              href="/contribute"
              className="mx-4 text-white hover:text-blue-300 transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-md"
            >
              Contribute
            </a>
            <a
              href="/about"
              className="mx-4 text-white hover:text-blue-300 transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-md"
            >
              About
            </a>
          </nav>
        </header>
        <main className="container mx-auto px-4">
          {/* Filter Container */}
          <div className="max-w-4xl mx-auto my-8 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="flex flex-wrap justify-center gap-4">
              <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 rounded-md bg-white/90 text-black border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-2 rounded-md bg-white/90 text-black border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-48"
              >
                <option value="all">All Categories</option>
                <option value="bookstore">Bookstore</option>
                <option value="cafe">Cafe</option>
                <option value="study_material">Study Material</option>
                <option value="other">Other</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-md bg-white/90 text-black border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-48"
              >
                <option value="titleAsc">Title (A-Z)</option>
                <option value="titleDesc">Title (Z-A)</option>
                <option value="ratingDesc">Rating (High to Low)</option>
                <option value="ratingAsc">Rating (Low to High)</option>
              </select>
            </div>
          </div>
          {/* Loading Indicator */}
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full" />
            </div>
          )}
          {/* Resource List */}
          {!loading && (
            <div className="flex flex-wrap justify-center gap-6 p-8">
              {filtered.length === 0 ? (
                <p className="text-center text-gray-300 text-lg">
                  No resources found.
                </p>
              ) : (
                filtered.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl p-6 w-full md:w-80 shadow-lg transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl"
                  >
                    <h3 className="text-white text-xl font-bold mb-4 border-b-2 border-white/20 pb-2 font-[Poppins]">
                      {resource.title}
                    </h3>
                    <span className="inline-block bg-blue-500/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {resource.category}
                    </span>
                    <p className="text-white/90 leading-relaxed text-base mb-4">
                      {resource.description}
                    </p>
                    {resource.rating && (
                      <div className="text-yellow-400 text-lg my-3">
                        {"⭐".repeat(resource.rating)}
                      </div>
                    )}
                    <span className="block text-white/70 italic text-sm mt-4">
                      {resource.location || "No location provided"}
                    </span>
                  </div>
                ))
              )}
            </div>
          )}
        </main>
      </div>
      <style jsx>{`
        @keyframes backgroundFade {
          0% { background: linear-gradient(45deg, rgb(255, 0, 0), rgb(255, 0, 255), rgb(0, 0, 255)); }
          50% { background: linear-gradient(45deg, rgb(0, 255, 0), rgb(0, 255, 255), rgb(255, 255, 0)); }
          100% { background: linear-gradient(45deg, rgb(255, 0, 0), rgb(255, 0, 255), rgb(0, 0, 255)); }
        }
      `}</style>
    </div>
  );
}