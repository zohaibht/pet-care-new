
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, MaterialIcon } from '../components/Native';

interface SplashScreenProps {
  onStart: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image 
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaBJkAewJS4scNRhWgfLsjmFNUysNO7KURLHNK964sJzLK3b3u8vbcOyruMuXmKt0sw-STOtXpTTq14UA50OL_o0wavzTXbd3kxy5TReJIBS0yA9abJsD0-btocs6YJH3ycwbSHS6OtpwtyuKD3CXU9BvVBUdjpSkeDIUPoWT7S6YHmobSysMTq53ATA_R-Fwvf-0rDGtjqkWqKXUAU1GtwY7bXqTrCfFzwFownhj0xSuYccHsBJWxaKE8-xv6BgFc7iABj8Rgh30u' }} 
          style={styles.bgImage}
        />
        <View style={styles.overlay} />
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={onStart} style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoSection}>
        <View style={styles.logoWrapper}>
          <View style={styles.logoBg} />
          <View style={styles.logoCard}>
            <MaterialIcon name="pets" color="#0EA5E9" size={48} />
          </View>
        </View>
        <Text style={styles.brandTitle}>Aagaz</Text>
        <Text style={styles.brandSubtitle}>Pet Care Companion</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.textGroup}>
          <Text style={styles.mainTagline}>Love, Care, &{"\n"}<Text style={styles.highlightText}>Understanding</Text></Text>
          <Text style={styles.subTagline}>Everything your furry friend needs, all in one place.</Text>
        </View>

        <TouchableOpacity onPress={onStart} style={styles.startBtn}>
          <Text style={styles.startBtnText}>Get Started</Text>
          <MaterialIcon name="arrow-forward" color="#FFFFFF" size={20} style={{ marginLeft: 8 }} />
        </TouchableOpacity>
        
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A', justifyContent: 'space-between', paddingHorizontal: 24, paddingVertical: 48 },
  backgroundContainer: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  bgImage: { width: '100%', height: '100%', opacity: 0.8 },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.7)' },
  header: { alignItems: 'flex-end' },
  loginBtn: { paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.1)' },
  loginBtnText: { color: 'rgba(255, 255, 255, 0.8)', fontSize: 14, fontWeight: '600' },
  logoSection: { alignItems: 'center' },
  logoWrapper: { width: 112, height: 112, marginBottom: 24, position: 'relative', justifyContent: 'center', alignItems: 'center' },
  logoBg: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#0EA5E9', borderRadius: 24, transform: [{ rotate: '6deg' }], opacity: 0.6 },
  logoCard: { width: '100%', height: '100%', backgroundColor: '#FFFFFF', borderRadius: 24, justifyContent: 'center', alignItems: 'center' },
  brandTitle: { fontSize: 48, fontWeight: '800', color: '#FFFFFF', marginBottom: 8 },
  brandSubtitle: { fontSize: 18, fontWeight: '300', color: '#BFDBFE' },
  footer: { alignItems: 'center' },
  textGroup: { marginBottom: 32, alignItems: 'center' },
  mainTagline: { fontSize: 32, fontWeight: '800', color: '#FFFFFF', lineHeight: 40, marginBottom: 8, textAlign: 'center' },
  highlightText: { color: '#38BDF8' },
  subTagline: { fontSize: 14, color: 'rgba(191, 219, 254, 0.8)', maxWidth: 280, textAlign: 'center' },
  startBtn: { width: '100%', backgroundColor: '#0EA5E9', height: 64, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  startBtnText: { color: '#FFFFFF', fontSize: 18, fontWeight: '800' },
  pagination: { flexDirection: 'row', gap: 8, marginTop: 32 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0.4)' },
  activeDot: { backgroundColor: '#FFFFFF' },
});

export default SplashScreen;
