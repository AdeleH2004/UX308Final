import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import MessageBubble from './MessageBubble';

export default function ChatView({ messages, scrollViewRef }) {
  return (
    <View style={styles.container}>
      <ScrollView 
        ref={scrollViewRef} 
        style={styles.messages}
        contentContainerStyle={styles.contentContainer}
      >
        {messages && messages.map((msg, index) => (
          <MessageBubble 
            key={index} 
            direction={msg.direction} 
            text={msg.text} 
            imageUrl={msg.imageUrl} 
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messages: {
    flex: 1,
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingBottom: 20,
    paddingTop: 60,
  }
});