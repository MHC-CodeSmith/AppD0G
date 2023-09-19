import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const ConnectionScreen = ({ onConnect }) => {
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    // Simular um processo de conexão assíncrono
    if (isConnecting) {
      setTimeout(() => {
        setIsConnecting(false);
        onConnect(); // Chame a função de conexão quando a simulação estiver concluída
      }, 3000); // Tempo de simulação de conexão (3 segundos)
    }
  }, [isConnecting, onConnect]);

  return (
    <View style={styles.container}>
      <Image source={require('./Logo.png')} style={styles.logo} />
      <Text style={styles.text}>Bem-vindo à nossa aplicação</Text>
      {isConnecting ? (
        <Text style={styles.connectingText}>Conectando...</Text>
      ) : (
        <Button
          title="Connect"
          onPress={() => setIsConnecting(true)}
          disabled={isConnecting}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  connectingText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'gray',
  },
});

export default ConnectionScreen;
