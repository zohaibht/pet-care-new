
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FoodChecker: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('Grapes');

  const categories = [
    { label: 'Fruits', emoji: '🍎', color: 'bg-orange-100' },
    { label: 'Veggies', emoji: '🥕', color: 'bg-green-100' },
    { label: 'Meat', emoji: '🥩', color: 'bg-red-100' },
    { label: 'Dairy', emoji: '🧀', color: 'bg-blue-100' },
    { label: 'Grains', emoji: '🌾', color: 'bg-yellow-100' },
  ];

  return (
    <div className="flex-1 pb-32 overflow-y-auto no-scrollbar">
      <div className="bg-primary pt-14 pb-10 px-6 rounded-b-[3rem] shadow-lg relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 bg-white/20 text-white rounded-full">
              <span className="material-icons-round">arrow_back</span>
            </button>
            <div>
              <h1 className="text-white text-2xl font-bold">Food Checker</h1>
              <p className="text-sky-100 text-sm">Keep your furry friend safe</p>
            </div>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
            <span className="material-icons-round text-white">notifications</span>
          </div>
        </div>
        <div className="relative">
          <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-12 py-4 bg-white border-none rounded-2xl shadow-soft"
            placeholder="Search food..."
          />
          <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">filter_list</span>
        </div>
      </div>

      <div className="px-6 -mt-6 relative z-20 mb-8">
        <div className="bg-white dark:bg-card-dark rounded-2xl shadow-xl p-5 border-l-4 border-toxic flex gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
            <span className="material-icons-round text-toxic text-2xl">gpp_bad</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold dark:text-white">Grapes</h3>
              <span className="bg-toxic text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Toxic</span>
            </div>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              <span className="text-toxic font-bold">❌ EXTREMELY TOXIC!</span> Can cause sudden kidney failure. Even a small amount can be fatal.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold dark:text-white">Categories</h2>
          <button className="text-primary text-sm font-bold">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat, i) => (
            <button key={i} className="flex flex-col items-center gap-2 group">
              <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center border-2 border-transparent group-hover:border-primary transition-all shadow-sm`}>
                <span className="text-2xl">{cat.emoji}</span>
              </div>
              <span className="text-[10px] font-bold text-gray-500">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6">
        <h2 className="text-lg font-bold mb-4 dark:text-white">Common Foods</h2>
        <div className="space-y-3">
          <FoodListItem name="Bananas" desc="Safe in moderation. High sugar." status="SAFE" emoji="🍌" isSafe={true} />
          <FoodListItem name="Chocolate" desc="Contains theobromine. Deadly." status="TOXIC" emoji="🍫" isSafe={false} />
          <FoodListItem name="Peanut Butter" desc="Xylitol-free only. Good treat." status="SAFE" emoji="🥜" isSafe={true} />
          <FoodListItem name="Onions" desc="Damages red blood cells." status="TOXIC" emoji="🧅" isSafe={false} />
        </div>
      </div>
    </div>
  );
};

const FoodListItem: React.FC<{ name: string; desc: string; status: string; emoji: string; isSafe: boolean }> = ({ name, desc, status, emoji, isSafe }) => (
  <div className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm border border-gray-50 dark:border-gray-800 flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-2xl">{emoji}</div>
    <div className="flex-1">
      <h4 className="font-bold text-sm dark:text-white">{name}</h4>
      <p className="text-[10px] text-gray-400">{desc}</p>
    </div>
    <div className={`px-2 py-1 rounded-lg flex items-center gap-1 ${isSafe ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
      <span className="material-icons-round text-[14px]">{isSafe ? 'check_circle' : 'warning'}</span>
      <span className="text-[10px] font-bold">{status}</span>
    </div>
  </div>
);

export default FoodChecker;
