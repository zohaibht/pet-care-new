
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, StyleSheet, MaterialIcon } from '../components/Native';

const BreedExplorer: React.FC = () => {
  const navigate = useNavigate();

  const breeds = [
    { id: 'golden-retriever', name: 'Golden Retriever', size: 'Large', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5iy5Qp6eECNWsHEBG7kAsggYeoTbvh2LeV0D21JrtQmbp34oM5uSv7ZN2VciA6JyXymAClVqJ-70BCZ6PHRuSftJzb_T_mDDgZNIiXwbepQYh2g-oOMyGzAhOAVZ58D_8XZJVjh3VCKd7CVyRYJZPuY2YhDH5SOjnFpySYniT7KyL1hVq5BOkC1ecAVYE2JiIYu4jTvA4zls3tY0kALOL-80N-5_Dz5M4SMk7cZmiE8xAGQoKwO4XDU1so863uPQvWek_ZXJucKDf', desc: 'Friendly, intelligent, and devoted dogs. Great for families.', rating: 4.9, tag: 'Active' },
    { id: 'beagle', name: 'Beagle', size: 'Medium', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkEeM1oWroxtusYtKMXZ65Dasxd1wdbnJOsuqUDj_4WAG5CRKnnUy6e1yaupLnoBJjtmH7MxCMuwyDM_9cBe9joVOrU54juTpnzr7NI_hqH9U91mBdIK3fTClxA0TZtZK_yAFWRUun_4VlD2Shz6HMCt0KDANiaxPNhDpvRuVGktXmEQW-HWXC7ptpOXB1A31OdL-SPI0hPqqghXcb_DCkb5VLUmmUrS126nF1QL3os7VkY9HLlYNB1mSnuwOPbyl0StgGQICMsg9j', desc: 'Curious, merry, and friendly. Known for their great sense of smell.', rating: 4.7, tag: 'Hunting' },
    { id: 'corgi', name: 'Pembroke Corgi', size: 'Small', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpPhawmH0qcqfUBrDERvOqt3udLDKlKYK0o6n19JqJxhEzbszWHIrXFjIUFF2bW3Rj4HG-hEfSKjjlNj0ibUcCHgiULxxtOV8SWeEsWUpoZRWTQ72e0FORf_yZtUkNSI1ElrWq4gtR66cNg4OKlAeZDhoDClCRYxfV4PcuM5Xw1b0rIma8FXaiEAFjG0hoLdoXtPe8Bt6Oyi0XN-CLSoZH8BvNBIf53hZQGlz2gHIDHuWEedHizNQqo-QNk-z87njpO1Rmlj7TUDpz', desc: 'Affectionate, smart, and alert. Famous for their short legs.', rating: 4.8, tag: 'Indoor' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.label}>Find a friend</Text>
          <Text style={styles.title}>Breed Explorer</Text>
        </View>
        <TouchableOpacity style={styles.profileBtn}>
          <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbmbFN3W7yzKPlCJzcF3Z8LCsFDuBj3Rt9_opib6rYD00SCCOX2TtfOHUStxZ_OejkGebnkmZTOF4-qc9iIafo6hIVEPhWiWIjXb-GlUgG7ynTPhg8u90yMeSKV3x6fJztV3wy2dBMzHsW9UG19O688RYPCUpGDDY7ZxhYjue3JgdHONC6SR0WWrFHqNOKz270StLQx9qYpmvYSttlhJouh-V0j1xX3jcnoZwVOViqHbJnfNYEfACYQX1FGZqDu69AWSokJKuqMPHs' }} style={styles.profileImg} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <MaterialIcon name="search" size={20} color="#94A3B8" style={styles.searchIcon} />
          <TextInput placeholder="Search breeds..." style={styles.searchInput} />
          <TouchableOpacity style={styles.filterBtn}><MaterialIcon name="tune" size={16} color="#0EA5E9" /></TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll} contentContainerStyle={styles.filterContent}>
        <TouchableOpacity style={[styles.tab, styles.tabActive]}><Text style={styles.tabTextActive}>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Small</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Medium</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Large</Text></TouchableOpacity>
      </ScrollView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Popular Breeds</Text>
        <View style={styles.list}>
          {breeds.map(breed => (
            <TouchableOpacity key={breed.id} onPress={() => navigate(`/breed/${breed.id}`)} style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image source={{ uri: breed.image }} style={styles.cardImg} />
                <View style={styles.favBadge}><MaterialIcon name="favorite" size={12} color="#EF4444" /></View>
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardName}>{breed.name}</Text>
                  <View style={styles.sizeTag}><Text style={styles.sizeTagText}>{breed.size}</Text></View>
                </View>
                <Text style={styles.cardDesc} numberOfLines={2}>{breed.desc}</Text>
                <View style={styles.cardStats}>
                  <View style={styles.statRow}><MaterialIcon name="star" size={14} color="#FBBF24" /><Text style={styles.statText}>{breed.rating}</Text></View>
                  <View style={styles.statRow}><MaterialIcon name="speed" size={14} color="#0EA5E9" /><Text style={styles.statLabel}>{breed.tag}</Text></View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { paddingTop: 60, px: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, marginBottom: 24 },
  label: { fontSize: 13, fontWeight: '800', color: '#94A3B8' },
  title: { fontSize: 28, fontWeight: '900', color: '#0F172A' },
  profileBtn: { width: 44, height: 44, borderRadius: 22, overflow: 'hidden', borderWidth: 1, borderColor: '#E2E8F0' },
  profileImg: { width: '100%', height: '100%' },
  searchContainer: { paddingHorizontal: 24, marginBottom: 24 },
  searchBox: { height: 60, backgroundColor: '#FFF', borderRadius: 20, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
  searchIcon: { marginRight: 12 },
  searchInput: { flex: 1, fontSize: 15, fontWeight: '700', color: '#0F172A' },
  filterBtn: { padding: 6, backgroundColor: '#F0F9FF', borderRadius: 10 },
  filterScroll: { maxHeight: 50, marginBottom: 24 },
  filterContent: { paddingHorizontal: 24, gap: 12 },
  tab: { paddingHorizontal: 24, height: 44, backgroundColor: '#FFF', borderRadius: 16, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5 },
  tabActive: { backgroundColor: '#0EA5E9', shadowColor: '#0EA5E9', shadowOpacity: 0.3 },
  tabText: { fontSize: 14, fontWeight: '800', color: '#94A3B8' },
  tabTextActive: { color: '#FFF' },
  content: { flex: 1, paddingHorizontal: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '900', color: '#0F172A', marginBottom: 16 },
  list: { gap: 16 },
  card: { backgroundColor: '#FFF', borderRadius: 24, padding: 12, flexDirection: 'row', gap: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
  cardImgWrapper: { width: 100, height: 100, borderRadius: 20, overflow: 'hidden' },
  cardImg: { width: '100%', height: '100%' },
  favBadge: { position: 'absolute', top: 8, right: 8, width: 24, height: 24, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  cardInfo: { flex: 1, justifyContent: 'center' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  cardName: { fontSize: 15, fontWeight: '800', color: '#0F172A' },
  sizeTag: { backgroundColor: '#F0F9FF', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  sizeTagText: { fontSize: 9, fontWeight: '800', color: '#0EA5E9' },
  cardDesc: { fontSize: 11, color: '#94A3B8', lineHeight: 16 },
  cardStats: { flexDirection: 'row', gap: 16, marginTop: 12 },
  statRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  statText: { fontSize: 11, fontWeight: '900', color: '#0F172A' },
  statLabel: { fontSize: 10, fontWeight: '800', color: '#94A3B8' },
});

export default BreedExplorer;
