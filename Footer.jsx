import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gfg-green">GFG RIT</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering students at Rajalakshmi Institute of Technology with technical excellence and coding culture.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://in.linkedin.com/school/rit-chennai/" target="_blank" rel="noopener noreferrer" className="hover:text-gfg-green transition-colors"><Linkedin size={20} /></a>
            <a href="https://in.linkedin.com/school/rit-chennai/" target="_blank" rel="noopener noreferrer" className="hover:text-gfg-green transition-colors"><Github size={20} /></a>
            <a href="https://www.instagram.com/ritchennai/" target="_blank" rel="noopener noreferrer" className="hover:text-gfg-green transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/events" className="hover:text-white transition-colors">Events</a></li>
            <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
            <li><a href="/team" className="hover:text-white transition-colors">Our Team</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Explore</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/" target="_blank" className="hover:text-white transition-colors">Algorithms</a></li>
            <li><a href="https://www.geeksforgeeks.org/data-structures/" target="_blank" className="hover:text-white transition-colors">Data Structures</a></li>
            <li><a href="https://www.geeksforgeeks.org/category/interview-experiences/" target="_blank" className="hover:text-white transition-colors">Interview Prep</a></li>
            <li><a href="https://www.geeksforgeeks.org/puzzles/" target="_blank" className="hover:text-white transition-colors">Puzzles</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gfg-green" />
              <span>gfg@ritchennai.edu.in</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gfg-green" />
              <span>+91 12345 67890</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gfg-green mt-1" />
              <span>Kuthambakkam, Poonamallee,<br />Chennai - 600124</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} GFG RIT Chennai Campus Chapter. All rights reserved.</p>
        <p className="mt-1">Built with ❤️ by the Technical Team</p>
      </div>
    </footer>
  );
};

export default Footer;
