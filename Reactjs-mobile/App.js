import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Animated,
} from 'react-native';

import logoIcon from './assets/logo512.png';

export default class App extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 300000,
    }).start();
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0rad', '500rad'],
    });
    const animatedStyle = {
      transform: [{ rotate: interpolateRotation }],
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Image
            style={{
              height: '40vmin',
              width: '40vmin',
              pointerEvents: 'none',
              animation: 'App-logo-spin infinite 20s linear',
            }}
            source={logoIcon}
          />
        </Animated.View>
        <Text
          style={{
            color: '#fff',
            fontSize: 'calc(10px + 2vmin)',
          }}
        >
          Edit src/App.js and save to reload.
        </Text>
        <Animated.View>
          <Text
            style={[animatedStyle]}
            style={{
              color: 'rgb(97, 218, 251)',
              fontSize: 'calc(10px + 2vmin)',
              textDecorationColor: 'rgb(97, 218, 251)',
              textDecorationLine: 'underline',
            }}
            onPress={() => Linking.openURL('https://reactnative.dev')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Text>
        </Animated.View>
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(40, 44, 52)',
  },

  text: {
    color: '#FFF',
  },
});

AppRegistry.registerComponent('animatedbasic', () => animatedbasic);
