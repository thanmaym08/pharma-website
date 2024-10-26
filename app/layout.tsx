"use client"; // Mark this component as a client component

import React, { useEffect, useState } from 'react';
import './globals.css'; // Import global styles

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to track if the component has mounted (to avoid hydration issues)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set the mounted state to true once the component is mounted
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Pharma</title>
      </head>
      <body className="bg-gray-100">
        <header className="bg-gray-400 shadow w-full">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
              <img src="./Logo" alt="Logo" className="h-10" />
              <h1 className="ml-4 text-xl font-bold text-black">Pharma</h1>
            </div>
            <div className="flex-grow flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-500 text-black rounded-md p-2 w-1/2"
              />
            </div>
            <div className="flex items-center space-x-2">
              <nav className="flex space-x-2">
                <a href="/contact" className="text-black font-semibold">Contact</a>
                <button className="focus:outline-none" aria-label="Menu">
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          {isMounted ? children : null} {/* Only render children after the component has mounted */}
        </main>
        <footer className="bg-white shadow">
          <div className="container mx-auto p-4 text-center">
            © 2024 My Website
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
