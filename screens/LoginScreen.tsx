
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-background-dark flex flex-col px-8 pt-12 pb-8 transition-colors relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="flex flex-col items-center mt-10 mb-10">
        <div className="relative w-40 h-40 mb-8">
          <img 
            alt="Cute dog" 
            className="w-full h-full object-cover rounded-full border-4 border-white dark:border-card-dark shadow-xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOcza18wq-5angLL8xXP77-DweGp1kiGL_iq_BIwragoDqajHId3hO2B8PZHCdhbOKnlnNbv2RpFEfVg84tySF4uNS_ByDsY4vrRHeiNma2Yl1BDh14XGic3sJpFq0AntcLD_19W9gUR1__t5rM6u5YqmYoptiXLF3Ibo_0vt-ryWGXgpW8saX3n34lpqc11Du-gvytn-fd0cl1zCeOhAVtdbyfPF2ImbhIGrvFniwpVGuxy1tL8waHyBZklxwmarNsbE0YB1qOJ6Y"
          />
          <div className="absolute bottom-0 right-0 bg-primary text-white p-3 rounded-full shadow-lg border-4 border-white dark:border-card-dark">
            <span className="material-icons-round text-2xl">pets</span>
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Welcome Back!</h1>
        <p className="text-gray-500 dark:text-gray-400 text-center px-4">Let's get your furry friend ready for a happy day.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 ml-1">Email Address</label>
          <div className="relative">
            <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">alternate_email</span>
            <input 
              type="email" 
              placeholder="hello@example.com"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-card-dark border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2 ml-1">
            <label className="text-sm font-bold text-gray-600 dark:text-gray-400">Password</label>
            <button type="button" className="text-xs font-bold text-primary">Forgot?</button>
          </div>
          <div className="relative">
            <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">lock_outline</span>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full pl-12 pr-12 py-4 bg-gray-50 dark:bg-card-dark border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all"
            />
            <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">visibility_off</span>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl shadow-glow transition-all active:scale-95 text-lg flex items-center justify-center gap-2"
        >
          <span>Log In</span>
          <span className="material-icons-round text-lg">arrow_forward</span>
        </button>
      </form>

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Or continue with</span>
        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDdj7_5jtgZA73iUh21SHJ98m4ipjFHmD-fGVcwxOVAUW33Hdt6emXeulagfyKRtE9_NhVQL8w9WZtThArRrw-w7QECZqIfudjMf2cWs_2_dCoOJpDB9kxGTVp9XJc5Rgz3qbmOj9qf-EHkENXu3sBi5vx4CAx6n-7nBzajLPNwwtavYDW8Ybj4ZRNmsTf3nUzPhRorzrdKbtWZsBJbKcp8WQhk9n2LFzN-6bd0QlKBrFpuJGL0IA-YUBxtvs8pNKS80uEOUygHGZJ6',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDSiG3G2RQWWv16Ov5evSl3n1NxrLT94nls1zcKBzF40cksvkJ1wwUyvgNSVFLIcHSQ2bbuKBsR5EyniCtO5i_wxlOvVdBa63LUknyMKkOlYk9EEvHRkH0g2czcbLh5LoqxW3msA05zYFAk4T2PCa1-gQaglxkyYQ3XolGXNDSichBmavTCvOjspsIzCZEdmX_V8RPxo3ilT1fVa85eevQNJXkRuHb9UMBUMzEOIn4tg6w_9jdhSMCeA-bt91Y3Uug6E6pWJi5Bw60t',
          'apple'
        ].map((icon, idx) => (
          <button key={idx} className="flex items-center justify-center py-3 bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:bg-gray-50 transition-colors">
            {icon === 'apple' ? <span className="material-icons-round text-3xl">apple</span> : <img src={icon} className="w-6 h-6" alt="social icon" />}
          </button>
        ))}
      </div>

      <div className="mt-auto text-center space-y-4">
        <p className="text-sm text-gray-500">Don't have an account? <button className="text-primary font-bold">Sign Up</button></p>
        <button onClick={() => navigate('/home')} className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium">Skip for now</button>
      </div>
    </div>
  );
};

export default LoginScreen;
