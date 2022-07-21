import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Onboarding, Home, HotelDetails, Splash,Profile,EntryLevel} from '../Screens';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />

        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HotelDetails" component={HotelDetails} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Entry" component={EntryLevel} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
