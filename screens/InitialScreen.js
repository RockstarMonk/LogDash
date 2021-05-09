import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

const InitialStack = createStackNavigator();

const InitialScreen = ({navigation}) => (
    <InitialStack.Navigator headerMode='none'>
        <InitialStack.Screen name="LoginScreen" component={LoginScreen}/>
        <InitialStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </InitialStack.Navigator>
);

export default InitialScreen;