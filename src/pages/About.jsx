import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div
      className="font-serif text-gray-100 min-h-screen bg-cover bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/background1.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/80 z-0" />
      <header className="glass-nav text-white py-6 shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold font-[Cinzel] text-center mb-6 text-blue-200">
            ABOUT US
          </h1>
          <nav className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <ul className="flex space-x-8 mb-4 md:mb-0 text-lg font-semibold">
              <li>
                <Link
                  to="/"
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-white px-5 py-2 rounded-xl hover:from-cyan-400 hover:to-blue-800 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-1 shadow-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-white px-5 py-2 rounded-xl hover:from-cyan-400 hover:to-blue-800 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-1 shadow-md"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-white px-5 py-2 rounded-xl hover:from-cyan-400 hover:to-blue-800 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-1 shadow-md"
                >
                  About
                </Link>
              </li>
            </ul>
            <Link
              to="/contribute"
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-white px-7 py-3 rounded-xl hover:from-cyan-400 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg font-semibold text-lg flex items-center gap-2 shadow-md"
            >
              <span>Contribute a Resource</span> <span>➕</span>
            </Link>
          </nav>
        </div>
      </header>
      <main className="relative z-10 py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="glass-container rounded-lg p-8 mb-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-blue-300">Our Mission</h2>
          <p className="text-gray-200 text-lg">
            We're dedicated to helping students find the best resources for their
            academic journey. Our platform connects students with study materials,
            locations, and services that enhance their learning.
          </p>
        </section>
        {/* Team Section */}
        <section className="glass-container rounded-lg p-8 mb-8 bg-gradient-to-br from-cyan-900/60 via-blue-800/40 to-blue-600/30 backdrop-blur-md border border-cyan-400/30 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-cyan-300 text-center font-[Cinzel] drop-shadow-lg">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="team-member text-center bg-cyan-900/30 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-8 shadow-xl hover:shadow-cyan-400/40 transition-all duration-300 group">
              <div className="flex justify-center mb-4">
                <img
                  src="/dekisuki.jpg"
                  alt="Ramesssss"
                  className="rounded-full w-44 h-44 object-cover border-4 border-cyan-300 shadow-lg group-hover:scale-105 group-hover:border-cyan-400 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-cyan-100 font-[Cinzel]">
                Ramesssss
              </h3>
              <p className="text-cyan-200 mt-2 font-semibold">
                Founder & Developer
              </p>
              <p className="text-base text-cyan-100/80 mt-4">
                Leads technical development and platform architecture.
              </p>
            </div>
            <div className="team-member text-center bg-cyan-900/30 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-8 shadow-xl hover:shadow-cyan-400/40 transition-all duration-300 group">
              <div className="flex justify-center mb-4">
                <img
                  src="/nobita.png"
                  alt="Suresssss"
                  className="rounded-full w-44 h-44 object-cover border-4 border-cyan-300 shadow-lg group-hover:scale-105 group-hover:border-cyan-400 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-cyan-100 font-[Cinzel]">
                Suresssss
              </h3>
              <p className="text-cyan-200 mt-2 font-semibold">Content Manager</p>
              <p className="text-base text-cyan-100/80 mt-4">
                Curates high-quality educational resources.
              </p>
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
              <label htmlFor="name" className="block text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-white py-3 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg font-semibold text-lg flex items-center justify-center gap-2"
            >
              <span>Send Message</span> <span>📧</span>
            </button>
          </form>
        </section>
      </main>
      <footer className="text-white py-8 text-center relative z-10">
        <p className="mb-2">&copy; 2025 Student Resources. All rights reserved.</p>
        <p>
          Contact us at{" "}
          <a
            href="mailto:info@studentresources.com"
            className="text-blue-300 hover:text-blue-200"
          >
            info@studentresources.com
          </a>
        </p>
      </footer>
    </div>
  );
}

// import React from "react";// import { Link } from "react-router-dom";// export default function About() {//   return (//     <div//       className="font-serif text-white min-h-screen bg-cover bg-fixed bg-no-repeat relative"//       style={{ backgroundImage: "url('/images/background1.jpg')" }}//     >//       <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/90 z-0" />//       {/* Header */}//       <header className="relative z-10 py-8">//         <div className="max-w-6xl mx-auto text-center">//           <h1 className="text-5xl font-bold font-[Cinzel] text-blue-200 drop-shadow-lg">About Us</h1>//         </div>//       </header>//       {/* Nav */}//       <nav className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center mb-8">//         <ul className="flex gap-6 mb-4 sm:mb-0 text-lg">//           <li><Link to="/" className="hover:text-blue-300 transition">Home</Link></li>//           <li><Link to="/explore" className="hover:text-blue-300 transition">Resources</Link></li>//           <li><Link to="/about" className="hover:text-blue-300 transition">About</Link></li>//         </ul>//         <Link//           to="/contribute"//           className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-105 shadow-md"//         >//           Contribute//         </Link>//       </nav>//       {/* Main */}//       <main className="relative z-10 max-w-4xl mx-auto px-4 pb-16">//         {/* Mission */}//         <section className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl mb-12">//           <h2 className="text-3xl font-bold text-blue-300 mb-4">Our Mission</h2>//           <p className="text-lg text-gray-200">//             We aim to empower students by providing curated resources to support their academic goals. From study guides to cozy study spots, we help you discover tools that make learning easier and more enjoyable.//           </p>//         </section>//         {/* Team */}//         <section className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl mb-12">//           <h2 className="text-3xl font-bold text-blue-300 text-center mb-8">Meet the Team</h2>//           <div className="grid md:grid-cols-2 gap-10">//             {/* Member 1 */}//             <div className="text-center p-6 rounded-xl bg-gray-900/50 border border-blue-500/20 hover:border-blue-500 transition">//               <img//                 src="/images/dekisuki.jpg"//                 alt="Ramesssss"//                 className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-lg mb-4"//               />//               <h3 className="text-xl font-semibold">Ramesssss</h3>//               <p className="text-gray-300">Founder & Developer</p>//               <p className="text-sm text-gray-400 mt-2">//                 Leads all things code and design.//               </p>//             </div>//             {/* Member 2 */}//             <div className="text-center p-6 rounded-xl bg-gray-900/50 border border-blue-500/20 hover:border-blue-500 transition">//               <img//                 src="/images/nobita.png"//                 alt="Suresssss"//                 className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-lg mb-4"//               />//               <h3 className="text-xl font-semibold">Suresssss</h3>//               <p className="text-gray-300">Content Manager</p>//               <p className="text-sm text-gray-400 mt-2">//                 Curates high-quality learning resources.//               </p>//             </div>//           </div>//         </section>//         {/* Contact */}//         <section className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">//           <h2 className="text-3xl font-bold text-blue-300 mb-6">Contact Us</h2>//           <form//             onSubmit={(e) => {//               e.preventDefault();//               alert("Thanks for your message! (EmailJS not yet integrated.)");//             }}//             className="space-y-6"//           >//             <div>//               <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Name</label>//               <input//                 id="name"//                 type="text"//                 required//                 className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"//               />//             </div>//             <div>//               <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email</label>//               <input//                 id="email"//                 type="email"//                 required//                 className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"//               />//             </div>//             <div>//               <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Message</label>//               <textarea//                 id="message"//                 rows="4"//                 required//                 className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"//               />//             </div>//             <button//               type="submit"//               className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"//             >//               Send Message//             </button>//           </form>//         </section>//       </main>//       {/* Footer */}//       <footer className="relative z-10 text-center text-gray-400 py-8 border-t border-white/20">//         <p>&copy; 2025 Student Resources. All rights reserved.</p>//         <p>//           Email:{" "}//           <a href="mailto:info@studentresources.com" className="text-blue-300 hover:underline">//             info@studentresources.com//           </a>//         </p>//       </footer>//     </div>//   );// }