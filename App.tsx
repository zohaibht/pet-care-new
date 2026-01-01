
import React, { useState, useCallback, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, StyleSheet, Dimensions } from './components/Native';
import { Pet, Screen } from './types';

// Screens
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

// Components
import BottomNav from './components/BottomNav';

const { width } = Dimensions.get('window');

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.SPLASH);
  const [screenParams, setScreenParams] = useState<any>(null);
  const [currentPet, setCurrentPet] = useState<Pet>({
    name: 'Max',
    type: 'Dog',
    breed: 'Beagle',
    age: 3,
    weight: 12.5,
    gender: 'Male',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9S7paQ1xTCW-V7shP8Ce4ixIU4remZv9ACy2aM0-valnUR9aLhPme65i1o_3sfugnas8d6lS41skZDZYwRMJ4bpb6l4S0NAXoNlxqcEVB1kRZiR6gJpi_9hlG7fhK6aBlsP2CP1_Thyn-Xxq5RkbZtqwLvOJgNtd2MSk4VZcRO-6YlsEc3n3yXouiPekl-v2PHg68cQ5kb0DUrgNYhBGGUaXM827PBqpbKaD5PYSmQi0MyFdUgoq9CldmqcHAB3cNbYf8SZKPirsE'
  });

  const navigate = useCallback((screen: Screen, params?: any) => {
    setCurrentScreen(screen);
    if (params) setScreenParams(params);
  }, []);

  const goBack = useCallback(() => {
    navigate(Screen.HOME);
  }, [navigate]);

  const renderScreen = useMemo(() => {
    switch (currentScreen) {
      case Screen.SPLASH:
        return <SplashScreen onStart={() => navigate(Screen.LOGIN)} />;
      case Screen.LOGIN:
        return <LoginScreen onLogin={() => navigate(Screen.HOME)} onSkip={() => navigate(Screen.HOME)} />;
      case Screen.HOME:
        return <HomeDashboard pet={currentPet} onNavigate={navigate} />;
      case Screen.DIET:
        return <DietDashboard pet={currentPet} onBack={goBack} onCheckFood={() => navigate(Screen.FOOD_CHECKER)} />;
      case Screen.FOOD_CHECKER:
        return <FoodChecker onBack={goBack} />;
      case Screen.PET_PROFILE:
        return <PetProfile pet={currentPet} onSave={(p) => { setCurrentPet(p); navigate(Screen.HOME); }} onBack={goBack} />;
      case Screen.BREED_EXPLORER:
        return <BreedExplorer onSelectBreed={(id) => navigate(Screen.BREED_DETAILS, { id })} />;
      case Screen.BREED_DETAILS:
        return <BreedDetails breedId={screenParams?.id} onBack={() => navigate(Screen.BREED_EXPLORER)} />;
      case Screen.SYMPTOM_CHECKER:
        return <SymptomChecker pet={currentPet} onBack={goBack} onDiagnose={() => navigate(Screen.DIAGNOSIS)} />;
      case Screen.DIAGNOSIS:
        return <DiagnosisScreen onBack={() => navigate(Screen.SYMPTOM_CHECKER)} />;
      default:
        return <HomeDashboard pet={currentPet} onNavigate={navigate} />;
    }
  }, [currentScreen, currentPet, navigate, goBack, screenParams]);

  const hideNav = [Screen.SPLASH, Screen.LOGIN, Screen.PET_PROFILE, Screen.DIAGNOSIS, Screen.BREED_DETAILS].includes(currentScreen);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.appWrapper}>
        <View style={styles.screenContainer}>
          {renderScreen}
        </View>
        {!hideNav && (
          <BottomNav 
            currentScreen={currentScreen} 
            onNavigate={navigate} 
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  appWrapper: {
    flex: 1,
    width: '100%',
    maxWidth: width > 500 ? 450 : '100%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  screenContainer: {
    flex: 1,
  },
});
