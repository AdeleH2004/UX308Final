import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { handleInput, clearInput } from './Order'; // Assumes Order.js is in /src/
import ChatView from './ChatView';
import WelcomeView from './WelcomeView';
import InputBar from './InputBar';

export default function AIView() {
  const [messages, setMessages] = useState([]);
  const [inputBarText, setInputBarText] = useState('');
  const scrollViewRef = useRef(null);

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
    setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
  };

  return (
    <View style={styles.container}>
      {messages.length === 0 ? (
        <WelcomeView sendMessage={sendMessage} setInputBarText={setInputBarText} />
      ) : (
        <View style={styles.chatWrapper}>
          <TouchableOpacity style={styles.leaveBtn} onPress={() => { setMessages([]); clearInput(); }}>
            <Text style={styles.leaveText}>Leave</Text>
          </TouchableOpacity>
          <ChatView messages={messages} scrollViewRef={scrollViewRef} />
        </View>
      )}
      <InputBar onSendPressed={sendMessage} onChangeText={setInputBarText} text={inputBarText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF0F5' },
  chatWrapper: { flex: 1 },
  leaveBtn: { position: 'absolute', top: 50, right: 20, zIndex: 10, backgroundColor: '#FF1493', padding: 10, borderRadius: 20 },
  leaveText: { color: '#fff', fontWeight: 'bold' }
});