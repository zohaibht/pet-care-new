
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BreedExplorer: React.FC = () => {
  const navigate = useNavigate();

  const breeds = [
    {
      id: 'golden-retriever',
      name: 'Golden Retriever',
      size: 'Large',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5iy5Qp6eECNWsHEBG7kAsggYeoTbvh2LeV0D21JrtQmbp34oM5uSv7ZN2VciA6JyXymAClVqJ-70BCZ6PHRuSftJzb_T_mDDgZNIiXwbepQYh2g-oOMyGzAhOAVZ58D_8XZJVjh3VCKd7CVyRYJZPuY2YhDH5SOjnFpySYniT7KyL1hVq5BOkC1ecAVYE2JiIYu4jTvA4zls3tY0kALOL-80N-5_Dz5M4SMk7cZmiE8xAGQoKwO4XDU1so863uPQvWek_ZXJucKDf',
      desc: 'Friendly, intelligent, and devoted dogs. Great for families.',
      rating: 4.9,
      tag: 'Active'
    },
    {
      id: 'beagle',
      name: 'Beagle',
      size: 'Medium',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkEeM1oWroxtusYtKMXZ65Dasxd1wdbnJOsuqUDj_4WAG5CRKnnUy6e1yaupLnoBJjtmH7MxCMuwyDM_9cBe9joVOrU54juTpnzr7NI_hqH9U91mBdIK3fTClxA0TZtZK_yAFWRUun_4VlD2Shz6HMCt0KDANiaxPNhDpvRuVGktXmEQW-HWXC7ptpOXB1A31OdL-SPI0hPqqghXcb_DCkb5VLUmmUrS126nF1QL3os7VkY9HLlYNB1mSnuwOPbyl0StgGQICMsg9j',
      desc: 'Curious, merry, and friendly. Known for their great sense of smell.',
      rating: 4.7,
      tag: 'Hunting'
    },
    {
      id: 'corgi',
      name: 'Pembroke Corgi',
      size: 'Small',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpPhawmH0qcqfUBrDERvOqt3udLDKlKYK0o6n19JqJxhEzbszWHIrXFjIUFF2bW3Rj4HG-hEfSKjjlNj0ibUcCHgiULxxtOV8SWeEsWUpoZRWTQ72e0FORf_yZtUkNSI1ElrWq4gtR66cNg4OKlAeZDhoDClCRYxfV4PcuM5Xw1b0rIma8FXaiEAFjG0hoLdoXtPe8Bt6Oyi0XN-CLSoZH8BvNBIf53hZQGlz2gHIDHuWEedHizNQqo-QNk-z87njpO1Rmlj7TUDpz',
      desc: 'Affectionate, smart, and alert. Famous for their short legs.',
      rating: 4.8,
      tag: 'Indoor'
    }
  ];

  return (
    <div className="flex-1 pb-32 overflow-y-auto no-scrollbar pt-14 px-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-400 font-bold">Find a friend</p>
          <h1 className="text-2xl font-bold dark:text-white">Breed Explorer</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 dark:border-card-dark shadow-sm">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbmbFN3W7yzKPlCJzcF3Z8LCsFDuBj3Rt9_opib6rYD00SCCOX2TtfOHUStxZ_OejkGebnkmZTOF4-qc9iIafo6hIVEPhWiWIjXb-GlUgG7ynTPhg8u90yMeSKV3x6fJztV3wy2dBMzHsW9UG19O688RYPCUpGDDY7ZxhYjue3JgdHONC6SR0WWrFHqNOKz270StLQx9qYpmvYSttlhJouh-V0j1xX3jcnoZwVOViqHbJnfNYEfACYQX1FGZqDu69AWSokJKuqMPHs" alt="Profile" />
        </div>
      </div>

      <div className="relative mb-6">
        <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
        <input 
          type="text" 
          placeholder="Search breeds..."
          className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-card-dark border-none rounded-2xl shadow-soft"
        />
        <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-primary p-1 bg-primary/10 rounded-lg text-sm">tune</span>
      </div>

      <div className="flex gap-3 overflow-x-auto no-scrollbar mb-8">
        <button className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-xl shadow-glow">All</button>
        <button className="px-5 py-2 bg-white dark:bg-card-dark text-gray-400 text-sm font-bold rounded-xl shadow-sm">Small</button>
        <button className="px-5 py-2 bg-white dark:bg-card-dark text-gray-400 text-sm font-bold rounded-xl shadow-sm">Medium</button>
        <button className="px-5 py-2 bg-white dark:bg-card-dark text-gray-400 text-sm font-bold rounded-xl shadow-sm">Large</button>
      </div>

      <h2 className="text-lg font-bold mb-4 dark:text-white">Popular Breeds</h2>
      <div className="space-y-4">
        {breeds.map(breed => (
          <div 
            key={breed.id} 
            onClick={() => navigate(`/breed/${breed.id}`)}
            className="bg-white dark:bg-card-dark p-3 rounded-2xl shadow-soft flex gap-4 cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
              <img src={breed.image} alt={breed.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 p-1 bg-white/80 rounded-full">
                <span className="material-icons-round text-red-500 text-xs">favorite</span>
              </div>
            </div>
            <div className="flex-1 py-1">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-bold dark:text-white">{breed.name}</h3>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">{breed.size}</span>
              </div>
              <p className="text-[10px] text-gray-400 mt-1 line-clamp-2">{breed.desc}</p>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1">
                  <span className="material-icons-round text-yellow-400 text-[14px]">star</span>
                  <span className="text-[10px] font-bold">{breed.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-icons-round text-primary text-[14px]">speed</span>
                  <span className="text-[10px] text-gray-400 font-bold">{breed.tag}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreedExplorer;
