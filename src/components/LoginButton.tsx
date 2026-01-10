import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// 1. Initialize Supabase (Use your REAL keys from the Project Settings page!)
// If you already have a supabaseClient.ts file, import from there instead.
const supabaseUrl = 'https://qbfptktqioxlrerjitxt.supabase.co'; 
const supabaseKey = 'sb_publishable_grXAGcCUiMDrnbLgFpJVUg_lyTPmgDz';
const supabase = createClient(supabaseUrl, supabaseKey);

const LoginButton = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is already logged in when page loads
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        // This ensures they come back to your site after login
        redirectTo: window.location.origin, 
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (user) {
    return (
      <div className="flex items-center gap-3">
        {/* Show user's Google Profile Pic */}
        <img 
          src={user.user_metadata.avatar_url} 
          alt="Profile" 
          className="w-8 h-8 rounded-full border border-gray-600"
        />
        <span className="text-white text-sm hidden md:block">
          {user.user_metadata.full_name}
        </span>
        <button 
          onClick={handleLogout}
          className="bg-red-500/20 text-red-400 hover:bg-red-500/30 px-3 py-1 rounded-md text-xs font-medium transition"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition shadow-[0_0_15px_rgba(255,255,255,0.2)]"
    >
      <img 
        src="https://www.svgrepo.com/show/475656/google-color.svg" 
        className="w-5 h-5" 
        alt="G"
      />
      Sign in with Google
    </button>
  );
};

export default LoginButton;