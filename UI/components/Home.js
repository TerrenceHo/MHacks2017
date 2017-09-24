import React from 'react';
import { AppRegistry, Navigator, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import TakePicture from './TakePicture';
//import { StackNavigator } from 'react-navigation';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2500,               // Make it take a while 2.5 seconds
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class Home extends React.Component {
  
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,               // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  _handlePress() {
    this.props.navigator.push({id: 2});
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/bg1.jpg')} style={styles.backgroundImage} >
           <FadeInView style={{top: '26%'}}>
             <Text style={styles.text}>GroceryIO</Text>
             <Text style={styles.subTitle}>Because it matters what you eat!</Text>
              <Button
                onPress={()=>{this.props.navigator.push({id: 2});}}
                title="Snapshot a Receipt >>>"
                buttonStyle={styles.clickButton}
                color="#fff"
                backgroundColor='#2acc84'
                fontFamily="Didot-Italic"
                fontWeight="bold"
                accessibilityLabel="Learn more about this purple button"
              /> 
            </FadeInView>
        </Image>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 52,
    fontFamily: "Menlo-Italic",
    fontWeight: 'bold'
  },
  subTitle: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 26,
    fontFamily: "Snell Roundhand",
  },
  clickButton: {
    height: 55,
    marginLeft: '15%',
    borderRadius: 15,
    marginRight: '15%',
    marginTop: '73%',
  }
});

AppRegistry.registerComponent('Home', () => Home);
// icon={{name: 'camera', type: 'font-awesome'};
