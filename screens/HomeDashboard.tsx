
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  StyleSheet, 
  SafeAreaView,
  Dimensions 
} from '../components/Native';
import { Pet } from '../types';

const { width } = Dimensions.get('window');

interface HomeDashboardProps {
  pet: Pet;
}

const HomeDashboard = ({ pet }: HomeDashboardProps) => {
  const navigate = useNavigate();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.profileSection}>
            <View>
              <Image source={{ uri: pet.avatar }} style={styles.avatar} />
              <View style={styles.onlineBadge} />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.greeting}>Good Morning</Text>
              <Text style={styles.petName}>Hi, {pet.name}! 🐾</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Text className="material-icons-round" style={styles.icon}>notifications_none</Text>
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <Text className="material-icons-round" style={styles.searchIcon}>search</Text>
          <input 
            type="text" 
            placeholder="Search for pet care..." 
            style={webStyles.input}
          />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Daily Activity</Text>
        <View style={styles.statsRow}>
          <TouchableOpacity 
            onPress={() => navigate('/diet')} 
            style={[styles.statCard, { backgroundColor: '#FFF7ED' }]}
          >
            <View style={styles.statHeader}>
              <View style={[styles.statIconContainer, { backgroundColor: '#FFEDD5' }]}>
                <Text className="material-icons-round" style={{ color: '#F97316' }}>restaurant</Text>
              </View>
              <View style={styles.activeTag}>
                <Text style={styles.activeTagText}>TODAY</Text>
              </View>
            </View>
            <View>
              <Text style={styles.statValue}>350 <Text style={styles.statUnit}>kcal</Text></Text>
              <Text style={styles.statLabel}>Food Intake</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.statCard, { backgroundColor: '#EFF6FF' }]}>
            <View style={styles.statHeader}>
              <View style={[styles.statIconContainer, { backgroundColor: '#DBEAFE' }]}>
                <Text className="material-icons-round" style={{ color: '#3B82F6' }}>directions_walk</Text>
              </View>
              <View style={[styles.activeTag, { backgroundColor: 'rgba(59, 130, 246, 0.1)' }]}>
                <Text style={[styles.activeTagText, { color: '#3B82F6' }]}>5KM GOAL</Text>
              </View>
            </View>
            <View>
              <Text style={styles.statValue}>2.4 <Text style={styles.statUnit}>km</Text></Text>
              <Text style={styles.statLabel}>Distance</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Explore Categories</Text>
          <TouchableOpacity onPress={() => navigate('/breed-explorer')}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryRow}>
          <TouchableOpacity onPress={() => navigate('/breed-explorer')} style={styles.categoryCard}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPvqWVqTK_XnzfRAgbxlXPh5gqyK-gima82lTuSrXBEnlJoz0Qv3TJhZb2iZvaBkHKY-cvwD5qwksyMpMJsrhUEVgB_qRwW4NfiGhV81w1rupyJidhF8seA7-87JBaDXODK3dQ5xMCvsb3AOvn4W_lEHRBDe_wZxUSqHuCVBOjdLYcuBYJ2Kum20P4FX0acNzvMD3cmTZ7J2tWQxR7vHp4FuDE_yfLilqnA3ofTHYdLVhAwSfPt7Stb96B5AOA4jajOP_Dmaf8o0sy' }} 
              style={styles.categoryImage} 
            />
            <Text style={styles.categoryTitle}>Breeds</Text>
            <Text style={styles.categorySubtitle}>Discover friends</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlq7C2b_8OVbu8j7spZq-tGXpGjLcW2fy-P0EVKEBn2HrwEbBwx91vXR9FObT9AU1Wcovt1bfA77XH1p3K0m8whRZwiiLucSUadHiPq5cDHzyi3W4SGWlzLHQIC0M6uAvHULY73P3BjfXgiFe3urTtIxbf2ERlEi_GmX3ATwndNEbghKtI7MlqC5qpXFCiGtqsq3_rHA0UpKVFRySFTB8LJ_wWYTBUVTZEpvnUFKmGRG07ecgP7KCRGQq5EqBkOXAQSa54TcBS8D8r' }} 
              style={styles.categoryImage} 
            />
            <Text style={styles.categoryTitle}>Feeds</Text>
            <Text style={styles.categorySubtitle}>Shop healthy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.premiumBanner}>
          <View style={styles.premiumContent}>
            <Text style={styles.premiumTitle}>Premium Plan</Text>
            <Text style={styles.premiumDesc}>Unlimited access to professional vet consultations 24/7.</Text>
            <TouchableOpacity style={styles.premiumButton}>
              <Text style={styles.premiumButtonText}>UPGRADE NOW</Text>
            </TouchableOpacity>
          </View>
          <Text className="material-icons-round" style={styles.premiumBgIcon}>workspace_premium</Text>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    zIndex: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 4,
    borderColor: 'rgba(14, 165, 233, 0.1)',
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    backgroundColor: '#4ADE80',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  headerText: {
    marginLeft: 16,
  },
  greeting: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  petName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#94A3B8',
    fontSize: 24,
  },
  notificationDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: '#EF4444',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  searchIcon: {
    color: '#94A3B8',
    marginRight: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 24,
    height: 144,
    justifyContent: 'space-between',
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  statIconContainer: {
    padding: 10,
    borderRadius: 16,
  },
  activeTag: {
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  activeTagText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#F97316',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0F172A',
  },
  statUnit: {
    fontSize: 14,
    fontWeight: '600',
    color: '#94A3B8',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
    textTransform: 'uppercase',
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAll: {
    color: '#0EA5E9',
    fontSize: 14,
    fontWeight: '700',
  },
  categoryRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  categoryImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: '#F1F5F9',
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0F172A',
  },
  categorySubtitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
  },
  premiumBanner: {
    backgroundColor: '#0EA5E9',
    borderRadius: 40,
    padding: 24,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  premiumContent: {
    flex: 1,
    zIndex: 1,
  },
  premiumTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  premiumDesc: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 16,
    maxWidth: '80%',
  },
  premiumButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  premiumButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  premiumBgIcon: {
    position: 'absolute',
    right: -24,
    bottom: -24,
    fontSize: 120,
    color: '#FFFFFF',
    opacity: 0.1,
    transform: [{ rotate: '15deg' }],
  },
});

const webStyles = {
  input: {
    flex: 1,
    border: 'none',
    background: 'none',
    padding: '16px 0',
    outline: 'none',
    fontSize: '14px',
    color: '#0F172A',
    fontWeight: '500',
  }
} as any;

export default HomeDashboard;
