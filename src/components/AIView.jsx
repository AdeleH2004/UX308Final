import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { handleInput, clearInput } from '../Order';

import ChatView from './ChatView';
import WelcomeView from './WelcomeView';
import InputBar from './InputBar';

export default function AIView() {
  const [messages, setMessages] = useState([]);
  const [inputBarText, setInputBarText] = useState('');
  const scrollViewRef = useRef(null);

  const resetChat = () => {
    setMessages([]);
    clearInput();
  };

  const sendMessage = (manualText) => {
    const textToSend = typeof manualText === 'string' ? manualText : inputBarText;
    const trimmed = textToSend.trim();
    if (trimmed.length === 0) return;

    const responses = handleInput(trimmed);
    const newMsgs = [
      { direction: 'right', text: trimmed },
      ...responses.map(msg => ({ direction: 'left', text: msg }))
    ];

    setMessages(prev => [...prev, ...newMsgs]);
    setInputBarText('');
    
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {messages.length === 0 ? (
          <WelcomeView 
            sendMessage={sendMessage} 
            setInputBarText={setInputBarText} 
          />
        ) : (
          <View style={styles.chatWrapper}>
            <TouchableOpacity style={styles.leaveBtn} onPress={resetChat}>
              <Text style={styles.leaveText}>Leave</Text>
            </TouchableOpacity>
            <ChatView messages={messages} scrollViewRef={scrollViewRef} />
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <InputBar
          onSendPressed={sendMessage}
          onChangeText={setInputBarText}
          text={inputBarText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF0F5' 
  },
  main: { 
    flex: 1 
  },
  chatWrapper: { 
    flex: 1 
  },
  footer: { 
    backgroundColor: '#fff', 
    borderTopWidth: 2, 
    borderTopColor: '#FF69B4' 
  },
  leaveBtn: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 999,
    backgroundColor: '#FF1493',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 5
  },
  leaveText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  }
});