
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-between px-6 py-12">
      <div className="absolute inset-0 z-0 bg-slate-900">
        <img 
          alt="Happy dog running" 
          className="w-full h-full object-cover opacity-80"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaBJkAewJS4scNRhWgfLsjmFNUysNO7KURLHNK964sJzLK3b3u8vbcOyruMuXmKt0sw-STOtXpTTq14UA50OL_o0wavzTXbd3kxy5TReJIBS0yA9abJsD0-btocs6YJH3ycwbSHS6OtpwtyuKD3CXU9BvVBUdjpSkeDIUPoWT7S6YHmobSysMTq53ATA_R-Fwvf-0rDGtjqkWqKXUAU1GtwY7bXqTrCfFzwFownhj0xSuYccHsBJWxaKE8-xv6BgFc7iABj8Rgh30u"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-slate-900/90"></div>
      </div>

      <div className="relative z-10 flex justify-end">
        <button 
          onClick={() => navigate('/login')}
          className="text-white/80 text-sm font-medium backdrop-blur-md px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        >
          Log In
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
        <div className="relative w-28 h-28 mb-6">
          <div className="absolute inset-0 bg-primary rounded-3xl rotate-6 opacity-60 blur-lg animate-pulse-slow"></div>
          <div className="relative bg-white dark:bg-card-dark rounded-3xl p-5 shadow-2xl flex items-center justify-center w-full h-full">
            <span className="material-icons text-5xl text-primary">pets</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">Aagaz</h1>
        <p className="text-blue-100 text-lg font-light">Pet Care Companion</p>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8 pb-10">
        <div className="text-center">
          <p className="text-3xl font-bold text-white leading-tight mb-2">
            Love, Care, & <br/> <span className="text-secondary">Understanding</span>
          </p>
          <p className="text-blue-100/80 text-sm max-w-xs mx-auto">
            Everything your furry friend needs, all in one place.
          </p>
        </div>

        <button 
          onClick={() => navigate('/login')}
          className="group relative w-full flex items-center justify-center py-4 bg-primary hover:bg-sky-400 text-white text-lg font-bold rounded-2xl shadow-glow transition-all active:scale-95"
        >
          <span>Get Started</span>
          <span className="material-icons ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
