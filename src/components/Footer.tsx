import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Github, Twitter, Linkedin, Heart, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Compass className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                NMIT Club Compass
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              The central hub for all student activities, clubs, and technical societies at Nitte Meenakshi Institute of Technology. Join a community, learn a skill, and build the future.
            </p>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-500" /> Bangalore, India</div>
              <div className="flex items-center"><Mail className="w-4 h-4 mr-2 text-blue-500" /> clubs@nmit.ac.in</div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/clubs" className="hover:text-blue-400 transition flex items-center">Browse Clubs</Link></li>
              <li><Link to="/events" className="hover:text-blue-400 transition flex items-center">Upcoming Events</Link></li>
              <li><Link to="/ai-compass" className="hover:text-blue-400 transition flex items-center">AI Assistant</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition flex items-center">Student Council</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2026 NMIT Club Compass. Built for TechSprint Hackathon.</p>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1 fill-current animate-pulse" />
            <span>by Team Sea++</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;