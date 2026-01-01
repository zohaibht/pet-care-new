
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { View, Text, TouchableOpacity } from './Native';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: 'home', label: 'Home', path: '/home' },
    { icon: 'restaurant_menu', label: 'Diet', path: '/diet' },
    { icon: 'healing', label: 'Health', path: '/health' },
    { icon: 'person_outline', label: 'Profile', path: '/profile' },
  ];

  return (
    <View className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-card-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 px-6 pt-3 pb-safe flex-row justify-between items-center z-50 rounded-t-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
      {navItems.slice(0, 2).map((item) => (
        <TouchableOpacity
          key={item.path}
          // Changed onClick to onPress to match the TouchableOpacity prop definition in Native.tsx
          onPress={() => navigate(item.path)}
          className="items-center gap-1 py-1 flex-1"
        >
          <Text className={`material-icons-round text-2xl transition-all ${
            isActive(item.path) ? 'text-primary scale-110' : 'text-gray-300'
          }`}>{item.icon}</Text>
          <Text className={`text-[9px] font-bold uppercase tracking-wider ${
            isActive(item.path) ? 'text-primary' : 'text-gray-400'
          }`}>{item.label}</Text>
        </TouchableOpacity>
      ))}

      <View className="relative -top-10 items-center justify-center flex-1">
        <TouchableOpacity 
          // Changed onClick to onPress to match the TouchableOpacity prop definition in Native.tsx
          onPress={() => navigate('/home')}
          className="w-16 h-16 rounded-full bg-primary items-center justify-center shadow-lg shadow-primary/40 border-4 border-white dark:border-card-dark"
        >
          <Text className="material-icons-round text-white text-3xl">add</Text>
        </TouchableOpacity>
      </View>

      {navItems.slice(2).map((item) => (
        <TouchableOpacity
          key={item.path}
          // Changed onClick to onPress to match the TouchableOpacity prop definition in Native.tsx
          onPress={() => navigate(item.path)}
          className="items-center gap-1 py-1 flex-1"
        >
          <Text className={`material-icons-round text-2xl transition-all ${
            isActive(item.path) ? 'text-primary scale-110' : 'text-gray-300'
          }`}>{item.icon}</Text>
          <Text className={`text-[9px] font-bold uppercase tracking-wider ${
            isActive(item.path) ? 'text-primary' : 'text-gray-400'
          }`}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;
