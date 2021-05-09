import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';                           //for stacking pages
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';  //for Bottom Tabs
import Icon from 'react-native-vector-icons/Ionicons'                                     //for drawer and tab icons

import { AuthContext } from '../components/context'

const SignOutStack = createStackNavigator();                              //separate screen stack for SignOutScreen

const SignOutScreen = ({navigation}) => {

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

const SignOutStackScreen = ({navigation}) => {                               //separate screen stack for SignOutScreen
    return (
      <SignOutStack.Navigator screenOptions = {{
        headerStyle:  {
        backgroundColor: '#0a1c2b'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'normal'
        }
      }}>
        <SignOutStack.Screen 
          name = "SignOut" 
          component = {SignOutScreen}
          options = {{
            title: "Sign out",
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
      </SignOutStack.Navigator>
    );
}

export default SignOutStackScreen;