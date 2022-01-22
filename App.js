import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Home from './screens/home';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Navigator from './routes/HomeStack';


const getFonts = () => Font.loadAsync({
    'Nunito-Regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
  });


export default function App() {

  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigator />;
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});