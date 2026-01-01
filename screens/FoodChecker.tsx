
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, StyleSheet, MaterialIcon } from '../components/Native';

interface FoodCheckerProps {
  onBack: () => void;
}

const FoodChecker: React.FC<FoodCheckerProps> = ({ onBack }) => {
  const [search, setSearch] = useState('Grapes');

  const categories = [
    { label: 'Fruits', emoji: '🍎', color: '#FFF7ED' },
    { label: 'Veggies', emoji: '🥕', color: '#F0FDF4' },
    { label: 'Meat', emoji: '🥩', color: '#FEF2F2' },
    { label: 'Dairy', emoji: '🧀', color: '#EFF6FF' },
    { label: 'Grains', emoji: '🌾', color: '#FEFCE8' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={onBack} style={styles.backBtn}>
              <MaterialIcon name="arrow_back" color="#FFF" size={24} />
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>Food Checker</Text>
              <Text style={styles.subtitle}>Keep your furry friend safe</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notifBtn}>
            <MaterialIcon name="notifications" color="#FFF" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBox}>
          <MaterialIcon name="search" size={20} color="#94A3B8" style={styles.searchIcon} />
          <TextInput 
            value={search}
            onChangeText={setSearch}
            placeholder="Search food..."
            style={styles.searchInput}
          />
          <MaterialIcon name="filter_list" size={20} color="#CBD5E1" />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.alertCard}>
          <View style={styles.alertIconContainer}>
            <MaterialIcon name="gpp_bad" size={24} color="#EF4444" />
          </View>
          <View style={styles.alertBody}>
            <View style={styles.alertHeader}>
              <Text style={styles.alertTitle}>Grapes</Text>
              <View style={styles.toxicTag}><Text style={styles.toxicTagText}>TOXIC</Text></View>
            </View>
            <Text style={styles.alertDesc}>
              <Text style={styles.toxicBold}>❌ EXTREMELY TOXIC!</Text> Can cause sudden kidney failure. Even a small amount can be fatal.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
          </View>
          <View style={styles.catWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.catContent}>
              {categories.map((cat, i) => (
                <TouchableOpacity key={i} style={styles.catBtn}>
                  <View style={[styles.catIcon, { backgroundColor: cat.color }]}>
                    <Text style={styles.catEmoji}>{cat.emoji}</Text>
                  </View>
                  <Text style={styles.catLabel}>{cat.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Common Foods</Text>
          <View style={styles.foodList}>
            <FoodListItem name="Bananas" desc="Safe in moderation. High sugar." status="SAFE" emoji="🍌" isSafe />
            <FoodListItem name="Chocolate" desc="Contains theobromine. Deadly." status="TOXIC" emoji="🍫" isSafe={false} />
            <FoodListItem name="Peanut Butter" desc="Xylitol-free only. Good treat." status="SAFE" emoji="🥜" isSafe />
            <FoodListItem name="Onions" desc="Damages red blood cells." status="TOXIC" emoji="🧅" isSafe={false} />
          </View>
        </View>
        
        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
};

const FoodListItem = ({ name, desc, status, emoji, isSafe }: any) => (
  <View style={styles.foodItem}>
    <View style={styles.foodEmojiContainer}><Text style={styles.foodEmoji}>{emoji}</Text></View>
    <View style={styles.foodInfo}>
      <Text style={styles.foodName}>{name}</Text>
      <Text style={styles.foodDesc}>{desc}</Text>
    </View>
    <View style={[styles.statusBadge, { backgroundColor: isSafe ? '#DCFCE7' : '#FEE2E2' }]}>
      <MaterialIcon name={isSafe ? 'check_circle' : 'warning'} size={14} color={isSafe ? '#16A34A' : '#EF4444'} />
      <Text style={[styles.statusText, { color: isSafe ? '#16A34A' : '#EF4444' }]}>{status}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  // Fixed error: changed invalid property 'px' to 'paddingHorizontal'
  header: { backgroundColor: '#0EA5E9', paddingTop: 60, paddingHorizontal: 24, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, paddingBottom: 40 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingHorizontal: 24 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  backBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255, 255, 255, 0.2)', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '800', color: '#FFF' },
  subtitle: { fontSize: 13, color: '#E0F2FE' },
  notifBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255, 255, 255, 0.2)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.3)' },
  searchBox: { height: 60, backgroundColor: '#FFF', borderRadius: 20, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginHorizontal: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10 },
  searchIcon: { marginRight: 12 },
  searchInput: { flex: 1, height: '100%', fontSize: 15, fontWeight: '600', color: '#0F172A' },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 32 },
  alertCard: { backgroundColor: '#FFF', borderRadius: 24, padding: 20, flexDirection: 'row', borderLeftWidth: 5, borderLeftColor: '#EF4444', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5, marginBottom: 32 },
  alertIconContainer: { width: 48, height: 48, backgroundColor: '#FEF2F2', borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  alertBody: { flex: 1 },
  alertHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  alertTitle: { fontSize: 18, fontWeight: '800', color: '#0F172A' },
  toxicTag: { backgroundColor: '#EF4444', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  toxicTagText: { fontSize: 9, fontWeight: '800', color: '#FFF' },
  alertDesc: { fontSize: 12, color: '#64748B', lineHeight: 18, marginTop: 4 },
  toxicBold: { color: '#EF4444', fontWeight: '800' },
  section: { marginBottom: 32 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#0F172A' },
  seeAll: { fontSize: 13, color: '#0EA5E9', fontWeight: '700' },
  catWrapper: { height: 100 },
  catContent: { gap: 16, alignItems: 'center' },
  catBtn: { alignItems: 'center' },
  catIcon: { width: 64, height: 64, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  catEmoji: { fontSize: 24 },
  catLabel: { fontSize: 10, fontWeight: '800', color: '#94A3B8' },
  foodList: { gap: 12 },
  foodItem: { backgroundColor: '#FFF', borderRadius: 24, padding: 16, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#F1F5F9' },
  foodEmojiContainer: { width: 48, height: 48, backgroundColor: '#F8FAFC', borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  foodEmoji: { fontSize: 24 },
  foodInfo: { flex: 1, marginLeft: 16 },
  foodName: { fontSize: 14, fontWeight: '800', color: '#0F172A' },
  foodDesc: { fontSize: 10, color: '#94A3B8' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10, flexDirection: 'row', alignItems: 'center', gap: 4 },
  statusText: { fontSize: 10, fontWeight: '800' },
});

export default FoodChecker;
