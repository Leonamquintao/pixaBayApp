import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import LandingPage from '../screens/LandingPage';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const stackOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={stackOptions}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
