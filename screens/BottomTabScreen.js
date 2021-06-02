import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';  //for Bottom Tabs
import Icon from 'react-native-vector-icons/Ionicons'                                     //for drawer and tab icons
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Feather';

import HomeStackScreen from './HomeScreen';
import ExploreStackScreen from './ExploreScreen';
import ActivityStackScreen from './ActivityScreen';
import ProfileStackScreen from './ProfileScreen';

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
          tabBarColor: '#041d69',
          tabBarIcon: ({ color }) => (
            <Icon name="md-home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name = "Explore"
        component = {ExploreStackScreen}
        options = {{
          tabBarLabel: 'Explore',
          tabBarColor: '#07914c',
          tabBarIcon: ({ color }) => (
            <Icon2 name="compass-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name = "Activity"
        component = {ActivityStackScreen}
        options = {{
          tabBarLabel: 'Activity',
          tabBarColor: '#500ca6',
          tabBarIcon: ({ color }) => (
            <Icon3 name="activity" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name = "Profile"
        component = {ProfileStackScreen}
        options = {{
          tabBarLabel: 'Profile',
          tabBarColor: '#b5071e',
          tabBarIcon: ({ color }) => (
            <Icon2 name="account-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabScreen;                                        //exporting this function to app.js


