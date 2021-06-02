import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';                           //for stacking pages
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';  //for Bottom Tabs
import Icon from 'react-native-vector-icons/Ionicons'                                     //for drawer and tab icons

import { AuthContext } from '../components/context'

const ProfileStack = createStackNavigator();                              //separate screen stack for ProfileScreen

const ProfileScreen = ({navigation}) => {

  const { signOut } = React.useContext(AuthContext);

    return (
      <View style = {{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{marginBottom: 20, fontSize: 18, fontWeight: 'bold'}}>Tap this button to sign out:</Text>
        <Button
          title = "SIGN OUT"
          onPress = {() => signOut()}
        /><Text></Text>
        <Button
          title = "Go back"
          onPress = {() => navigation.goBack()}
        />
      </View>
    );
}

const ProfileStackScreen = ({navigation}) => {                               //separate screen stack for ProfileScreen
    return (
      <ProfileStack.Navigator screenOptions = {{
        headerStyle:  {
        backgroundColor: '#b5071e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'normal'
        }
      }}>
        <ProfileStack.Screen 
          name = "Profile" 
          component = {ProfileScreen}
          options = {{
            title: "My Profile",
            headerLeft: () => (
              <Icon.Button
                name = "menu"
                size = {25}
                backgroundColor = "#b5071e"
                onPress = {() => navigation.openDrawer()}
              />
            ),
            headerRight: () => (
              <Icon.Button
                name = "settings-outline"
                size = {25}
                backgroundColor = "#b5071e"
                onPress = {() => navigation.navigate("Setting")}
              />
            )
          }}
        />
      </ProfileStack.Navigator>
    );
}

export default ProfileStackScreen;