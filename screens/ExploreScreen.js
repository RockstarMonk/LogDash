import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';                           //for stacking pages
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';  //for Bottom Tabs
import Icon from 'react-native-vector-icons/Ionicons'                                     //for drawer and tab icons

const ExploreStack = createStackNavigator();                              //separate screen stack for LoginScreen

const ExploreScreen = ({navigation}) =>  {
    return (
      <View style = {{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{marginBottom: 20, fontSize: 18, fontWeight: 'bold'}}>Welcome to Explore Screen!</Text>
        <Button 
          title = "Go Home"
          onPress = {() => navigation.navigate("Home")}
        /><Text></Text>
        <Button
          title = "Go back"
          onPress = {() => navigation.goBack()}
        />
      </View>
    );
}

const ExploreStackScreen = ({navigation}) => {                                //separate screen stack for ExploreScreen
  return (
    <ExploreStack.Navigator screenOptions = {{
      headerStyle:  {
      backgroundColor: '#0a1c2b'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    }}>
      <ExploreStack.Screen 
        name = "Explore" 
        component = {ExploreScreen}
        options = {{
          title: "Explore More",
          headerLeft: () => (
            <Icon.Button
              name = "menu"
              size = {25}
              backgroundColor = "#0a1c2b"
              onPress = {() => navigation.openDrawer()}
            />
          )
        }}
      />
    </ExploreStack.Navigator>
  );
}

export default ExploreStackScreen;