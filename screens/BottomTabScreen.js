import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';                           //for stacking pages
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';  //for Bottom Tabs
import Icon from 'react-native-vector-icons/Ionicons'                                     //for drawer and tab icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather';
import Octicon from 'react-native-vector-icons/Octicons'

import HomeScreen from './HomeScreen';
import ExploreStackScreen from './ExploreScreen';
import ActivityStackScreen from './ActivityScreen';
import SignOutStackScreen from './SignOutScreen';

const HomeStack = createStackNavigator();                                 //separate screen stack for HomeScreen
const Tab = createMaterialBottomTabNavigator();                           //Material Bottom Tab functionality

const BottomTabScreen = () =>  {
  return (
    <Tab.Navigator
      initialRouteName = "Home"
      activeColor = "#fff"
    >
      <Tab.Screen
        name="Home"
        component = {HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#0a1c2b',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name = "Explore"
        component = {ExploreStackScreen}
        options = {{
          tabBarLabel: 'Explore',
          tabBarColor: '#0a1c2b',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name = "Activity"
        component = {ActivityStackScreen}
        options = {{
          tabBarLabel: 'Activity',
          tabBarColor: '#0a1c2b',
          tabBarIcon: ({ color }) => (
            <Feather name="activity" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name = "SignOut"
        component = {SignOutStackScreen}
        options = {{
          tabBarLabel: 'Sign Out',
          tabBarColor: '#0a1c2b',
          tabBarIcon: ({ color }) => (
            <Octicon name="sign-out" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabScreen;                                        //exporting this function to app.js

const HomeStackScreen = ({navigation}) => {                                       //separate screen stack for HomeScreen
    return (
      <HomeStack.Navigator screenOptions = {{
        headerStyle:  {
          backgroundColor: '#0a1c2b'
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
                backgroundColor = "#0a1c2b"
                onPress = {() => navigation.openDrawer()}
              />
            )
          }}
        />
      </HomeStack.Navigator>
    );
}
