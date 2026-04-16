import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function InputBar({ onSendPressed, onChangeText, text }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Ask Naomi..."
        value={text}
        onChangeText={onChangeText}
        onSubmitEditing={onSendPressed}
      />
      <IconButton
        icon="send"
        iconColor="#fff"
        size={24}
        style={styles.sendButton}
        onPress={onSendPressed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  input: {
    flex: 1,
    height: 45,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#9521bc',
  },
});