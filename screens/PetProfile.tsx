
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pet } from '../types';

interface PetProfileProps {
  pet: Pet;
  onSave: (pet: Pet) => void;
}

const PetProfile = ({ pet, onSave }: PetProfileProps) => {
  const navigate = useNavigate();
  const [editedPet, setEditedPet] = useState<Pet>(pet);

  const handleSave = () => {
    onSave(editedPet);
    navigate('/home');
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      <div className="px-6 pt-12 pb-4 flex items-center justify-between z-10">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-gray-50 dark:bg-gray-800">
          <span className="material-icons-round">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold dark:text-white">Pet Profile</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24">
        <div className="flex flex-col items-center mb-8 mt-4">
          <div className="relative group cursor-pointer">
            <div className="w-32 h-32 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center border-4 border-white dark:border-card-dark shadow-xl overflow-hidden relative">
              <img src={editedPet.avatar} alt="Pet Avatar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-icons-round text-white text-3xl">camera_alt</span>
              </div>
            </div>
            <p className="text-center mt-3 text-sm font-bold text-primary">Upload Photo</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-400 ml-1">Pet Name</label>
            <div className="relative">
              <input 
                value={editedPet.name}
                onChange={(e) => setEditedPet({ ...editedPet, name: e.target.value })}
                className="w-full bg-gray-50 dark:bg-card-dark border-none rounded-2xl py-4 pl-4 pr-12 focus:ring-2 focus:ring-primary font-bold dark:text-white"
                placeholder="e.g. Charlie"
              />
              <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">edit</span>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-400 ml-1">Pet Type</label>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setEditedPet({ ...editedPet, type: 'Dog' })}
                className={`flex items-center justify-center gap-2 py-4 rounded-2xl border-2 transition-all ${editedPet.type === 'Dog' ? 'border-primary bg-primary/10 text-primary' : 'border-transparent bg-gray-50 dark:bg-card-dark text-gray-400'}`}>
                <span className="material-icons-round">pets</span>
                <span className="font-bold">Dog</span>
              </button>
              <button 
                onClick={() => setEditedPet({ ...editedPet, type: 'Cat' })}
                className={`flex items-center justify-center gap-2 py-4 rounded-2xl border-2 transition-all ${editedPet.type === 'Cat' ? 'border-primary bg-primary/10 text-primary' : 'border-transparent bg-gray-50 dark:bg-card-dark text-gray-400'}`}>
                <span className="material-icons-round">catching_pokemon</span>
                <span className="font-bold">Cat</span>
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-400 ml-1">Breed</label>
            <div className="relative">
              <input 
                value={editedPet.breed}
                onChange={(e) => setEditedPet({ ...editedPet, breed: e.target.value })}
                className="w-full bg-gray-50 dark:bg-card-dark border-none rounded-2xl py-4 pl-4 pr-12 focus:ring-2 focus:ring-primary font-bold dark:text-white"
                placeholder="e.g. Golden Retriever"
              />
              <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">search</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-400 ml-1">Age (Years)</label>
              <input 
                type="number" 
                value={editedPet.age}
                onChange={(e) => setEditedPet({ ...editedPet, age: parseInt(e.target.value) || 0 })}
                className="w-full bg-gray-50 dark:bg-card-dark border-none rounded-2xl py-4 px-4 focus:ring-2 focus:ring-primary text-center font-bold dark:text-white"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-400 ml-1">Weight (kg)</label>
              <input 
                type="number" 
                value={editedPet.weight}
                onChange={(e) => setEditedPet({ ...editedPet, weight: parseFloat(e.target.value) || 0 })}
                className="w-full bg-gray-50 dark:bg-card-dark border-none rounded-2xl py-4 px-4 focus:ring-2 focus:ring-primary text-center font-bold dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 ml-1">Gender</label>
            <div className="flex gap-4">
              <button 
                onClick={() => setEditedPet({ ...editedPet, gender: 'Male' })}
                className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${editedPet.gender === 'Male' ? 'bg-primary text-white shadow-glow' : 'bg-gray-50 dark:bg-card-dark text-gray-400'}`}>
                <span className="material-icons-round">male</span> Male
              </button>
              <button 
                onClick={() => setEditedPet({ ...editedPet, gender: 'Female' })}
                className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${editedPet.gender === 'Female' ? 'bg-pink-500 text-white shadow-lg' : 'bg-gray-50 dark:bg-card-dark text-gray-400'}`}>
                <span className="material-icons-round">female</span> Female
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white dark:from-background-dark via-white dark:via-background-dark to-transparent pt-10">
        <button onClick={handleSave} className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-glow text-lg flex items-center justify-center gap-2">
          <span>Save Profile</span>
          <span className="material-icons-round">check_circle</span>
        </button>
      </div>
    </div>
  );
};

export default PetProfile;
