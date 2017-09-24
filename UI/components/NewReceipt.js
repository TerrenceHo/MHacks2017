import React from 'react';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { AppRegistry, Navigator, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';

export default class NewReceipt extends React.Component{
	state = {

	}

	render(){
		return(
			<View style={styles.receiptBox}>
				<Text>Receipt</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	receiptBox: {
		minHeight: 185,
		width: 135,
		padding: 20,
		marginLeft: "10%",
		marginTop: "5%",
		borderRadius: 15,
		borderStyle: 'solid',
		backgroundColor: 'rgba(1,1,1,0.5)'
	}
});

AppRegistry.registerComponent('NewReceipt', () => NewReceipt);