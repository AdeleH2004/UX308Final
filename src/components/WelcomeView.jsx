import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function WelcomeView({ sendMessage, setInputBarText }) {
  const handleQuickAction = (choice) => {
    setInputBarText(choice);
    setTimeout(() => sendMessage(), 50); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>Naomi's Nails</Text>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg' }} 
          style={styles.welcomeImage} 
        />
        <Text style={styles.subtitle}>Flawless sets, every time.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.promptText}>Quick Select Shape:</Text>
        <View style={styles.row}>
          {['Coffin', 'Square', 'Round'].map((shape) => (
            <TouchableOpacity key={shape} style={styles.chip} onPress={() => handleQuickAction(shape)}>
              <Text style={styles.chipText}>{shape}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  hero: { height: '60%', backgroundColor: '#9521bc', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  welcomeImage: { width: '80%', height: 200, borderRadius: 15, marginVertical: 15 },
  subtitle: { fontSize: 18, color: '#f5bcdd' },
  buttonContainer: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  row: { flexDirection: 'row', gap: 10 },
  chip: { backgroundColor: '#f5bcdd', padding: 12, borderRadius: 20 },
  chipText: { color: '#9521bc', fontWeight: 'bold' }
});