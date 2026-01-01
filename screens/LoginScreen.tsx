
import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, MaterialIcon } from '../components/Native';

interface LoginScreenProps {
  onLogin: () => void;
  onSkip: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onSkip }) => {
  return (
    <View style={styles.container}>
      <View style={styles.blurCircle} />
      
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOcza18wq-5angLL8xXP77-DweGp1kiGL_iq_BIwragoDqajHId3hO2B8PZHCdhbOKnlnNbv2RpFEfVg84tySF4uNS_ByDsY4vrRHeiNma2Yl1BDh14XGic3sJpFq0AntcLD_19W9gUR1__t5rM6u5YqmYoptiXLF3Ibo_0vt-ryWGXgpW8saX3n34lpqc11Du-gvytn-fd0cl1zCeOhAVtdbyfPF2ImbhIGrvFniwpVGuxy1tL8waHyBZklxwmarNsbE0YB1qOJ6Y' }} 
            style={styles.avatar}
          />
          <View style={styles.badge}>
            <MaterialIcon name="pets" size={20} color="#FFF" />
          </View>
        </View>
        <Text style={styles.welcome}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Let's get your furry friend ready for a happy day.</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <MaterialIcon name="alternate_email" size={20} color="#94A3B8" style={styles.inputIcon} />
            <TextInput 
              placeholder="hello@example.com"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Password</Text>
            <TouchableOpacity><Text style={styles.forgot}>Forgot?</Text></TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <MaterialIcon name="lock_outline" size={20} color="#94A3B8" style={styles.inputIcon} />
            <TextInput 
              placeholder="••••••••"
              secureTextEntry
              style={styles.input}
            />
            <MaterialIcon name="visibility_off" size={20} color="#94A3B8" style={styles.eyeIcon} />
          </View>
        </View>

        <TouchableOpacity onPress={onLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
          <MaterialIcon name="arrow_forward" size={18} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialRow}>
        <SocialBtn icon="https://lh3.googleusercontent.com/aida-public/AB6AXuDdj7_5jtgZA73iUh21SHJ98m4ipjFHmD-fGVcwxOVAUW33Hdt6emXeulagfyKRtE9_NhVQL8w9WZtThArRrw-w7QECZqIfudjMf2cWs_2_dCoOJpDB9kxGTVp9XJc5Rgz3qbmOj9qf-EHkENXu3sBi5vx4CAx6n-7nBzajLPNwwtavYDW8Ybj4ZRNmsTf3nUzPhRorzrdKbtWZsBJbKcp8WQhk9n2LFzN-6bd0QlKBrFpuJGL0IA-YUBxtvs8pNKS80uEOUygHGZJ6" />
        <SocialBtn icon="https://lh3.googleusercontent.com/aida-public/AB6AXuDSiG3G2RQWWv16Ov5evSl3n1NxrLT94nls1zcKBzF40cksvkJ1wwUyvgNSVFLIcHSQ2bbuKBsR5EyniCtO5i_wxlOvVdBa63LUknyMKkOlYk9EEvHRkH0g2czcbLh5LoqxW3msA05zYFAk4T2PCa1-gQaglxkyYQ3XolGXNDSichBmavTCvOjspsIzCZEdmX_V8RPxo3ilT1fVa85eevQNJXkRuHb9UMBUMzEOIn4tg6w_9jdhSMCeA-bt91Y3Uug6E6pWJi5Bw60t" />
        <SocialBtn material="apple" />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? <Text style={styles.signup}>Sign Up</Text></Text>
        <TouchableOpacity onPress={onSkip}>
          <Text style={styles.skip}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SocialBtn = ({ icon, material }: any) => (
  <TouchableOpacity style={styles.socialBtn}>
    {material ? <MaterialIcon name={material} size={28} /> : <Image source={{ uri: icon }} style={styles.socialIcon} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 32, paddingTop: 64 },
  blurCircle: { position: 'absolute', top: -100, right: -100, width: 256, height: 256, backgroundColor: 'rgba(14, 165, 233, 0.1)', borderRadius: 128 },
  header: { alignItems: 'center', marginBottom: 40 },
  avatarContainer: { width: 140, height: 140, marginBottom: 24, position: 'relative' },
  avatar: { width: '100%', height: '100%', borderRadius: 70, borderWidth: 4, borderColor: '#FFFFFF' },
  badge: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#0EA5E9', padding: 10, borderRadius: 20, borderWidth: 4, borderColor: '#FFFFFF' },
  welcome: { fontSize: 28, fontWeight: '800', color: '#0F172A', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#64748B', textAlign: 'center', lineHeight: 20 },
  form: { gap: 24 },
  inputGroup: { gap: 8 },
  labelRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { fontSize: 14, fontWeight: '700', color: '#64748B', marginLeft: 4 },
  forgot: { fontSize: 12, fontWeight: '700', color: '#0EA5E9' },
  inputWrapper: { height: 60, backgroundColor: '#F8FAFC', borderRadius: 20, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 },
  inputIcon: { marginRight: 12 },
  input: { flex: 1, height: '100%', fontSize: 16, fontWeight: '600', color: '#0F172A' },
  eyeIcon: { marginLeft: 12 },
  loginBtn: { height: 64, backgroundColor: '#0EA5E9', borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', shadowColor: '#0EA5E9', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 15 },
  loginText: { color: '#FFFFFF', fontSize: 18, fontWeight: '800', marginRight: 8 },
  divider: { flexDirection: 'row', alignItems: 'center', gap: 16, marginVertical: 32 },
  line: { flex: 1, height: 1, backgroundColor: '#E2E8F0' },
  dividerText: { fontSize: 10, fontWeight: '800', color: '#94A3B8', letterSpacing: 1 },
  socialRow: { flexDirection: 'row', gap: 16 },
  socialBtn: { flex: 1, height: 56, backgroundColor: '#FFFFFF', borderRadius: 20, borderWidth: 1, borderColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center' },
  socialIcon: { width: 24, height: 24 },
  footer: { marginTop: 'auto', paddingBottom: 32, alignItems: 'center', gap: 16 },
  footerText: { color: '#64748B', fontSize: 14 },
  signup: { color: '#0EA5E9', fontWeight: '800' },
  skip: { fontSize: 14, fontWeight: '600', color: '#94A3B8' },
});

export default LoginScreen;
