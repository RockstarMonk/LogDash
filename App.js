import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Button, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';                           //for navigation
import { createDrawerNavigator } from '@react-navigation/drawer';                         //for drawer functionality

import BottomTabScreen from './screens/BottomTabScreen';
import ExploreStackScreen from './screens/ExploreScreen';
import ActivityStackScreen from './screens/ActivityScreen';
import ProfileStackScreen from './screens/ProfileScreen';
import SettingStackScreen from './screens/SettingScreen';
import InitialScreen from './screens/InitialScreen';
import DrawerContent from './screens/DrawerContent';

import { useEffect } from 'react';
import { AuthContext } from './components/context'

const Drawer = createDrawerNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    Login: () => {
      setUserToken('abcd');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('abcd');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  if(isLoading) {
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size = "large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value = {authContext}>
      <NavigationContainer>
        {userToken !== null ?
          <Drawer.Navigator drawerContent = {props => <DrawerContent {...props} />}>               
            <Drawer.Screen name="Home" component={BottomTabScreen} />
            <Drawer.Screen name="Explore" component={ExploreStackScreen} />
            <Drawer.Screen name="Activity" component={ActivityStackScreen} />
            <Drawer.Screen name="Profile" component={ProfileStackScreen} />
            <Drawer.Screen name="Setting" component={SettingStackScreen} />
          </Drawer.Navigator>
        :
        <InitialScreen /> }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;


