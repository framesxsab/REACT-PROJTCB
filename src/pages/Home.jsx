import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-serif text-gray-100 min-h-screen bg-cover bg-fixed bg-no-repeat relative"
         style={{ backgroundImage: "url('/background1-optimized.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-purple-900/80 z-0" />

      {/* Header Navigation */}
      <header className="relative z-10 bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white py-8 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-4xl sm:text-5xl font-bold font-[Cinzel] text-center lg:text-left mb-6 lg:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
            STUDENT RESOURCES
          </h1>
          <nav className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 bg-white/10 p-4 lg:p-6 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl">
            <ul className="flex flex-row space-x-8 mb-4 lg:mb-0 lg:mr-8">
              <li><Link to="/" className="text-lg font-semibold hover:text-blue-300">Home</Link></li>
              <li><Link to="/explore" className="text-lg font-semibold hover:text-blue-300">Resources</Link></li>
              <li><Link to="/about" className="text-lg font-semibold hover:text-blue-300">About</Link></li>
            </ul>
            <div className="flex flex-row space-x-4">
              <Link to="/contribute" className="px-6 py-2 border-2 border-blue-400 rounded-lg text-white hover:bg-blue-500 transition-all">Contribute</Link>
              <Link to="/admin-login" className="px-6 py-2 border-2 border-purple-400 rounded-lg text-white hover:bg-purple-500 transition-all">Admin</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 py-12 sm:py-20">
        <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Find the Best Resources for Your Requirements</h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            From study materials to everyday essentials, explore curated recommendations.
          </p>
          <Link to="/explore">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Explore Now
            </button>
          </Link>
        </section>

        {/* Featured Resources */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 font-[Cinzel] text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
            Featured Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
            <div className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 transform hover:scale-105 transition-all">
              <div className="overflow-hidden mb-6 rounded-xl ring-1 ring-white/30">
                <img
                  src="/images/argosy-bookstore.jpg"
                  alt="Bookstore"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[Cinzel] text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Best Bookstores
              </h3>
              <p className="text-gray-100 text-lg">
                Discover charming bookstores with rare books, prints, and academic materials perfect for research and inspiration.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 transform hover:scale-105 transition-all">
              <div className="overflow-hidden mb-6 rounded-xl ring-1 ring-white/30">
                <img src="/images/cafe.png" alt="Cafe" className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[Cinzel] text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Cafes
              </h3>
              <p className="text-gray-100 text-lg">
                Cozy cafes with great ambiance and coffee, perfect for studying or group discussions.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">What Students Say</h2>
            <blockquote className="bg-white/20 p-8 rounded-lg backdrop-blur-md text-white shadow-md">
              <p className="italic text-lg mb-4">
                "This platform helped me find the best study spots in my city!"
              </p>
              <footer className="text-blue-200 font-semibold">Amber, Anurag, Vivian & Hajari – University Students</footer>
            </blockquote>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 relative z-10 text-center">
        <p className="mb-2">&copy; 2025 Student Resources. All rights reserved.</p>
        <p>Contact us at <a href="mailto:info@studentresources.com" className="text-blue-300 hover:text-blue-200">info@studentresources.com</a></p>
      </footer>
    </div>
  );
}
