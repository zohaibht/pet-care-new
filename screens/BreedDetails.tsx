
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, MaterialIcon, Dimensions } from '../components/Native';

const { width } = Dimensions.get('window');

const BreedDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Image 
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh5Wu5uPsCFqv9GrAqqjlrmZStvQUCvy1Xij0a2MwQSLgLwhsPWLaOdVNR83ULIE-jtbJUVZuCTzh-hcvubR40BNToxuIbhaMLi22MkrqprAARf4DpAxOrSUuoLrczGxn72oXoxPdMGR_h10NXVqBfhTTkeGQzv7Q7BR_q1O83vYTyUix3u9ZQfVs2zS1WRDLr0mLcqojLtabBhgoW7lPY1BF4r1xWXRi7slbLRl8LFXcyvdqsIS10vSRUQOKhndplQ1QkpGvdR2-C' }} 
          style={styles.heroImg}
        />
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigate(-1)} style={styles.navBtn}>
            <MaterialIcon name="arrow_back" size={24} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.navRight}>
            <TouchableOpacity style={styles.navBtn}><MaterialIcon name="share" size={24} color="#FFF" /></TouchableOpacity>
            <TouchableOpacity style={styles.navBtn}><MaterialIcon name="favorite" size={24} color="#FB7185" /></TouchableOpacity>
          </View>
        </View>
        <View style={styles.roundedTop} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.mainInfo}>
          <View style={styles.infoLeft}>
            <View style={styles.tagRow}>
              <View style={styles.typeTag}><Text style={styles.typeTagText}>DOG</Text></View>
              <View style={styles.ratingRow}>
                <MaterialIcon name="star" size={14} color="#FBBF24" />
                <Text style={styles.ratingText}>4.9 (240 reviews)</Text>
              </View>
            </View>
            <Text style={styles.breedTitle}>Golden Retriever</Text>
            <Text style={styles.traits}>Friendly • Intelligent • Devoted</Text>
          </View>
          <View style={styles.infoRight}>
            <Text style={styles.price}>$1200</Text>
            <Text style={styles.priceLabel}>avg. price</Text>
          </View>
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity style={[styles.tab, styles.tabActive]}><Text style={styles.tabTextActive}>Overview</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Traits</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>History</Text></TouchableOpacity>
        </View>

        <View style={styles.statsGrid}>
          <StatBox icon="pets" label="Size" value="Large" color="#FFF7ED" iconColor="#F97316" />
          <StatBox icon="hourglass_top" label="Lifespan" value="10-12 yrs" color="#EFF6FF" iconColor="#3B82F6" />
          <StatBox icon="sprint" label="Energy" value="High" color="#F0FDF4" iconColor="#22C55E" />
          <StatBox icon="school" label="Training" value="Easy" color="#FAF5FF" iconColor="#A855F7" />
        </View>

        <View style={styles.charSection}>
          <Text style={styles.secTitle}>Characteristics</Text>
          <View style={styles.barGroup}>
            <CharBar label="Friendliness" value={5} />
            <CharBar label="Shedding Level" value={4} />
            <CharBar label="Watchdog Ability" value={2} />
          </View>
        </View>

        <Text style={styles.secTitle}>About Golden Retriever</Text>
        <Text style={styles.desc}>
          The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterized by a gentle and affectionate nature and a striking golden coat. <Text style={styles.readMore}>Read more</Text>
        </Text>
        <View style={{ height: 160 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.actionBtn}>
          <MaterialIcon name="search" size={20} color="#FFF" />
          <Text style={styles.actionBtnText}>Find Breeders Nearby</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StatBox = ({ icon, label, value, color, iconColor }: any) => (
  <View style={styles.statBox}>
    <View style={[styles.statIcon, { backgroundColor: color }]}>
      {/* Fix: iconColor changed to color to match MaterialIcon prop expectations */}
      <MaterialIcon name={icon} size={20} color={iconColor} />
    </View>
    <View>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  </View>
);

const CharBar = ({ label, value }: any) => (
  <View style={styles.barContainer}>
    <View style={styles.barLabelRow}>
      <Text style={styles.barLabel}>{label}</Text>
      <Text style={styles.barValue}>{value}/5</Text>
    </View>
    <View style={styles.barTrack}>
      {[1, 2, 3, 4, 5].map(i => (
        <View key={i} style={[styles.barSegment, i <= value && styles.barActive]} />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  heroContainer: { height: 400, position: 'relative' },
  heroImg: { width: '100%', height: '100%' },
  topNav: { position: 'absolute', top: 60, left: 24, right: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  navBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255, 255, 255, 0.2)', justifyContent: 'center', alignItems: 'center' },
  navRight: { flexDirection: 'row', gap: 12 },
  roundedTop: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, backgroundColor: '#FFF', borderTopLeftRadius: 40, borderTopRightRadius: 40 },
  content: { flex: 1, paddingHorizontal: 24, backgroundColor: '#FFF', marginTop: -20 },
  mainInfo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 },
  infoLeft: { flex: 1 },
  tagRow: { flexDirection: 'row', gap: 12, marginBottom: 8 },
  typeTag: { backgroundColor: '#F0F9FF', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  typeTagText: { fontSize: 9, fontWeight: '900', color: '#0EA5E9' },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  ratingText: { fontSize: 10, fontWeight: '800', color: '#FBBF24' },
  breedTitle: { fontSize: 32, fontWeight: '900', color: '#0F172A' },
  traits: { fontSize: 14, color: '#64748B', marginTop: 4 },
  infoRight: { alignItems: 'flex-end' },
  price: { fontSize: 24, fontWeight: '900', color: '#0EA5E9' },
  priceLabel: { fontSize: 10, color: '#94A3B8', fontWeight: '800' },
  tabs: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#F1F5F9', marginBottom: 32 },
  tab: { flex: 1, paddingBottom: 16, alignItems: 'center' },
  tabActive: { borderBottomWidth: 2, borderBottomColor: '#0EA5E9' },
  tabText: { fontSize: 14, fontWeight: '800', color: '#94A3B8' },
  tabTextActive: { color: '#0EA5E9' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginBottom: 32 },
  statBox: { width: (width - 64) / 2, backgroundColor: '#F8FAFC', borderRadius: 20, padding: 16, flexDirection: 'row', alignItems: 'center', gap: 12 },
  statIcon: { width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  statLabel: { fontSize: 10, fontWeight: '800', color: '#94A3B8' },
  statValue: { fontSize: 14, fontWeight: '800', color: '#0F172A' },
  charSection: { backgroundColor: '#F8FAFC', borderRadius: 32, padding: 24, marginBottom: 32 },
  secTitle: { fontSize: 18, fontWeight: '900', color: '#0F172A', marginBottom: 16 },
  barGroup: { gap: 16 },
  barContainer: { gap: 8 },
  barLabelRow: { flexDirection: 'row', justifyContent: 'space-between' },
  barLabel: { fontSize: 11, fontWeight: '800', color: '#64748B' },
  barValue: { fontSize: 11, fontWeight: '900', color: '#0EA5E9' },
  barTrack: { flexDirection: 'row', gap: 6, height: 6 },
  barSegment: { flex: 1, backgroundColor: '#E2E8F0', borderRadius: 3 },
  barActive: { backgroundColor: '#0EA5E9' },
  desc: { fontSize: 14, color: '#64748B', lineHeight: 22 },
  readMore: { color: '#0EA5E9', fontWeight: '800' },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, backgroundColor: 'rgba(255, 255, 255, 0.95)', borderTopWidth: 1, borderTopColor: '#F1F5F9' },
  actionBtn: { height: 64, backgroundColor: '#0EA5E9', borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12, shadowColor: '#0EA5E9', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 20 },
  actionBtnText: { color: '#FFF', fontSize: 16, fontWeight: '800' },
});

export default BreedDetails;
