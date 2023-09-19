import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Joy from './joy';
const App = () => {
  const [selectedAction, setSelectedAction] = useState(-1);

  const handleIconPress = (action) => {
    let value = -1;
    switch (action) {
      case 'comandos':
        value = 0;
        break;
      case 'sentar':
        value = 1;
        break;
      case 'dancar':
        value = 2;
        break;
      case 'deitar':
        value = 3;
        break;
      case 'atacar':
        value = 4;
        break;
      case 'latir':
        value = 5;
        break;
      default:
        value = -1;
    }
    setSelectedAction(value);
  };

  return (
    <View style={{ flex: 1 }}>

        {/* Ícones e Botões */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => handleIconPress('comandos')}>
            <View style={styles.iconWrapper}>
              <Image
                source={require('../../assets/moldura.jpg')} // Caminho relativo corrigido
                style={styles.frame}
              />
              <Image
                source={require('../../assets/comandos.png')} // Caminho relativo corrigido
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleIconPress('sentar')}>
            <View style={styles.iconWrapper}>
              <Image
                source={require('../../assets/moldura.jpg')} // Caminho relativo corrigido
                style={styles.frame}
              />
              <Image
                source={require('../../assets/sentar.png')} // Caminho relativo corrigido
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleIconPress('dancar')}>
            <View style={styles.iconWrapper}>
              <Image
                source={require('../../assets/moldura.jpg')} // Caminho relativo corrigido
                style={styles.frame}
              />
              <Image
                source={require('../../assets/dancar.jpg')} // Caminho relativo corrigido
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleIconPress('deitar')}>
            <View style={styles.iconWrapper}>
              <Image
                source={require('../../assets/moldura.jpg')} // Caminho relativo corrigido
                style={styles.frame}
              />
              <Image
                source={require('../../assets/deitar.png')} // Caminho relativo corrigido
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        {/* Componente Joy renderizado condicionalmente */}
      {selectedAction === 0 && <Joy />}
    

        </View>
        {/* <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => handleIconPress('atacar')}>
            <View style={styles.iconWrapper}>
              <Image
                source={require('../../assets/moldura.jpg')} // Caminho relativo corrigido
                style={styles.frame}
              />
              <Image
                source={require('../../assets/atacar.png')} // Caminho relativo corrigido
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleIconPress('latir')}>
            <View style={styles.iconWrapper}>
              <Image
                source={require('../../assets/moldura.jpg')} // Caminho relativo corrigido
                style={styles.frame}
              />
              <Image
                source={require('../../assets/latir.png')} // Caminho relativo corrigido
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que os ícones quebrem para a próxima linha
    justifyContent: 'center',
  },
  iconWrapper: {
    margin: 10,
    position: 'relative',
  },
  icon: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 25, // Ajuste a margem superior para centralizar verticalmente
    left: 25, // Ajuste a margem esquerda para centralizar horizontalmente
  },
  frame: {
    width: 150,
    height: 150,
  },
});

export default App;
