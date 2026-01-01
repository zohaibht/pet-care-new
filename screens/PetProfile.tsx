
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet, MaterialIcon } from '../components/Native';
import { Pet } from '../types';

interface PetProfileProps {
  pet: Pet;
  onSave: (pet: Pet) => void;
}

const PetProfile: React.FC<PetProfileProps> = ({ pet, onSave }) => {
  const navigate = useNavigate();
  const [editedPet, setEditedPet] = useState<Pet>(pet);

  const handleSave = () => {
    onSave(editedPet);
    navigate('/home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate(-1)} style={styles.backBtn}>
          <MaterialIcon name="arrow_back" size={24} color="#0F172A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pet Profile</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarSection}>
          <TouchableOpacity style={styles.avatarWrapper}>
            <Image source={{ uri: editedPet.avatar }} style={styles.avatar} />
            <View style={styles.cameraOverlay}>
              <MaterialIcon name="camera_alt" size={24} color="#FFF" />
            </View>
          </TouchableOpacity>
          <Text style={styles.uploadText}>Upload Photo</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pet Name</Text>
            <View style={styles.inputWrapper}>
              <TextInput 
                value={editedPet.name}
                onChangeText={(t) => setEditedPet({ ...editedPet, name: t })}
                placeholder="e.g. Charlie"
                style={styles.input}
              />
              <MaterialIcon name="edit" size={20} color="#CBD5E1" />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pet Type</Text>
            <View style={styles.row}>
              <TouchableOpacity 
                onPress={() => setEditedPet({ ...editedPet, type: 'Dog' })}
                style={[styles.typeBtn, editedPet.type === 'Dog' && styles.typeBtnActive]}
              >
                <MaterialIcon name="pets" size={20} color={editedPet.type === 'Dog' ? '#0EA5E9' : '#94A3B8'} />
                <Text style={[styles.typeBtnText, editedPet.type === 'Dog' && styles.typeBtnTextActive]}>Dog</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => setEditedPet({ ...editedPet, type: 'Cat' })}
                style={[styles.typeBtn, editedPet.type === 'Cat' && styles.typeBtnActive]}
              >
                <MaterialIcon name="catching_pokemon" size={20} color={editedPet.type === 'Cat' ? '#0EA5E9' : '#94A3B8'} />
                <Text style={[styles.typeBtnText, editedPet.type === 'Cat' && styles.typeBtnTextActive]}>Cat</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Breed</Text>
            <View style={styles.inputWrapper}>
              <TextInput 
                value={editedPet.breed}
                onChangeText={(t) => setEditedPet({ ...editedPet, breed: t })}
                placeholder="e.g. Beagle"
                style={styles.input}
              />
              <MaterialIcon name="search" size={20} color="#CBD5E1" />
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1 }]}>
              <Text style={styles.label}>Age (Years)</Text>
              <TextInput 
                value={editedPet.age.toString()}
                onChangeText={(t) => setEditedPet({ ...editedPet, age: parseInt(t) || 0 })}
                keyboardType="numeric"
                style={styles.inputSmall}
              />
            </View>
            <View style={[styles.inputGroup, { flex: 1 }]}>
              <Text style={styles.label}>Weight (kg)</Text>
              <TextInput 
                value={editedPet.weight.toString()}
                onChangeText={(t) => setEditedPet({ ...editedPet, weight: parseFloat(t) || 0 })}
                keyboardType="numeric"
                style={styles.inputSmall}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.row}>
              <TouchableOpacity 
                onPress={() => setEditedPet({ ...editedPet, gender: 'Male' })}
                style={[styles.genderBtn, editedPet.gender === 'Male' && styles.genderBtnMale]}
              >
                <MaterialIcon name="male" size={20} color={editedPet.gender === 'Male' ? '#FFF' : '#94A3B8'} />
                <Text style={[styles.genderText, editedPet.gender === 'Male' && styles.genderTextActive]}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => setEditedPet({ ...editedPet, gender: 'Female' })}
                style={[styles.genderBtn, editedPet.gender === 'Female' && styles.genderBtnFemale]}
              >
                <MaterialIcon name="female" size={20} color={editedPet.gender === 'Female' ? '#FFF' : '#94A3B8'} />
                <Text style={[styles.genderText, editedPet.gender === 'Female' && styles.genderTextActive]}>Female</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ height: 160 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
          <Text style={styles.saveText}>Save Profile</Text>
          <MaterialIcon name="check_circle" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  // Fix: Removed duplicate pb/paddingBottom keys in header
  header: { paddingTop: 60, paddingHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16 },
  backBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5 },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#0F172A' },
  content: { flex: 1, paddingHorizontal: 24 },
  avatarSection: { alignItems: 'center', marginVertical: 32 },
  avatarWrapper: { width: 128, height: 128, borderRadius: 64, position: 'relative', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 20 },
  avatar: { width: '100%', height: '100%', borderRadius: 64, borderWidth: 4, borderColor: '#FFF' },
  cameraOverlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 64, justifyContent: 'center', alignItems: 'center' },
  uploadText: { marginTop: 16, fontSize: 14, fontWeight: '800', color: '#0EA5E9' },
  form: { gap: 24 },
  inputGroup: { gap: 8 },
  label: { fontSize: 13, fontWeight: '800', color: '#94A3B8', marginLeft: 4 },
  inputWrapper: { height: 64, backgroundColor: '#F8FAFC', borderRadius: 20, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, borderWidth: 1, borderColor: '#F1F5F9' },
  input: { flex: 1, fontSize: 16, fontWeight: '700', color: '#0F172A' },
  inputSmall: { height: 64, backgroundColor: '#F8FAFC', borderRadius: 20, paddingHorizontal: 16, textAlign: 'center', fontSize: 16, fontWeight: '800', color: '#0F172A', borderWidth: 1, borderColor: '#F1F5F9' },
  row: { flexDirection: 'row', gap: 16 },
  // Fix: Removed duplicate borderColor and corrected invalid borderWeight key in typeBtn
  typeBtn: { flex: 1, height: 64, borderRadius: 20, backgroundColor: '#F8FAFC', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8, borderWidth: 1, borderColor: '#F1F5F9' },
  typeBtnActive: { borderColor: '#0EA5E9', backgroundColor: '#F0F9FF' },
  typeBtnText: { fontSize: 14, fontWeight: '800', color: '#94A3B8' },
  typeBtnTextActive: { color: '#0EA5E9' },
  genderBtn: { flex: 1, height: 64, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8, backgroundColor: '#F8FAFC' },
  genderBtnMale: { backgroundColor: '#0EA5E9', shadowColor: '#0EA5E9', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 15 },
  genderBtnFemale: { backgroundColor: '#EC4899', shadowColor: '#EC4899', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 15 },
  genderText: { fontSize: 14, fontWeight: '800', color: '#94A3B8' },
  genderTextActive: { color: '#FFF' },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, backgroundColor: 'rgba(248, 250, 252, 0.95)' },
  saveBtn: { height: 64, backgroundColor: '#0EA5E9', borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12, shadowColor: '#0EA5E9', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 20 },
  saveText: { color: '#FFF', fontSize: 18, fontWeight: '800' },
});

export default PetProfile;
