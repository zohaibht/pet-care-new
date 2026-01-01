
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BreedDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex-1 bg-white dark:bg-card-dark">
      <div className="relative h-96 w-full">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh5Wu5uPsCFqv9GrAqqjlrmZStvQUCvy1Xij0a2MwQSLgLwhsPWLaOdVNR83ULIE-jtbJUVZuCTzh-hcvubR40BNToxuIbhaMLi22MkrqprAARf4DpAxOrSUuoLrczGxn72oXoxPdMGR_h10NXVqBfhTTkeGQzv7Q7BR_q1O83vYTyUix3u9ZQfVs2zS1WRDLr0mLcqojLtabBhgoW7lPY1BF4r1xWXRi7slbLRl8LFXcyvdqsIS10vSRUQOKhndplQ1QkpGvdR2-C" 
          alt="Golden Retriever" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-0 left-0 right-0 p-6 pt-12 flex justify-between items-center z-10 bg-gradient-to-b from-black/50 to-transparent">
          <button onClick={() => navigate(-1)} className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
            <span className="material-icons-round">arrow_back</span>
          </button>
          <div className="flex gap-3">
            <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white"><span className="material-icons-round">share</span></button>
            <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-rose-400"><span className="material-icons-round">favorite</span></button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-white dark:bg-background-dark rounded-t-[2.5rem] z-10"></div>
      </div>

      <div className="px-6 pb-32 -mt-6 relative z-20 bg-white dark:bg-background-dark">
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="flex gap-2 mb-1">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Dog</span>
              <span className="flex items-center text-yellow-500 text-[10px] font-bold">
                <span className="material-icons-round text-sm mr-1">star</span> 4.9 (240 reviews)
              </span>
            </div>
            <h1 className="text-3xl font-extrabold dark:text-white">Golden Retriever</h1>
            <p className="text-sm text-gray-500 mt-1">Friendly • Intelligent • Devoted</p>
          </div>
          <div className="text-right">
            <div className="text-primary font-bold text-2xl">$1200</div>
            <div className="text-[10px] text-gray-400 font-bold">avg. price</div>
          </div>
        </div>

        <div className="flex border-b border-gray-100 dark:border-gray-800 mb-6">
          <button className="flex-1 pb-3 text-primary font-bold border-b-2 border-primary text-sm">Overview</button>
          <button className="flex-1 pb-3 text-gray-400 font-bold text-sm">Traits</button>
          <button className="flex-1 pb-3 text-gray-400 font-bold text-sm">History</button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <StatBox icon="pets" label="Size" value="Large" color="bg-orange-100 text-orange-500" />
          <StatBox icon="hourglass_top" label="Lifespan" value="10-12 yrs" color="bg-blue-100 text-blue-500" />
          <StatBox icon="sprint" label="Energy" value="High" color="bg-green-100 text-green-500" />
          <StatBox icon="school" label="Training" value="Easy" color="bg-purple-100 text-purple-500" />
        </div>

        <div className="bg-gray-50 dark:bg-card-dark p-5 rounded-3xl mb-8">
          <h3 className="font-bold text-lg mb-4 dark:text-white">Characteristics</h3>
          <div className="space-y-4">
            <ProgressBar label="Friendliness" value={5} />
            <ProgressBar label="Shedding Level" value={4} />
            <ProgressBar label="Watchdog Ability" value={2} />
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 dark:text-white">About Golden Retriever</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-10">
          The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterized by a gentle and affectionate nature and a striking golden coat. <span className="text-primary font-bold">Read more</span>
        </p>

        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-50 dark:border-gray-800 z-50 rounded-t-3xl">
          <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-glow flex items-center justify-center gap-2">
            <span className="material-icons-round">search</span>
            Find Golden Retrievers Nearby
          </button>
        </div>
      </div>
    </div>
  );
};

const StatBox: React.FC<{ icon: string; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
  <div className="bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-800 flex items-center gap-3">
    <div className={`p-2 rounded-xl ${color}`}>
      <span className="material-icons-round">{icon}</span>
    </div>
    <div>
      <p className="text-[10px] text-gray-400 font-bold">{label}</p>
      <p className="font-bold text-sm dark:text-white">{value}</p>
    </div>
  </div>
);

const ProgressBar: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div>
    <div className="flex justify-between items-center mb-1 text-[10px] font-bold">
      <span className="text-gray-500">{label}</span>
      <span className="text-primary">{value}/5</span>
    </div>
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= value ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
      ))}
    </div>
  </div>
);

export default BreedDetails;
