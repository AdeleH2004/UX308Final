import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import NailsHero from '../pexels-jaki-kari-jelevi-2156985586-35491156.jpg';

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
          source={NailsHero} 
          style={styles.welcomeImage} 
        />

        <Text style={styles.subtitle}>Flawless sets, every time.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.promptText}>Quick Select Shape:</Text>
        <View style={styles.row}>
          {['Coffin', 'Square', 'Round'].map((shape) => (
            <TouchableOpacity 
              key={shape} 
              style={styles.chip} 
              onPress={() => handleQuickAction(shape)}
            >
              <Text style={styles.chipText}>{shape}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.instruction}>Type "Hi" in the prompt below to begin.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  hero: {
    height: '60%', // Takes up top half+ of screen
    backgroundColor: '#9521bc', // Deep Purple
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 20,
  },
  title: { 
    fontSize: 36, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 15 
  },
  welcomeImage: { 
    width: '85%', 
    height: 180, 
    borderRadius: 15, 
    borderWidth: 3, 
    borderColor: '#f5bcdd', // Soft Pink border
    marginBottom: 15
  },
  subtitle: { 
    fontSize: 18, 
    color: '#f5bcdd', 
    textAlign: 'center',
    fontWeight: '500'
  },
  buttonContainer: { 
    flex: 1, 
    padding: 20, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  promptText: {
    fontSize: 16,
    color: '#9521bc',
    fontWeight: '600',
    marginBottom: 12
  },
  row: { 
    flexDirection: 'row', 
    gap: 8,
    marginBottom: 20
  },
  chip: {
    backgroundColor: '#f5bcdd',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#9521bc',
  },
  chipText: { 
    color: '#9521bc', 
    fontWeight: 'bold' 
  },
  instruction: { 
    color: '#bbb', 
    fontSize: 13,
    fontStyle: 'italic'
  }
});