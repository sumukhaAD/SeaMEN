import React, { useState } from 'react'; // 👈 Added useState
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Trophy, Mail } from 'lucide-react';

const clubsData = [
  { 
    id: "skw001", 
    name: "SKYWARD Aeronautics Society", 
    desc: "Drones, UAVs, and RC aircraft.", 
    formed: 2018, 
    members: 156, 
    head: { name: "Aarav Sharma", role: "President", email: "aarav.skyward@college.edu" },
    achievements: ["Built autonomous quadcopter", "National drone workshop", "2nd place AeroDesign India"],
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=2000"
  },
  { 
    id: "byt002", 
    name: "BYTECRAFT Collective", 
    desc: "Coding, AI, hackathons, and app dev.", 
    formed: 2019, 
    members: 203, 
    head: { name: "Priya Patel", role: "Lead Coordinator", email: "priya.bytecraft@college.edu" },
    achievements: ["Organized 36h Hackathon", "Mentored SIH Teams", "Built Campus Coding Platform"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
  },
  { 
    id: "nxs003", 
    name: "NEXUS Robotics Society", 
    desc: "Automation, sensors, and robotics.", 
    formed: 2020, 
    members: 128, 
    head: { name: "Rohan Gupta", role: "Technical Head", email: "rohan.nexus@college.edu" },
    achievements: ["Designed maze-solving robots", "Hosted robotics bootcamp", "Robocon qualifiers"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "rnr004",
    name: "RHYTHM & ROOTS",
    desc: "Dance, music, and stage arts.",
    formed: 2015,
    members: 89,
    head: { name: "Sneha Reddy", role: "Cultural Sec", email: "sneha.rnr@college.edu" },
    achievements: ["Won inter-college fest trophy", "State-level youth festival", "Annual cultural night"],
    // 👇 FIXED IMAGE
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "Ins005",
    name: "LENS & LORE Society",
    desc: "Photography and filmmaking.",
    formed: 2021,
    members: 74,
    head: { name: "Vikram Singh", role: "Creative Lead", email: "vikram.lens@college.edu" },
    achievements: ["Covered national college events", "Produced short films for social campaigns", "Mobile photography workshops"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "inv006",
    name: "INVICTUS Sports Union",
    desc: "Competitive sports and tournaments.",
    formed: 2016,
    members: 112,
    head: { name: "Arjun Nair", role: "Sports Secretary", email: "arjun.invictus@college.edu" },
    achievements: ["Football and Basketball champions", "Hosted annual sports meet", "State-level athlete representation"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2000"
  }
];

const ClubDetails = () => {
  const { id } = useParams();
  const club = clubsData.find(c => c.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false); // 👈 Added State

  if (!club) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Club Not Found 😕</h1>
        <p className="text-gray-400 mb-6">We couldn't find a club with ID: {id}</p>
        <Link to="/clubs" className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Go back to clubs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/clubs" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Clubs
        </Link>

        {/* Hero Section */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 group shadow-2xl shadow-blue-900/20">
          <img src={club.image} alt={club.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{club.name}</h1>
            <p className="text-lg md:text-xl text-gray-300">{club.desc}</p>
          </div>
        </div>

        {/* 👇 NEW: Apply Button Section */}
        <div className="flex justify-end mb-8">
           <button 
             onClick={() => setIsModalOpen(true)}
             className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center transform hover:scale-105"
           >
             Apply to Join {club.name} 🚀
           </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition">
            <Calendar className="w-8 h-8 text-blue-400 mb-3" />
            <div className="text-gray-400 text-sm">Founded</div>
            <div className="text-2xl font-bold text-white">{club.formed}</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition">
            <Users className="w-8 h-8 text-purple-400 mb-3" />
            <div className="text-gray-400 text-sm">Active Members</div>
            <div className="text-2xl font-bold text-white">{club.members}</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:border-green-500/50 transition">
             <Mail className="w-8 h-8 text-green-400 mb-3" />
             <div className="text-gray-400 text-sm">Head Contact</div>
             <div className="text-lg font-bold text-white">{club.head.name}</div>
             <div className="text-xs text-gray-500">{club.head.email}</div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-6 h-6 text-yellow-500 mr-3" /> Key Achievements
          </h2>
          <ul className="space-y-4">
            {club.achievements.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></span>
                <span className="text-gray-300 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 👇 NEW: Application Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
            <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-200">
              <h3 className="text-2xl font-bold text-white mb-2">Join {club.name}</h3>
              <p className="text-gray-400 mb-6 text-sm">Enter your student details to request membership.</p>
              
              <form onSubmit={(e) => { e.preventDefault(); alert("Application Sent Successfully! 🚀"); setIsModalOpen(false); }}>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1 uppercase tracking-wider">Student Name</label>
                    <input type="text" required className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-blue-500 outline-none transition" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1 uppercase tracking-wider">USN / Roll No</label>
                    <input type="text" required className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-blue-500 outline-none transition" placeholder="e.g. 1NT26EC000" />
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition font-medium">Cancel</button>
                  <button type="submit" className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-bold shadow-lg shadow-blue-900/20">Submit Application</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubDetails;