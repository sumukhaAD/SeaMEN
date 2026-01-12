import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // 👈 1. Import it here

// Page Imports
import Hero from './components/Hero'; 
import ClubDirectory from './components/ClubDirectory'; 
import EventTimeline from './components/EventTimeline'; 
import AICompass from './pages/AICompass';
import ClubDetails from './pages/ClubDetails';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 👈 2. Place it here, inside BrowserRouter but before the div */}
      
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/clubs" element={<ClubDirectory />} />
            <Route path="/events" element={<EventTimeline />} />
            <Route path="/ai-compass" element={<AICompass />} />
            <Route path="/clubs/:id" element={<ClubDetails />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;