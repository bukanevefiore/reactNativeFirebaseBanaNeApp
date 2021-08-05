/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import FlashMessage from 'react-native-flash-message';
import Messages from './pages/Messages';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './styles/colors';


const Stack = createNativeStackNavigator();

export default () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);



  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
          //<AuthStack />
        ) : (
          <Stack.Screen name="Messages" component={MessagesStack} />
        )}

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
      <Stack.Screen name="Messages" component={Messages}
        options={{
          headerRight: () => <Icon name="logout" size={30} color={colors.blue}
            onPress={() => auth().signOut()} />
        }} />
    </Stack.Navigator>
  )
}