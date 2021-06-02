import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';                           //for stacking pages
import Icon from 'react-native-vector-icons/Ionicons'                                     //for drawer and tab icons

const SettingStack = createStackNavigator();                              //separate screen stack for LoginScreen

const SettingScreen = ({navigation}) =>  {
    return (
      <View style = {{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{marginBottom: 20, fontSize: 18, fontWeight: 'bold'}}>Welcome to Settings Screen!</Text>
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

const SettingStackScreen = ({navigation}) => {                                //separate screen stack for SettingScreen
  return (
    <SettingStack.Navigator screenOptions = {{
      headerStyle:  {
      backgroundColor: '#000'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    }}>
      <SettingStack.Screen 
        name = "Setting" 
        component = {SettingScreen}
        options = {{
          title: "My Settings",
          headerLeft: () => (
            <Icon.Button
              name = "menu"
              size = {25}
              backgroundColor = "#000"
              onPress = {() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name = "md-home-outline"
              size = {25}
              backgroundColor = "#000"
              onPress = {() => navigation.navigate("Home")}
            />
          )
        }}
      />
    </SettingStack.Navigator>
  );
}

export default SettingStackScreen;