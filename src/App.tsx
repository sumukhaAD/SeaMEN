import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Page Imports
import Hero from './components/Hero'; 
import ClubDirectory from './components/ClubDirectory'; 
import EventTimeline from './components/EventTimeline'; 
import AICompass from './pages/AICompass';
import ClubDetails from './pages/ClubDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/clubs" element={<ClubDirectory />} />
          <Route path="/events" element={<EventTimeline />} />
          <Route path="/ai-compass" element={<AICompass />} />
          
          {/* 👇 This is the new part for Club Details */}
          <Route path="/clubs/:id" element={<ClubDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;