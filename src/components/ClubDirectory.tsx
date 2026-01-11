import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ClubCard from './ClubCard';

const clubs = [
  {
    id: "skw001",
    name: "SKYWARD Aeronautics",
    desc: "Drones, UAVs, and RC aircraft design and testing.",
    members: 156,
    category: "Technical",
    head: { name: "Aarav Sharma" },
    image: "/aero.png"
  },
  {
    id: "byt002",
    name: "BYTECRAFT Collective",
    desc: "Coding, AI, hackathons, and app development.",
    members: 203,
    category: "Technical",
    head: { name: "Priya Patel" },
    image: "/coding.png"
  },
  {
    id: "nxs003",
    name: "NEXUS Robotics",
    desc: "Automation, sensors, and bot building.",
    members: 128,
    category: "Technical",
    head: { name: "Rohan Gupta" },
    image: "/robotics.png"
  },
  {
    id: "rnr004",
    name: "RHYTHM & ROOTS",
    desc: "Dance, music, and stage arts performance.",
    members: 89,
    category: "Cultural",
    head: { name: "Sneha Reddy" },
    image: "/dance.png"
  },
  {
    id: "Ins005",
    name: "LENS & LORE",
    desc: "Photography, filmmaking, and visual storytelling.",
    members: 74,
    category: "Creative",
    head: { name: "Vikram Singh" },
    image: "/lit.png" 
  },
  {
    id: "inv006",
    name: "INVICTUS Sports",
    desc: "Competitive sports, fitness, and tournaments.",
    members: 112,
    category: "Sports",
    head: { name: "Arjun Nair" },
    image: "/sports.png"
  }
];

const ClubDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         club.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    // 👇 FIX HERE: Changed 'py-12' to 'pt-24 pb-12' to push content below Navbar
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12" id="clubs">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Explore Clubs</h2>
          <p className="text-gray-400">Find your community at NMIT</p>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search clubs..."
              className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select 
              className="pl-10 pr-8 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 appearance-none w-full"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Technical">Technical</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
              <option value="Creative">Creative</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </div>
  );
};

export default ClubDirectory;