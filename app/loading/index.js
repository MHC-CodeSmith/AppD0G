import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

export default function Page(){
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../assets/Laika.gif')} // Caminho para o GIF
        resizeMode={FastImage.resizeMode.cover}
        style={styles.gifBackground}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
