import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass } from 'lucide-react';
import LoginButton from './LoginButton'; 

const Navbar = () => {
  const location = useLocation(); 
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              NMIT Club Compass
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="/clubs" className={`text-sm font-medium transition-colors ${isActive('/clubs') ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>
              Clubs
            </Link>
            <Link to="/events" className={`text-sm font-medium transition-colors ${isActive('/events') ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>
              Events
            </Link>
            <Link to="/ai-compass" className={`text-sm font-medium transition-colors ${isActive('/ai-compass') ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>
              AI Compass
            </Link>
            <LoginButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;