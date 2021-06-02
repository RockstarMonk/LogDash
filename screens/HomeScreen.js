import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';                           //for stacking pages
import Icon from 'react-native-vector-icons/Ionicons'

const HomeStack = createStackNavigator();                                 //separate screen stack for HomeScreen

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
          title = "Go to Sign Out Page"
          onPress = {() => navigation.navigate("SignOut")}
        /><Text></Text>
        <Button
          title = "Go back"
          onPress = {() => navigation.goBack()}
        />
      </View>
  );
}

const HomeStackScreen = ({navigation}) => {                                       //separate screen stack for HomeScreen
  return (
    <HomeStack.Navigator screenOptions = {{
      headerStyle:  {
        backgroundColor: '#041d69'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    }}>
      <HomeStack.Screen                                                    //opening and closing the drawer
        name = "Home" 
        component = {HomeScreen}
        options = {{
          title: "Home Page",
          headerLeft: () => (
            <Icon.Button
              name = "menu"
              size = {25}
              backgroundColor = "#041d69"
              onPress = {() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name = "settings-outline"
              size = {25}
              backgroundColor = "#041d69"
              onPress = {() => navigation.navigate("Setting")}
            />
          )
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;