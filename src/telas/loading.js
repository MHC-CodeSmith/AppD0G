import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const LoadingScreen = ({ navigation }) => {
  // Simule o carregamento por um período de tempo (por exemplo, 3 segundos)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navegue para a próxima tela após o tempo de carregamento
      navigation.replace('MainScreen'); // Substitua 'MainScreen' pelo nome da sua próxima tela
    }, 3000); // Tempo de carregamento em milissegundos (3 segundos)

    return () => clearTimeout(timer); // Limpe o temporizador ao desmontar o componente
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FastImage
        source={require('./Laika.gif')} // Caminho para o GIF
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

export default LoadingScreen;
