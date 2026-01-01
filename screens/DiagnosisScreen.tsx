
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DiagnosisScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark flex flex-col h-screen overflow-hidden">
      <div className="px-6 pt-12 pb-4 flex items-center justify-between z-10 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white dark:bg-card-dark shadow-sm">
          <span className="material-icons-round">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold dark:text-white">Diagnosis & First Aid</h1>
        <button className="p-2 rounded-full bg-white dark:bg-card-dark shadow-sm">
          <span className="material-icons-round">share</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-40">
        <div className="mt-4 mb-8">
          <div className="bg-white dark:bg-card-dark rounded-3xl p-6 shadow-soft flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center shrink-0">
              <span className="material-icons-round text-3xl text-toxic">sick</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Detected Symptom</p>
              <h2 className="text-2xl font-extrabold dark:text-white">Vomiting</h2>
              <p className="text-xs text-gray-500 mt-1 font-bold">Severity: <span className="text-orange-500">Moderate</span></p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4 dark:text-white flex items-center">
            <span className="material-icons-round text-primary mr-2">analytics</span>
            Possible Causes
          </h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm border-l-4 border-primary">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold dark:text-white">Food Poisoning</h4>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-md">High Prob.</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed mb-3">Ingestion of spoiled food, chocolate, or toxic plants.</p>
              <div className="flex items-center text-[10px] text-gray-400 font-bold">
                <span className="material-icons-round text-sm mr-1">info</span>
                Common in dogs who scavenge.
              </div>
            </div>

            <div className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm border-l-4 border-gray-200 dark:border-gray-800 opacity-80">
              <div className="flex justify-between items-start">
                <h4 className="font-bold dark:text-white">Dietary Indiscretion</h4>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-400 text-[10px] font-bold px-2 py-1 rounded-md">Med Prob.</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed mt-1">Eating garbage or foreign objects.</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold mb-4 dark:text-white flex items-center">
            <span className="material-icons-round text-orange-400 mr-2">medical_services</span>
            Immediate Care
          </h3>
          <div className="bg-white dark:bg-card-dark rounded-[2rem] overflow-hidden shadow-soft border border-gray-100 dark:border-gray-800">
            <div className="bg-orange-50 dark:bg-orange-900/10 p-4 border-b border-orange-100 dark:border-orange-800">
              <h4 className="font-bold text-orange-500 text-xs uppercase tracking-widest">Steps for Home Relief</h4>
            </div>
            <div className="p-6 space-y-8">
              <CareStep number={1} title="Withhold Food" desc="Stop feeding for 12-24 hours to let the stomach settle. Provide small amounts of water." />
              <CareStep number={2} title="Check Hydration" desc="Check gums. If they are pale or dry, seek immediate vet attention." />
              <CareStep number={3} title="Bland Diet" desc="Reintroduce boiled chicken and rice in small portions." />
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 flex gap-3 items-start">
              <span className="material-icons-round text-toxic text-sm mt-0.5">warning</span>
              <p className="text-[10px] text-toxic font-bold leading-relaxed">If blood is present in vomit or if symptoms persist for more than 24 hours, do not wait.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light dark:via-background-dark to-transparent pt-12 pb-10 flex flex-col items-center gap-4">
        <button className="w-full bg-toxic hover:bg-red-600 text-white font-bold py-4 rounded-2xl shadow-lg flex items-center justify-center gap-3 transition-all active:scale-95 group">
          <span className="material-icons-round animate-pulse">phone_in_talk</span>
          <span>Call Vet Emergency</span>
        </button>
        <button className="text-primary text-sm font-bold flex items-center gap-1">
          Find Nearest Clinic <span className="material-icons-round text-lg">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

const CareStep: React.FC<{ number: number; title: string; desc: string }> = ({ number, title, desc }) => (
  <div className="flex gap-4 relative">
    {number < 3 && <div className="absolute left-4 top-8 bottom-[-32px] w-0.5 bg-gray-100 dark:bg-gray-800"></div>}
    <div className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center font-extrabold shadow-lg shadow-orange-200 dark:shadow-none shrink-0 relative z-10">{number}</div>
    <div>
      <h5 className="font-bold dark:text-white mb-1">{title}</h5>
      <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

export default DiagnosisScreen;
