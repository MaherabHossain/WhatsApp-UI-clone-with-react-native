import React from 'react'
import {View,StatusBar,StyleSheet,Text} from 'react-native'
import Home from './components/Home'
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
export default function App(){
 
  return(
    <Home />
  )
}
 