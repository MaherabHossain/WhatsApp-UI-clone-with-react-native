import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import TopTab from './TopTab'
import { NavigationContainer } from '@react-navigation/native';
import Header from './shared/Header'
export default function Home(){
  return(
    <View style={{flex:1,backgroundColor:'#1f211f'}}>
      <Header />
      <View style={{padding:10,backgroundColor:'#17212d'}}></View>
      <TopTab />
   </View>

  )
}
