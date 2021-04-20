import React from 'react';
import {
  SplashScreen,
  SignIn,
  SignUp,
  SignupAddress,
  SignupSuccess,
} from '../pages';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignupAddress"
        component={SignupAddress}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignupSuccess"
        component={SignupSuccess}
      />
    </Stack.Navigator>
  );
};

export default Router;
