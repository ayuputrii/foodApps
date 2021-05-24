import React from 'react';
import {
  SplashScreen,
  SignIn,
  SignUp,
  SignupAddress,
  SignupSuccess,
  Home,
  Order,
  Profile,
  FoodDetail,
  OrderSummary,
  OrderSuccess,
} from '../pages';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

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
      <Stack.Screen
        options={{headerShown: false}}
        name="MainApp"
        component={MainApp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="FoodDetail"
        component={FoodDetail}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="OrderSummary"
        component={OrderSummary}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="OrderSuccess"
        component={OrderSuccess}
      />
    </Stack.Navigator>
  );
};

export default Router;
