import React from 'react';
import { AppRegistry, Navigator, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class TakePicture extends React.Component {
	_handlePress() {
      this.props.navigator.pop();
    }
    
	render(){
		return(
			<View>
				<Text>
					CAMERA!!!
				</Text>
			</View>
		);
	}
}