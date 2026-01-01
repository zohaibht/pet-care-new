
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pet } from '../types';

export interface SymptomCheckerProps {
  pet: Pet;
}

const SymptomChecker: React.FC<SymptomCheckerProps> = ({ pet }) => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 pb-32 overflow-y-auto no-scrollbar bg-background-light dark:bg-background-dark">
      <header className="px-6 pt-12 pb-4 flex items-center justify-between sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate('/home')} className="p-2 rounded-full bg-white dark:bg-card-dark shadow-sm">
          <span className="material-icons-round">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold dark:text-white">Symptom Checker</h1>
        <button className="p-2 rounded-full bg-white dark:bg-card-dark shadow-sm text-primary">
          <span className="material-icons-round">history</span>
        </button>
      </header>

      <div className="text-center mt-6 mb-8 px-6">
        <p className="text-gray-400 text-xs font-bold mb-2">Checking for</p>
        <div className="inline-flex items-center gap-3 bg-white dark:bg-card-dark px-4 py-2 rounded-full shadow-sm border border-gray-50 dark:border-gray-800">
          <img src={pet.avatar} alt="Pet" className="w-8 h-8 rounded-full border-2 border-primary object-cover" />
          <span className="text-sm font-bold dark:text-white">{pet.name} ({pet.breed})</span>
          <span className="material-icons-round text-gray-200 text-sm">expand_more</span>
        </div>
      </div>

      <div className="relative w-full h-80 flex items-center justify-center mb-8">
        <div className="absolute inset-0 mx-6 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 rounded-[3rem] -z-10"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv9vE7rPmQYkux1a50HKBMihGMd0ec0tLc_ecw7cvGDU-tBo3yNLDuafIZZ7rA-Q_e3ouvErXTn4paPGiB28zSkpUrs_yhyfkCV_TUKX6R9nr9G_DAE1S0Sai6q8gEvlzTX6IdQw1RozUQeHDxYC_HUDAbJ9nYtzxITMqZe0sCN-ZgV62iLGOLLXmUs4r52wbvTTYWW4sII83UpmIMLZ62rE25UNRtZpsrWUuvugxNC8S3Xs02xEWNJMD7mItVJI48anH3Hot6jtJx" 
          alt="Body Map" 
          className="h-64 object-contain filter drop-shadow-2xl"
        />
        
        <div onClick={() => navigate('/diagnosis')} className="absolute top-32 left-1/2 -translate-x-8 cursor-pointer">
          <div className="bg-card-dark text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-xl mb-2 whitespace-nowrap animate-bounce">Torso & Stomach</div>
          <div className="w-5 h-5 bg-primary/40 rounded-full animate-ping absolute left-1/2 -translate-x-1/2"></div>
          <div className="w-5 h-5 bg-primary border-4 border-white rounded-full relative shadow-glow mx-auto"></div>
        </div>

        <p className="absolute bottom-0 text-[10px] text-gray-400 font-bold italic">Tap on the body area to focus symptoms</p>
      </div>

      <div className="px-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold dark:text-white">Common Symptoms</h2>
          <button className="text-primary text-sm font-bold">View all</button>
        </div>
        
        <div className="space-y-4">
          <SymptomItem title="Vomiting" desc="Frequent or acute stomach upset" icon="sick" color="bg-orange-100 text-orange-500" onClick={() => navigate('/diagnosis')} />
          <SymptomItem title="Itching & Scratching" desc="Skin irritation or parasites" icon="pest_control" color="bg-blue-100 text-blue-500" />
          <SymptomItem title="Limping" desc="Difficulty walking or joint pain" icon="pets" color="bg-purple-100 text-purple-500" />
        </div>
      </div>
    </div>
  );
};

const SymptomItem: React.FC<{ title: string; desc: string; icon: string; color: string; onClick?: () => void }> = ({ title, desc, icon, color, onClick }) => (
  <button onClick={onClick} className="w-full bg-white dark:bg-card-dark p-4 rounded-3xl shadow-sm border border-transparent hover:border-primary/20 transition-all flex items-center gap-4 text-left group">
    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shrink-0`}>
      <span className="material-icons-round">{icon}</span>
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-sm dark:text-white group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-[10px] text-gray-400 font-bold">{desc}</p>
    </div>
    <span className="material-icons-round text-gray-200 group-hover:text-primary transition-colors">chevron_right</span>
  </button>
);

export default SymptomChecker;
