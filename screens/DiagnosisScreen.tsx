
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, MaterialIcon } from '../components/Native';

interface DiagnosisScreenProps {
  onBack: () => void;
}

const DiagnosisScreen: React.FC<DiagnosisScreenProps> = ({ onBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <MaterialIcon name="arrow_back" size={24} color="#0F172A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Diagnosis & First Aid</Text>
        <TouchableOpacity style={styles.backBtn}>
          <MaterialIcon name="share" size={24} color="#0F172A" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.summaryCard}>
          <View style={styles.detectedIcon}>
            <MaterialIcon name="sick" size={32} color="#EF4444" />
          </View>
          <View>
            <Text style={styles.label}>Detected Symptom</Text>
            <Text style={styles.detectedTitle}>Vomiting</Text>
            <Text style={styles.severity}>Severity: <Text style={styles.sevMed}>Moderate</Text></Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcon name="analytics" size={20} color="#0EA5E9" style={styles.secIcon} />
            <Text style={styles.sectionTitle}>Possible Causes</Text>
          </View>
          <View style={styles.causesList}>
            <View style={styles.causeCard}>
              <View style={styles.causeHeader}>
                <Text style={styles.causeTitle}>Food Poisoning</Text>
                <View style={styles.probTag}><Text style={styles.probText}>High Prob.</Text></View>
              </View>
              <Text style={styles.causeDesc}>Ingestion of spoiled food, chocolate, or toxic plants.</Text>
              <View style={styles.causeFooter}>
                <MaterialIcon name="info" size={14} color="#94A3B8" />
                <Text style={styles.footerInfo}>Common in dogs who scavenge.</Text>
              </View>
            </View>

            <View style={[styles.causeCard, styles.causeMed]}>
              <View style={styles.causeHeader}>
                <Text style={styles.causeTitle}>Dietary Indiscretion</Text>
                <View style={[styles.probTag, styles.probMed]}><Text style={[styles.probText, styles.probTextMed]}>Med Prob.</Text></View>
              </View>
              <Text style={styles.causeDesc}>Eating garbage or foreign objects.</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcon name="medical_services" size={20} color="#F97316" style={styles.secIcon} />
            <Text style={styles.sectionTitle}>Immediate Care</Text>
          </View>
          <View style={styles.careContainer}>
            <View style={styles.careHeader}>
              <Text style={styles.careHeaderText}>Steps for Home Relief</Text>
            </View>
            <View style={styles.careBody}>
              <CareStep num={1} title="Withhold Food" desc="Stop feeding for 12-24 hours to let the stomach settle." isLast={false} />
              <CareStep num={2} title="Check Hydration" desc="Check gums. If dry, seek immediate vet attention." isLast={false} />
              <CareStep num={3} title="Bland Diet" desc="Reintroduce boiled chicken and rice in small portions." isLast />
            </View>
            <View style={styles.careWarning}>
              <MaterialIcon name="warning" size={14} color="#EF4444" style={styles.warnIcon} />
              <Text style={styles.warningText}>If blood is present or symptoms persist for 24h, call a vet.</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 160 }} />
      </ScrollView>

      <View style={styles.stickyFooter}>
        <TouchableOpacity style={styles.emergencyBtn}>
          <MaterialIcon name="phone_in_talk" size={20} color="#FFF" />
          <Text style={styles.emergencyBtnText}>Call Vet Emergency</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clinicLink}>
          <Text style={styles.clinicLinkText}>Find Nearest Clinic</Text>
          <MaterialIcon name="chevron_right" size={18} color="#0EA5E9" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CareStep = ({ num, title, desc, isLast }: any) => (
  <View style={styles.stepRow}>
    <View style={styles.stepIndicator}>
      <View style={styles.stepCircle}><Text style={styles.stepNum}>{num}</Text></View>
      {!isLast && <View style={styles.stepLine} />}
    </View>
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>{title}</Text>
      <Text style={styles.stepDesc}>{desc}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { paddingTop: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(248, 250, 252, 0.8)', paddingBottom: 16, paddingHorizontal: 24 },
  backBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5 },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#0F172A' },
  content: { flex: 1, paddingHorizontal: 24 },
  summaryCard: { backgroundColor: '#FFF', borderRadius: 32, padding: 24, flexDirection: 'row', alignItems: 'center', gap: 20, marginVertical: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
  detectedIcon: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#FEF2F2', justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 10, fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: 1 },
  detectedTitle: { fontSize: 24, fontWeight: '900', color: '#0F172A' },
  severity: { fontSize: 12, fontWeight: '700', color: '#64748B', marginTop: 4 },
  sevMed: { color: '#F97316' },
  section: { marginBottom: 32 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  secIcon: { marginRight: 8 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#0F172A' },
  causesList: { gap: 16 },
  causeCard: { backgroundColor: '#FFF', borderRadius: 24, padding: 16, borderLeftWidth: 4, borderLeftColor: '#0EA5E9', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5 },
  causeHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  causeTitle: { fontSize: 16, fontWeight: '800', color: '#0F172A' },
  probTag: { backgroundColor: '#E0F2FE', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  probText: { fontSize: 9, fontWeight: '800', color: '#0EA5E9' },
  causeDesc: { fontSize: 11, color: '#64748B', lineHeight: 16 },
  causeFooter: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 12 },
  footerInfo: { fontSize: 10, fontWeight: '700', color: '#94A3B8' },
  causeMed: { opacity: 0.8, borderLeftColor: '#E2E8F0' },
  probMed: { backgroundColor: '#F1F5F9' },
  probTextMed: { color: '#94A3B8' },
  careContainer: { backgroundColor: '#FFF', borderRadius: 32, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
  careHeader: { backgroundColor: '#FFF7ED', padding: 16, borderBottomWidth: 1, borderBottomColor: '#FFEDD5' },
  careHeaderText: { fontSize: 11, fontWeight: '800', color: '#F97316', textTransform: 'uppercase' },
  careBody: { padding: 24, gap: 32 },
  stepRow: { flexDirection: 'row', gap: 16 },
  stepIndicator: { alignItems: 'center' },
  stepCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#F97316', justifyContent: 'center', alignItems: 'center' },
  stepNum: { color: '#FFF', fontSize: 16, fontWeight: '900' },
  stepLine: { width: 2, flex: 1, backgroundColor: '#F1F5F9', marginTop: 8 },
  stepContent: { flex: 1 },
  stepTitle: { fontSize: 15, fontWeight: '800', color: '#0F172A', marginBottom: 4 },
  stepDesc: { fontSize: 11, color: '#64748B', lineHeight: 16 },
  careWarning: { backgroundColor: '#FEF2F2', padding: 16, flexDirection: 'row', gap: 12 },
  warnIcon: { marginTop: 2 },
  warningText: { flex: 1, fontSize: 10, color: '#EF4444', fontWeight: '800', lineHeight: 14 },
  stickyFooter: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, backgroundColor: 'rgba(248, 250, 252, 0.95)', borderTopWidth: 1, borderTopColor: '#F1F5F9', alignItems: 'center', gap: 12 },
  emergencyBtn: { width: '100%', height: 60, backgroundColor: '#EF4444', borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12 },
  emergencyBtnText: { color: '#FFF', fontSize: 16, fontWeight: '800' },
  clinicLink: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  clinicLinkText: { color: '#0EA5E9', fontSize: 14, fontWeight: '700' },
});

export default DiagnosisScreen;
