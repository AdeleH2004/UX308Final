import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PaperProvider } from "react-native-paper";
import AIView from "./src/AIView";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <AIView />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});