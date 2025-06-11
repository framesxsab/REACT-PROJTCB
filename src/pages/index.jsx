import React from 'react';
import "../assets/styles.css";

export default function About() {
    return (
        <div className="font-serif text-gray-100">
            <header className="glass-nav text-white py-6 shadow-lg relative z-10">
                STUDENT RESOURCE CENTER
            </header>
            <main className="relative py-12">
              <section className="glass-container rounded-lg p-8 mb-8">
               <h2 className="text-3xl font-bold mb-4 text-blue-300">Our Mission</h2>
               <p className="text-gray-200 text-lg">
                We're dedicated to helping students find the best resources...
               </p>
                </section>   
                </main>
                    <footer className="bg-transparent text-white py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="mb-2">&copy; 2025 Student Resources. All rights reserved.</p>
        </div>
        </footer>
        </div>
    ) ;
}
