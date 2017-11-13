import React from 'react';
import { AppRegistry, View, TextInput } from 'react-native';
import Header from './src/components/header';
import BusList from './src/components/BusList';


// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Bus List'} />
    <BusList />
  </View>
);

AppRegistry.registerComponent('busses', () => App);