import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function MessageBubble({ direction, text, imageUrl }) {
  const isLeft = direction === 'left';

  return (
    <View style={[styles.wrapper, isLeft ? styles.wrapperLeft : styles.wrapperRight]}>
      <View style={[styles.bubble, isLeft ? styles.bubbleLeft : styles.bubbleRight]}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        ) : (
          <Text style={[styles.text, isLeft ? styles.textLeft : styles.textRight]}>
            {text}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: 12,
    width: '100%',
  },
  wrapperLeft: { justifyContent: 'flex-start' },
  wrapperRight: { justifyContent: 'flex-end' },
  bubble: {
    maxWidth: '75%',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 20,
    elevation: 2,
  },
  bubbleLeft: {
    backgroundColor: '#FFF0F5',
    borderBottomLeftRadius: 2,
    borderWidth: 1,
    borderColor: '#FFB6C1',
  },
  bubbleRight: {
    backgroundColor: '#FF1493',
    borderBottomRightRadius: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  textLeft: { color: '#C71585' },
  textRight: { color: '#fff' },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
  }
});