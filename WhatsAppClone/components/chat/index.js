import React from 'react'
import {View,Text, ScrollView} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import MyCard from './MyCard';
export default function Chat(){
    return(
        <View style={{backgroundColor:'#1f211f',flex:1}} >
           <ScrollView>
              <MyCard />
              <MyCard />
              <MyCard />
              <MyCard />
              <MyCard />
              <MyCard />
              <MyCard />
              <MyCard />
           </ScrollView>
        </View>
    )
}