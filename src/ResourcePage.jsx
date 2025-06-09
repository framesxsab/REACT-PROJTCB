import React, { useEffect, useState } from "react";

export default function ResourcePage() {
  const [resources, setResources] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("titleAsc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("approvedResources")) || [];
    setResources(data); 
    setLoading(false);
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
    <div className="min-h-screen text-white font-sans bg-gradient-to-br from-purple-700 to-indigo-900 relative">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-blue-300 mb-6 font-[Cinzel]">
          Available Resources
        </h1>

        <nav className="text-center mb-6">
          <a href="/" className="mx-4 text-white hover:text-blue-300 transition-colors">
            Home
          </a>
          <a href="/resources" className="mx-4 text-white hover:text-blue-300 transition-colors">
            Resources
          </a>
          <a href="/contribute" className="mx-4 text-white hover:text-blue-300 transition-colors">
            Contribute
          </a>
          <a href="/about" className="mx-4 text-white hover:text-blue-300 transition-colors">
            About
          </a>
        </nav>
        {/* filters */}
        <div className="ng-white/10 backfrop-blur-md border border-white/20 rounded-lg p-6 flex flex-wrap gap-4 justify-center mb-12">
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="filter-input pz-4 py-2 rounded-md bg-white/80 text-black w-48 focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="filter-input pz-4 py-2 rounded-md bg-white/80 text-black w-48 focus:ring-2 focus:ring-blue-500"
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
            className="filter-input px-4 py-2 rounded-md bg-white/80 text-black w-48 focus:ring-2 focus:ring-blue-500"
          >
            <option value="titleAsc">Title (A-Z)</option>
            <option value="titleDesc">Title (Z-A)</option>
            <option value="ratingDesc">Rating (High to Low)</option>
            <option value="ratingAsc">Rating (Low to High)</option>
          </select>
        </div>
        {/* Loading Spinner */}
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto" />
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-300 text-xl">No resources found.</p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {filtered.map((resource, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl w-full max-w-sm shadow-lg hover:scale-105 transition transform"
              >
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">
                  {resource.title}
                </h3>
                <div className="text-sm text-blue-300 font-semibold mb-2">
                  {resource.category}
                </div>
                <p className="text-gray-200">{resource.description}</p>
                {resource.rating && (
                  <div className="text-yellow-400 my-2 text-lg">
                    {"⭐".repeat(resource.rating)}
                  </div>
                )}
                <p className="italic text-sm mt-4 text-white/80">
                  {resource.location || "No location provided"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}




















