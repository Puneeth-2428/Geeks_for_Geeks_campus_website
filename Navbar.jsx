import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="GFG RIT Chennai Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#003366] leading-none">
                  GFG RIT
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gfg-green px-3 py-2 rounded-md font-medium">Home</Link>
              <Link to="/events" className="text-gray-700 hover:text-gfg-green px-3 py-2 rounded-md font-medium">Events</Link>
              <Link to="/contests" className="text-gray-700 hover:text-gfg-green px-3 py-2 rounded-md font-medium">Contests</Link>
              <Link to="/resources" className="text-gray-700 hover:text-gfg-green px-3 py-2 rounded-md font-medium">Resources</Link>              <Link to="/team" className="text-gray-700 hover:text-gfg-green px-3 py-2 rounded-md font-medium">Team</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gfg-green px-3 py-2 rounded-md font-medium">Contact</Link>            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
