import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import PokemonCard from './Components/PokemonCard';
import Home from './Screens/Home'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#212121" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        //  initialRouteName="Home"
        screenOptions={globalScreenOptions}>
        <stack.Screen name="PokéDex" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  text: {
    color: "#fff",
    marginTop: 10,
    fontSize: 40,
    fontWeight: "bold"
  },
  // scrollV: {
  //   marginBottom: 10,
  //   width: "100%",
  //   // alignItems: 'center'
  // }
});
