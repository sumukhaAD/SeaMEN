import React from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ClubProps {
  club: {
    id: string;
    name: string;
    desc: string;
    members: number;
    head: {
      name: string;
    };
    image: string; 
  };
}

const ClubCard = ({ club }: ClubProps) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition duration-300 group flex flex-col h-full">
      
      {/* 👇 NEW: Image Section */}
      <div className="h-60 overflow-hidden relative">
        <img 
          src={club.image} 
          alt={club.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
          <Users className="w-3 h-3 text-blue-400" />
          <span className="text-xs text-white font-bold">{club.members}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition mb-1">
            {club.name}
          </h3>
          <p className="text-blue-400/80 text-xs uppercase tracking-wider font-semibold">
            Head: {club.head.name}
          </p>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
          {club.desc}
        </p>

        <Link 
          to={`/clubs/${club.id}`}
          className="w-full mt-auto flex items-center justify-center space-x-2 bg-gray-700/50 hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-300 border border-gray-600 hover:border-blue-500"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ClubCard;