import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/home/Home.Screen'
import { Appbar } from 'react-native-paper';
const bg = require('./assets/bg1.jpg');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bg}
        style={{
          flex: 1,
          width: '100%'
        }}
        resizeMode="stretch"
      >
        <HomeScreen />
      </ImageBackground>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
  },
});
