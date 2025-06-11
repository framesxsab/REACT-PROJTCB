import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="font-serif text-gray-100 min-h-screen bg-cover bg-fixed bg-no-repeat relative"
         style={{ backgroundImage: "url('/images/background1.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/80 z-0" />

      <header className="glass-nav text-white py-6 shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold font-[Cinzel] text-center mb-6 text-blue-200">ABOUT US</h1>
          <nav className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <ul className="flex space-x-8 mb-4 md:mb-0">
              <li><Link to="/" className="nav-link hover:text-blue-300">Home</Link></li>
              <li><Link to="/explore" className="nav-link hover:text-blue-300">Resources</Link></li>
              <li><Link to="/about" className="nav-link hover:text-blue-300">About</Link></li>
            </ul>
            <Link to="/contribute"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Contribute a Resource
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="glass-container rounded-lg p-8 mb-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-blue-300">Our Mission</h2>
          <p className="text-gray-200 text-lg">
            We're dedicated to helping students find the best resources for their academic journey. Our platform connects students with study materials, locations, and services that enhance their learning.
          </p>
        </section>

        {/* Team Section */}
        <section className="glass-container rounded-lg p-8 mb-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-300 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="team-member text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <img src="/images/dekisuki.jpg" alt="Ramesssss" className="rounded-full mx-auto mb-4 w-44 h-44 object-cover border-4 border-blue-500 shadow-lg" />
              <h3 className="text-xl font-bold">Ramesssss</h3>
              <p className="text-gray-300 mt-2">Founder & Developer</p>
              <p className="text-sm text-gray-400 mt-4">Leads technical development and platform architecture.</p>
            </div>
            <div className="team-member text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <img src="/images/nobita.png" alt="Suresssss" className="rounded-full mx-auto mb-4 w-44 h-44 object-cover border-4 border-blue-500 shadow-lg" />
              <h3 className="text-xl font-bold">Suresssss</h3>
              <p className="text-gray-300 mt-2">Content Manager</p>
              <p className="text-sm text-gray-400 mt-4">Curates high-quality educational resources.</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="glass-container rounded-lg p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">Contact Us</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for your message! (EmailJS not integrated yet.)");
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-gray-200 mb-2">Name</label>
              <input type="text" id="name" required className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
              <input type="email" id="email" required className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-200 mb-2">Message</label>
              <textarea id="message" rows="4" required className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"></textarea>
            </div>
            <button type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="text-white py-8 text-center relative z-10">
        <p className="mb-2">&copy; 2025 Student Resources. All rights reserved.</p>
        <p>Contact us at <a href="mailto:info@studentresources.com" className="text-blue-300 hover:text-blue-200">info@studentresources.com</a></p>
      </footer>
    </div>
  );
}
