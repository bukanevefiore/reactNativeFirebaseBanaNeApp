/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import FlashMessage from 'react-native-flash-message';
import Messages from './pages/Messages';


const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="Messages" component={MessagesStack} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )

}


function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}


function MessagesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  )
}