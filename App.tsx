
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeDashboard from './screens/HomeDashboard';
import DietDashboard from './screens/DietDashboard';
import FoodChecker from './screens/FoodChecker';
import PetProfile from './screens/PetProfile';
import BreedExplorer from './screens/BreedExplorer';
import BreedDetails from './screens/BreedDetails';
import SymptomChecker from './screens/SymptomChecker';
import DiagnosisScreen from './screens/DiagnosisScreen';
import BottomNav from './components/BottomNav';
import { View } from './components/Native';
import { Pet } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<{ name: string; avatar: string } | null>(null);
  const [currentPet, setCurrentPet] = useState<Pet>({
    name: 'Max',
    type: 'Dog',
    breed: 'Beagle',
    age: 3,
    weight: 12.5,
    gender: 'Male',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9S7paQ1xTCW-V7shP8Ce4ixIU4remZv9ACy2aM0-valnUR9aLhPme65i1o_3sfugnas8d6lS41skZDZYwRMJ4bpb6l4S0NAXoNlxqcEVB1kRZiR6gJpi_9hlG7fhK6aBlsP2CP1_Thyn-Xxq5RkbZtqwLvOJgNtd2MSk4VZcRO-6YlsEc3n3yXouiPekl-v2PHg68cQ5kb0DUrgNYhBGGUaXM827PBqpbKaD5PYSmQi0MyFdUgoq9CldmqcHAB3cNbYf8SZKPirsE'
  });

  return (
    <Router>
      <View className="flex-1 bg-gray-100 dark:bg-gray-950 overflow-hidden">
        <View className="w-full max-w-md bg-background-light dark:bg-background-dark min-h-full shadow-2xl relative self-center">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<LoginScreen onLogin={() => setUser({ name: 'Max', avatar: '' })} />} />
            <Route path="/home" element={<HomeDashboard pet={currentPet} />} />
            <Route path="/diet" element={<DietDashboard pet={currentPet} />} />
            <Route path="/food-checker" element={<FoodChecker />} />
            <Route path="/profile" element={<PetProfile pet={currentPet} onSave={setCurrentPet} />} />
            <Route path="/breed-explorer" element={<BreedExplorer />} />
            <Route path="/breed/:id" element={<BreedDetails />} />
            <Route path="/health" element={<SymptomChecker pet={currentPet} />} />
            <Route path="/diagnosis" element={<DiagnosisScreen />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <NavigationWrapper />
        </View>
      </View>
    </Router>
  );
};

const NavigationWrapper: React.FC = () => {
  const location = useLocation();
  const hideNavOn = ['/', '/login', '/profile', '/diagnosis'];
  const shouldHide = hideNavOn.some(path => location.pathname === path || location.pathname.startsWith('/breed/'));

  if (shouldHide) return null;
  return <BottomNav />;
};

export default App;
