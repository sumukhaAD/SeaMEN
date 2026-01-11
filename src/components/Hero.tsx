import React from 'react';
import { ArrowRight, Users, Zap, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom'; // 👈 Imported Link

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-16">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-ping"></span>
          <span className="text-gray-300 text-sm">Registrations open for 2026</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Community</span>
          <br /> at NMIT
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Discover clubs, join events, and connect with like-minded peers. 
          Your journey starts here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {/* 👇 THIS IS THE FIX: Using Link instead of button */}
          <Link 
            to="/clubs"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center transition-all hover:scale-105"
          >
            Find My Club <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          
          <Link 
            to="/events"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold border border-gray-700 transition-all hover:scale-105"
          >
            Browse Events
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-gray-800 pt-12">
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="text-3xl font-bold text-white">50+</h3>
            <p className="text-gray-500">Active Clubs</p>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-8 h-8 text-purple-400 mb-2" />
            <h3 className="text-3xl font-bold text-white">200+</h3>
            <p className="text-gray-500">Events Yearly</p>
          </div>
          <div className="flex flex-col items-center">
            <Calendar className="w-8 h-8 text-green-400 mb-2" />
            <h3 className="text-3xl font-bold text-white">5k+</h3>
            <p className="text-gray-500">Students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;