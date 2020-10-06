import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import logoIcon from './assets/logo512.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: '40vmin',
          width: '40vmin',
          pointerEvents: 'none',
        }}
        source={logoIcon}
      />
      <Text
        style={{
          color: '#fff',
          fontSize: 'calc(10px + 2vmin)',
        }}
      >
        Edit src/App.js and save to reload.
      </Text>
      <Text
        style={{
          color: 'rgb(97, 218, 251)',
          fontSize: 'calc(10px + 2vmin)',
          textDecorationColor: 'rgb(97, 218, 251)',
          textDecorationLine: 'underline',
        }}
        onPress={() => Linking.openURL('https://reactjs.org')}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(40, 44, 52)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
