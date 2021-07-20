import React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/home';
import IssLocation from './screens/issLocation';
import MeteorScreen from './screens/meteors';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="IssLocation" component={IssLocation}/>
        <Stack.Screen name="Meteor" component={MeteorScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
