import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AICompass() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1,
      text: "Hello! I am your NMIT Club Counselor. Tell me what you like (e.g., 'I love coding' or 'I want to dance'), and I will find the perfect club for you!", 
      sender: 'ai',
      timestamp: new Date() 
    }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // 👇 FIX: Ref acts on the Scrollable Container now
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // 👇 FIX 1: FORCE SCROLL TO TOP ON PAGE LOAD
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 👇 FIX 2: SCROLL *ONLY* THE CHAT BOX
  useEffect(() => {
    if (chatContainerRef.current) {
      // This scrolls the inner div, NOT the main window
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]); // Runs whenever messages change or typing starts

  const handleSendMessage = async () => {
    if (!currentInput.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: currentInput,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);
    setCurrentInput('');

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) throw new Error("Missing API Key in .env file");

      // 📚 DATABASE
      const clubKnowledgeBase = `
        [
          { "name": "SKYWARD Aeronautics Society", "desc": "Drones, UAVs, and RC aircraft.", "formed": "2018", "members": "156", "head": "Aarav Sharma", "socials": "@skyward_nmit" },
          { "name": "BYTECRAFT Collective", "desc": "Coding, AI, hackathons, and app dev.", "formed": "2019", "members": "203", "head": "Priya Patel", "socials": "@bytecraft" },
          { "name": "NEXUS Robotics Society", "desc": "Automation, sensors, and bots.", "formed": "2020", "members": "128", "head": "Rohan Gupta", "socials": "@nexus_robotics" },
          { "name": "RHYTHM & ROOTS", "desc": "Dance, music, and stage arts.", "formed": "2015", "members": "89", "head": "Sneha Reddy", "socials": "@rhythm_roots" },
          { "name": "LENS & LORE Society", "desc": "Photography and filmmaking.", "formed": "2021", "members": "74", "head": "Vikram Singh", "socials": "@lensandlore" },
          { "name": "INVICTUS Sports Union", "desc": "Competitive sports and tournaments.", "formed": "2016", "members": "112", "head": "Arjun Nair", "socials": "@invictus_sports" }
        ]
      `;

      // 🧠 MEMORY
      const chatContext = messages.slice(-3).map(m => `${m.sender}: ${m.text}`).join('\n');

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ 
              parts: [{ 
                text: `
                  You are a friendly NMIT Club Counselor.
                  Database: ${clubKnowledgeBase}

                  📜 RECENT CHAT:
                  ${chatContext}

                  👇 CURRENT INPUT:
                  "${newMessage.text}"

                  🚨 STRICT FORMATTING RULES:
                  1. **ALWAYS** use double newlines (\n\n) between every section.
                  2. **NEVER** dump a wall of text. Use lists.
                  
                  Scenario A: User mentions an interest
                  - Action: Recommend the *single best club*.
                  Scenario B: User asks for details
                  - Action: Show the full ID Card.
                ` 
              }] 
            }]
          })
        }
      );

      const googleData = await response.json();

      if (googleData.error) {
        throw new Error(googleData.error.message);
      }

      const aiText = googleData.candidates?.[0]?.content?.parts?.[0]?.text 
        || "I'm sorry, I couldn't think of a response.";

      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiText,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (error: any) {
      const errorMessage: Message = {
        id: messages.length + 2,
        text: `⚠️ Connection Error: ${error.message || "Unknown error"}`,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4 pb-20 flex flex-col">
      <div className="max-w-3xl mx-auto w-full flex-grow flex flex-col">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-full mb-4 ring-1 ring-purple-500/30">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">AI Career Compass</h1>
          <p className="text-gray-400">Powered by Google Gemini 2.5</p>
        </div>

        {/* Chat Container */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 flex-grow flex flex-col overflow-hidden h-[600px] shadow-2xl">
          
          {/* 👇 FIX: Attached ref here. This div scrolls, not the window. */}
          <div 
            ref={chatContainerRef} 
            className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth"
          >
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex gap-4 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.sender === 'user' ? 'bg-blue-600' : 'bg-purple-600'}`}>
                  {message.sender === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                </div>
                
                <div 
                  className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-gray-700 text-gray-100 rounded-tl-none border border-gray-600'
                  }`}
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center animate-pulse"><Bot className="w-5 h-5" /></div>
                <div className="p-4 rounded-2xl bg-gray-700 text-gray-400 text-sm italic">Thinking...</div>
              </div>
            )}
            
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-900/50 border-t border-gray-700/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about clubs, events, or advice..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isTyping}
                className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}