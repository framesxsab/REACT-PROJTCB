import React from "react";

export default function Home() {
  return (
    <div className="font-serif text-gray-100 min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900" />
      <div className="fixed inset-0 bg-gradient-to-tr from-cyan-600/20 via-transparent to-rose-600/20" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)]" />
      
      {/* Floating Orbs - Improved animation */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl opacity-70 animate-pulse" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl opacity-70 animate-pulse" style={{animationDelay: '1s'}} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-violet-600/20 rounded-full blur-3xl opacity-70 animate-pulse" style={{animationDelay: '0.5s'}} />

      {/* Header Navigation */}
      <header className="relative z-10 bg-gradient-to-r from-slate-900/80 via-indigo-900/80 to-purple-900/80 backdrop-blur-xl text-white py-6 px-4 shadow-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold font-[Cinzel] text-center lg:text-left mb-6 lg:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-purple-900">
            STUDENT RESOURCES
          </h1>
          <nav className="flex flex-col lg:flex-row items-center gap-4 bg-gradient-to-r from-white/5 to-white/10 p-4 lg:p-5 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500">
            <ul className="flex flex-row gap-6 lg:gap-8">
              <li>
                <a href="/" className="text-base lg:text-lg font-semibold text-white hover:text-cyan-300 transition-all duration-300 hover:drop-shadow-lg relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="/explore" className="text-base lg:text-lg font-semibold text-white hover:text-purple-300 transition-all duration-300 hover:drop-shadow-lg relative group">
                  Resources
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="/about" className="text-base lg:text-lg font-semibold text-white hover:text-rose-300 transition-all duration-300 hover:drop-shadow-lg relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
            <div className="flex flex-row gap-3">
              <a href="/contribute" className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl text-white text-sm font-medium transition-all duration-300 shadow-md hover:shadow-orange-500/30 hover:scale-105 border border-orange-400/30">
                Contribute
              </a>
              <a href="/admin-login" className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-xl text-white text-sm font-medium transition-all duration-300 shadow-md hover:shadow-violet-500/30 hover:scale-105 border border-violet-400/30">
                Admin
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 py-12 sm:py-20">
        <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-200 via-blue-200 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              Find the Best Resources for Your Requirements
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed max-w-4xl mx-auto">
              From study materials to everyday essentials, explore curated recommendations 
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"> crafted by students, for students</span>.
            </p>
            <a 
              href="/explore"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-3.5 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:scale-105 border border-emerald-400/30 backdrop-blur-sm"
            >
              🚀 Explore Now
            </a>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 font-[Cinzel] text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-purple-900">
              Featured Resources
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
            {/* Bookstore Card with Image */}
            <div className="group bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-6 lg:p-8 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-500/30">
              <div className="overflow-hidden mb-6 rounded-2xl ring-2 ring-white/30 shadow-xl relative">
                <img src="/argosy-bookstore.jpg" alt="Best Bookstore" className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
                📚 Best Bookstores
              </h3>
              <p className="text-gray-100 text-base lg:text-lg leading-relaxed">
                Discover charming bookstores with rare books, prints, and academic materials perfect for research and inspiration.
                <span className="block mt-2 text-cyan-300 font-semibold">Curated for serious readers</span>
              </p>
            </div>
            {/* Cafe Card with Image */}
            <div className="group bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-6 lg:p-8 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-purple-500/30">
              <div className="overflow-hidden mb-6 rounded-2xl ring-2 ring-white/30 shadow-xl relative">
                <img src="/cafe.png" alt="Study Cafe" className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 bg-clip-text text-transparent">
                ☕ Study Cafes
              </h3>
              <p className="text-gray-100 text-base lg:text-lg leading-relaxed">
                Cozy cafes with great ambiance and coffee, perfect for studying or group discussions.
                <span className="block mt-2 text-purple-300 font-semibold">Productive vibes guaranteed</span>
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-gray-200 text-base lg:text-lg">Resources Listed</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-300 bg-clip-text text-transparent mb-2">1000+</div>
                <div className="text-gray-200 text-base lg:text-lg">Happy Students</div>
              </div>
              <div className="text-center bg-gradient-to-br from-rose-500/20 to-orange-600/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-200 to-orange-300 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-gray-200 text-base lg:text-lg">Cities Covered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              What Students Say
            </h2>
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-8 lg:p-10 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500">
              <div className="text-5xl lg:text-6xl mb-6">💬</div>
              <blockquote className="text-white">
                <p className="italic text-lg lg:text-xl mb-6 leading-relaxed">
                  "This platform helped me find the best study spots in my city! The curated recommendations are spot-on and saved me so much time."
                </p>
                <footer className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold text-base lg:text-lg">
                  Amber, Anurag, Vivian & Hajari – University Students
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900/90 via-gray-900/90 to-slate-900/90 backdrop-blur-xl text-white py-12 relative z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="mb-6">
            <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent mb-2">
              Student Resources
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="mb-4 text-gray-300 text-sm lg:text-base">&copy; 2025 Student Resources. All rights reserved.</p>
          <p className="text-gray-300 text-sm lg:text-base">
            Contact us at{" "}
            <a 
              href="mailto:info@studentresources.com" 
              className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold"
            >
              info@studentresources.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}