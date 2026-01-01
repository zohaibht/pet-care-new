
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, MaterialIcon } from './Native';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { icon: 'home', label: 'Home', screen: Screen.HOME },
    { icon: 'restaurant_menu', label: 'Diet', screen: Screen.DIET },
    { icon: 'healing', label: 'Health', screen: Screen.SYMPTOM_CHECKER },
    { icon: 'person_outline', label: 'Profile', screen: Screen.PET_PROFILE },
  ];

  return (
    <View style={styles.container}>
      {navItems.slice(0, 2).map((item) => (
        <TouchableOpacity
          key={item.screen}
          onPress={() => onNavigate(item.screen)}
          style={styles.navBtn}
        >
          <MaterialIcon 
            name={item.icon} 
            size={24} 
            color={currentScreen === item.screen ? '#0EA5E9' : '#CBD5E1'} 
          />
          <Text style={[styles.label, currentScreen === item.screen && styles.labelActive]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.centerSpace}>
        <TouchableOpacity 
          onPress={() => onNavigate(Screen.HOME)}
          style={styles.addBtn}
        >
          <MaterialIcon name="add" size={32} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {navItems.slice(2).map((item) => (
        <TouchableOpacity
          key={item.screen}
          onPress={() => onNavigate(item.screen)}
          style={styles.navBtn}
        >
          <MaterialIcon 
            name={item.icon} 
            size={24} 
            color={currentScreen === item.screen ? '#0EA5E9' : '#CBD5E1'} 
          />
          <Text style={[styles.label, currentScreen === item.screen && styles.labelActive]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    paddingBottom: 20,
  },
  navBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
    textTransform: 'uppercase',
  },
  labelActive: {
    color: '#0EA5E9',
  },
  centerSpace: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtn: {
    width: 60,
    height: 60,
    backgroundColor: '#0EA5E9',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
    shadowColor: '#0EA5E9',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
});

export default BottomNav;
