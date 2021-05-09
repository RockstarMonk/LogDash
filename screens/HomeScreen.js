import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';                           //for stacking pages

const HomeScreen = ({navigation}) =>  {
    return (
      <View style = {{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{marginBottom: 20, fontSize: 18, fontWeight: 'bold'}}>Welcome to Home Screen!</Text>
        <Button
          title = "Reload"
          onPress = {() => navigation.navigate("Home")}
        /><Text></Text>
        <Button
          title = "Go to Explore Page"
          onPress = {() => navigation.navigate("Explore")}
        /><Text></Text>
        <Button
          title = "Go to Activity Page"
          onPress = {() => navigation.navigate("Activity")}
        /><Text></Text>
        <Button 
          title = "Go to Profile Page"
          onPress = {() => navigation.navigate("Profile")}
        /><Text></Text>
        <Button
          title = "Go back"
          onPress = {() => navigation.goBack()}
        />
      </View>
  );
}

export default HomeScreen;

