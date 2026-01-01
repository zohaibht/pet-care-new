
import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  StyleSheet, 
  SafeAreaView,
  MaterialIcon
} from '../components/Native';
import { Pet } from '../types';

export interface DietDashboardProps {
  pet: Pet;
  onBack: () => void;
  onCheckFood: () => void;
}

const DietDashboard: React.FC<DietDashboardProps> = ({ pet, onBack, onCheckFood }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <MaterialIcon name="arrow_back" size={24} color="#0F172A" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Diet Dashboard</Text>
            <Text style={styles.headerSubtitle}>{pet.name}'s Nutrition Plan</Text>
          </View>
        </View>
        <Image source={{ uri: pet.avatar }} style={styles.profilePic} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.mainCard}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardLabel}>Daily Calories</Text>
              <Text style={styles.calorieValue}>840 <Text style={styles.calorieMax}>/ 1200 kcal</Text></Text>
            </View>
            <View style={styles.progressCircle}>
               <Text style={styles.progressText}>70%</Text>
            </View>
          </View>
          <View style={styles.waterTracker}>
            <View style={styles.waterLabelRow}>
              <MaterialIcon name="water_drop" color="#FFFFFF" size={18} style={styles.waterIcon} />
              <Text style={styles.waterLabel}>Water Intake</Text>
            </View>
            <Text style={styles.waterValue}>650ml <Text style={styles.waterMax}>/ 800ml</Text></Text>
          </View>
        </View>

        <TouchableOpacity onPress={onCheckFood} style={styles.safeFoodButton}>
          <View style={styles.safeFoodLeft}>
            <View style={styles.safeFoodIconContainer}>
              <MaterialIcon name="verified_user" size={24} color="#16A34A" />
            </View>
            <View>
              <Text style={styles.safeFoodTitle}>Check Safe Foods</Text>
              <Text style={styles.safeFoodDesc}>Verify before feeding your pet</Text>
            </View>
          </View>
          <MaterialIcon name="chevron_right" size={24} color="#E2E8F0" />
        </TouchableOpacity>

        <View style={styles.mealSection}>
          <View style={styles.mealHeader}>
            <Text style={styles.sectionTitle}>Today's Meal Plan</Text>
            <TouchableOpacity><Text style={styles.editLink}>Edit Plan</Text></TouchableOpacity>
          </View>

          <MealItem title="Chicken & Rice Bowl" time="8:00 AM" type="Breakfast" weight="150g" kcal="320" completed image="https://lh3.googleusercontent.com/aida-public/AB6AXuAsfpgIy3zrKaeHgoXWeVkVKP_4G_k_bWusKs9KEGT-yYgrWBKHGHZrmheyHHHH4GzCbnketdCL6_axMqFKPcxz7eZG0pi6dXL6bAcaNbVorfQ-PBvT-ekXSJJkK1aqhs-lFHYtioDH9jZwA2DvUVtDZVH8m2Tz1RbO4xBBDvOzGgd5qDNdfZz5tq2MHxc6N0_O95o6IRHAc-y-XUNG9dBTPNtpfP7CXt_mB2lZuCD473srGemixcKr9CEM-ZKDo9mceLdnrWDeu3nc" />
          <MealItem title="Salmon Treats & Veg" time="1:00 PM" type="Lunch" weight="80g" kcal="150" active image="https://lh3.googleusercontent.com/aida-public/AB6AXuBgf1nggOBTshmZdvPAxCJg-P3W3M12aBbk_YeL-ZMOvXaIa6T8B2Y3M3-ozLiNF0TJTwfX_4RF8rRKTLSxnFAiIkQhYtYVHl7tpvfRynxCSetS7pBWKMN09ud4V0Z37BUedwEoJtuh4VVNidfVOCTWqNxuF8whrd7-pohTIDbkd8UfGf9CniofCMyeifUlRjUhqkIE9iXSP-1N7s9obfGCKGCNolQ1nhsu_Pfm4B8oD2W6nXrke6Fv4aWKoACE3B6PQl0AvP645Sg1" />
          <MealItem title="Premium Kibble" time="6:30 PM" type="Dinner" weight="200g" kcal="370" faded image="https://lh3.googleusercontent.com/aida-public/AB6AXuD4LXgrwRuEpjeXSAfd6CGpJlHq7Vn714fPhb6SrvdDZv8ppUx9TyAF_RLmerrnmqOA_hb1QJ9FXu_1_kowVKZrmjvz93vw-_LO7cWXI4l1vaghlCe-IK0kR2Kk_Ql-rPXh8Xsh8Pk-ms9DehrJ0ok9E5h5hNyDr5jUOWeIUK53O0XW1StfNmxYud3zZV6qtW3kgJeunfOVqMAFsjzRDaE0DW7jle9tzXarF3J5ssQ0jt0oAAXxJVV4f0CwO42d1dH713fVZpv08Fn4" />
        </View>
        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const MealItem = ({ title, time, type, weight, kcal, completed, faded, active, image }: any) => (
  <View style={[styles.mealItem, faded && { opacity: 0.5 }]}>
    <View style={styles.mealImageContainer}>
      <Image source={{ uri: image }} style={styles.mealImage} />
      {completed && <View style={styles.completedOverlay}><MaterialIcon name="done" size={20} color="#FFFFFF" /></View>}
    </View>
    <View style={styles.mealInfo}>
      <View style={styles.mealRow}>
        <Text style={[styles.mealType, { color: active ? '#F97316' : '#0EA5E9' }]}>{type}</Text>
        <Text style={styles.mealTime}>{time}</Text>
      </View>
      <Text style={styles.mealTitle}>{title}</Text>
      <View style={styles.mealStats}>
        <Text style={styles.mealStatText}>⚖️ {weight}</Text>
        <Text style={styles.mealStatText}>🔥 {kcal} kcal</Text>
      </View>
    </View>
    <View style={styles.mealAction}>
      {completed ? <MaterialIcon name="check_circle" color="#0EA5E9" size={24} /> : <TouchableOpacity style={styles.playButton}><MaterialIcon name="play_arrow" color="#E2E8F0" size={20} /></TouchableOpacity>}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { paddingHorizontal: 24, paddingTop: 10, paddingBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  backButton: { width: 44, height: 44, backgroundColor: '#FFFFFF', borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginRight: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 5 },
  headerTitle: { fontSize: 20, fontWeight: '800', color: '#0F172A' },
  headerSubtitle: { fontSize: 12, color: '#94A3B8', fontWeight: '600' },
  profilePic: { width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: '#0EA5E9' },
  content: { flex: 1, paddingHorizontal: 24 },
  mainCard: { backgroundColor: '#0EA5E9', borderRadius: 32, padding: 24, marginBottom: 24, shadowColor: '#0EA5E9', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 20 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 },
  cardLabel: { color: 'rgba(255, 255, 255, 0.8)', fontSize: 14, fontWeight: '600', marginBottom: 4 },
  calorieValue: { color: '#FFFFFF', fontSize: 36, fontWeight: '900' },
  calorieMax: { fontSize: 16, color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600' },
  progressCircle: { width: 64, height: 64, borderRadius: 32, borderWidth: 4, borderColor: 'rgba(255, 255, 255, 0.2)', justifyContent: 'center', alignItems: 'center' },
  progressText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  waterTracker: { backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 20, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  waterLabelRow: { flexDirection: 'row', alignItems: 'center' },
  waterIcon: { marginRight: 8 },
  waterLabel: { color: '#FFFFFF', fontSize: 13, fontWeight: '700' },
  waterValue: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  waterMax: { color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600' },
  safeFoodButton: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#F1F5F9', marginBottom: 32 },
  safeFoodLeft: { flexDirection: 'row', alignItems: 'center' },
  safeFoodIconContainer: { width: 48, height: 48, backgroundColor: '#DCFCE7', borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  safeFoodTitle: { fontSize: 16, fontWeight: '800', color: '#0F172A' },
  safeFoodDesc: { fontSize: 11, color: '#94A3B8', fontWeight: '600' },
  mealSection: { marginBottom: 40 },
  mealHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#0F172A' },
  editLink: { color: '#0EA5E9', fontSize: 13, fontWeight: '700' },
  mealItem: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 5 },
  mealImageContainer: { width: 64, height: 64, borderRadius: 16, overflow: 'hidden', backgroundColor: '#F1F5F9' },
  mealImage: { width: '100%', height: '100%' },
  completedOverlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' },
  mealInfo: { flex: 1, marginLeft: 16 },
  mealRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 },
  mealType: { fontSize: 9, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.5 },
  mealTime: { fontSize: 10, color: '#94A3B8', fontWeight: '700' },
  mealTitle: { fontSize: 14, fontWeight: '800', color: '#0F172A', marginBottom: 4 },
  mealStats: { flexDirection: 'row', gap: 12 },
  mealStatText: { fontSize: 10, color: '#94A3B8', fontWeight: '700' },
  mealAction: { marginLeft: 8 },
  playButton: { width: 32, height: 32, borderRadius: 16, borderWidth: 1, borderColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center' },
});

export default DietDashboard;
