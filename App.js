import React from 'react';
import { AppRegistry, Navigator, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import TakePicture from './UI/components/TakePicture';
import ReceiptDisplay from './UI/components/ReceiptDisplay';
import Home from './UI/components/Home';
import NavigationExperimental from 'react-native-deprecated-custom-components';

export default class App extends React.Component{
  _renderScene(route, navigator) {
    if(route.id === 1) {
      return <Home navigator={navigator} />
    } else if(route.id === 2) {
      return <ReceiptDisplay navigator={navigator} />
    }
  }

  render(){
    return(
      <NavigationExperimental.Navigator
        initialRoute={{id: 1, }}
        renderScene={this._renderScene} />
    );
  }

  //AppRegistry.registerComponent('App', () => App);
}

AppRegistry.registerComponent('App', () => App);