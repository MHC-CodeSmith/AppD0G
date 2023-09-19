import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Joy = () => {
  // Função para lidar com os eventos de pressionar as setas
  const handleArrowPress = (direction) => {
    // Implemente a lógica para as funções desejadas aqui
    switch (direction) {
      case 'andar':
        // Lógica para "andar"
        break;
      case 'reverse':
        // Lógica para "reverse"
        break;
      case 'esquerda':
        // Lógica para "virar à esquerda"
        break;
      case 'direita':
        // Lógica para "virar à direita"
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagem "gamecross" como plano de fundo */}
      <Image
        source={require('../../assets/gamecross.png')}
        style={styles.backgroundImage}
      />

      {/* Setas para representar as funções */}
      <TouchableOpacity onPress={() => handleArrowPress('andar')}>
        {/* Adicione a seta de "andar" aqui */}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleArrowPress('reverse')}>
        {/* Adicione a seta de "reverse" aqui */}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleArrowPress('esquerda')}>
        {/* Adicione a seta de "virar à esquerda" aqui */}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleArrowPress('direita')}>
        {/* Adicione a seta de "virar à direita" aqui */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%', // Ajuste o tamanho da imagem conforme necessário
    height: '100%', // Ajuste o tamanho da imagem conforme necessário
    position: 'absolute',
  },
  // Estilos para as setas
});

export default Joy;
