
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, MaterialIcon } from '../components/Native';
import { Pet } from '../types';

export interface SymptomCheckerProps {
  pet: Pet;
  onBack: () => void;
  onDiagnose: () => void;
}

const SymptomChecker: React.FC<SymptomCheckerProps> = ({ pet, onBack, onDiagnose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.navBtn}>
          <MaterialIcon name="arrow-back" size={24} color="#0F172A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Symptom Checker</Text>
        <TouchableOpacity style={styles.navBtn}>
          <MaterialIcon name="history" size={24} color="#0EA5E9" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.targetSection}>
          <Text style={styles.targetLabel}>Checking for</Text>
          <View style={styles.targetCard}>
            <Image source={{ uri: pet.avatar }} style={styles.targetAvatar} />
            <Text style={styles.targetName}>{pet.name} ({pet.breed})</Text>
            <MaterialIcon name="expand-more" size={18} color="#CBD5E1" />
          </View>
        </View>

        <View style={styles.bodyMapContainer}>
          <View style={styles.mapBg} />
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv9vE7rPmQYkux1a50HKBMihGMd0ec0tLc_ecw7cvGDU-tBo3yNLDuafIZZ7rA-Q_e3ouvErXTn4paPGiB28zSkpUrs_yhyfkCV_TUKX6R9nr9G_DAE1S0Sai6q8gEvlzTX6IdQw1RozUQeHDxYC_HUDAbJ9nYtzxITMqZe0sCN-ZgV62iLGOLLXmUs4r52wbvTTYWW4sII83UpmIMLZ62rE25UNRtZpsrWUuvugxNC8S3Xs02xEWNJMD7mItVJI48anH3Hot6jtJx' }} 
            style={styles.bodyMap}
          />
          
          <TouchableOpacity onPress={onDiagnose} style={styles.hotspot}>
            <View style={styles.tooltip}><Text style={styles.tooltipText}>Torso & Stomach</Text></View>
            <View style={styles.ping} />
            <View style={styles.dot} />
          </TouchableOpacity>

          <Text style={styles.helperText}>Tap on the body area to focus symptoms</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Common Symptoms</Text>
            <TouchableOpacity><Text style={styles.seeAll}>View all</Text></TouchableOpacity>
          </View>
          
          <View style={styles.list}>
            <SymptomItem title="Vomiting" desc="Frequent or acute stomach upset" icon="sick" color="#FFF7ED" iconColor="#F97316" onClick={onDiagnose} />
            <SymptomItem title="Itching & Scratching" desc="Skin irritation or parasites" icon="pest-control" color="#F0F9FF" iconColor="#0EA5E9" />
            <SymptomItem title="Limping" desc="Difficulty walking or joint pain" icon="pets" color="#FAF5FF" iconColor="#A855F7" />
          </View>
        </View>

        <View style={styles.promoCard}>
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>Emergency Help?</Text>
            <Text style={styles.promoDesc}>If your pet is in critical condition, connect with a vet immediately.</Text>
            <TouchableOpacity style={styles.promoBtn}>
              <MaterialIcon name="call" size={18} color="#0EA5E9" />
              <Text style={styles.promoBtnText}>Call Vet Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.promoBgIcon}><MaterialIcon name="medical-services" size={120} color="rgba(255,255,255,0.1)" /></View>
        </View>
        <View style={{ height: 160 }} />
      </ScrollView>
    </View>
  );
};

const SymptomItem = ({ title, desc, icon, color, iconColor, onClick }: any) => (
  <TouchableOpacity onPress={onClick} style={styles.item}>
    <View style={[styles.itemIcon, { backgroundColor: color }]}>
      <MaterialIcon name={icon} size={24} color={iconColor} />
    </View>
    <View style={styles.itemInfo}>
      <Text style={styles.itemName}>{title}</Text>
      <Text style={styles.itemDesc}>{desc}</Text>
    </View>
    <MaterialIcon name="chevron-right" size={20} color="#E2E8F0" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { paddingTop: 60, paddingHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC', paddingBottom: 16 },
  navBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#0F172A' },
  content: { flex: 1, paddingHorizontal: 24 },
  targetSection: { alignItems: 'center', marginVertical: 32 },
  targetLabel: { fontSize: 11, fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', marginBottom: 12 },
  targetCard: { backgroundColor: '#FFF', borderRadius: 40, paddingHorizontal: 20, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', gap: 12 },
  targetAvatar: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: '#0EA5E9' },
  targetName: { fontSize: 14, fontWeight: '800', color: '#0F172A' },
  bodyMapContainer: { height: 320, justifyContent: 'center', alignItems: 'center', marginBottom: 32, position: 'relative' },
  mapBg: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#F0F9FF', borderRadius: 48, opacity: 0.5 },
  bodyMap: { height: 260, width: 200, resizeMode: 'contain' },
  hotspot: { position: 'absolute', top: 120, left: '50%', transform: [{ translateX: -40 }], alignItems: 'center' },
  tooltip: { backgroundColor: '#1E293B', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, marginBottom: 8 },
  tooltipText: { color: '#FFF', fontSize: 10, fontWeight: '800' },
  ping: { position: 'absolute', bottom: 0, width: 24, height: 24, borderRadius: 12, backgroundColor: 'rgba(14, 165, 233, 0.4)' },
  dot: { width: 16, height: 16, borderRadius: 8, backgroundColor: '#0EA5E9', borderWidth: 3, borderColor: '#FFF' },
  helperText: { position: 'absolute', bottom: 16, fontSize: 10, color: '#94A3B8', fontWeight: '800', fontStyle: 'italic' },
  section: { marginBottom: 32 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '900', color: '#0F172A' },
  seeAll: { fontSize: 13, color: '#0EA5E9', fontWeight: '700' },
  list: { gap: 12 },
  item: { backgroundColor: '#FFF', borderRadius: 24, padding: 16, flexDirection: 'row', alignItems: 'center', gap: 16 },
  itemIcon: { width: 48, height: 48, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 15, fontWeight: '800', color: '#0F172A' },
  itemDesc: { fontSize: 11, color: '#94A3B8', fontWeight: '800' },
  promoCard: { backgroundColor: '#0EA5E9', borderRadius: 32, padding: 24, overflow: 'hidden', flexDirection: 'row', position: 'relative' },
  promoContent: { flex: 1, zIndex: 1 },
  promoTitle: { fontSize: 20, fontWeight: '900', color: '#FFF', marginBottom: 4 },
  promoDesc: { fontSize: 12, color: '#E0F2FE', lineHeight: 18, marginBottom: 16, maxWidth: '80%' },
  promoBtn: { backgroundColor: '#FFF', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 12, flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center', gap: 8 },
  promoBtnText: { color: '#0EA5E9', fontSize: 13, fontWeight: '800' },
  promoBgIcon: { position: 'absolute', right: -30, bottom: -30 },
});

export default SymptomChecker;
