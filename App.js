import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/telas/inicio';

export default function App() {
  return (
    <View>
      <Inicio />
      <StatusBar style="auto" />
    </View>
  );
}

