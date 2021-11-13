import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [numero, setNumero] = useState(0)

  return (
    <View style={styles.container}>
      <Text>{numero}</Text>
      <Button onPress={() => setNumero((Math.random() * 1000).toFixed(0))} title="Aleatorio"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
