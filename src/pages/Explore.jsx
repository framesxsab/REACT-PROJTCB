import React, { useState } from "react";

export default function ExploreResources() {
    const [showResources, setShowResources] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const resources = [
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

    const filteredResources = resources.filter(resource =>
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
        <div className="font-serif bg-gray-50 min-h-screen flex flex-col">
            <header className="bg-blue-800 text-white py-4 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                        Explore Resources
                    </h1>
                    <nav className="flex flex-col md:flex-row justify-center items-center">
                        <ul className="flex space-x-6 mb-4 md:mb-0">
                            <li>
                                <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="/explore" className="hover:text-blue-200 transition-colors">Resources</a>
                            </li>
                            <li>
                                <a href="/contribute" className="hover:text-blue-200 transition-colors">Contribute</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-blue-200 transition-colors">About</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8 flex-grow">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Explore Our Curated Resources
                </h2>
                <div className="max-w-xl mx-auto space-y-4">
                    <input 
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search resources..."
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                    <button 
                        onClick={handleExploreClick}
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        {showResources ? "Hide Resources" : "Explore Resources"}
                    </button>
                </div>
                {showResources && (
                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredResources.length > 0 ? (
                            filteredResources.map((resource, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <h3 className="text-xl font-bold text-blue-800 mb-2">
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {resource.description}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500 py-8">
                                No resources found matching your search.
                            </div>
                        )}
                    </div>
                )}
            </main>
            
            <footer className="bg-gradient-to-r from-gray-800/80 via-gray-900/90 to-black/80 backdrop-blur-md border-t border-white/10 text-white py-8 mt-auto">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-white/90 font-medium">&copy; 2025 Student Resources. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
