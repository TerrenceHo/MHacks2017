import React from 'react';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { AppRegistry, Navigator, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';

export default class NewReceipt extends React.Component{
	state = {

	}

	_handlePress(){

	}
	
	render(){
		return(
			<View style={styles.receiptBox} onPress={this._handlePress}>
				<Image source={require('../../assets/icons/add.png')} style={styles.addIcon}/>
				<Text style={styles.newReceiptText}> Add New Receipt </Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	receiptBox: {
		minHeight: 185,
		width: 135,
		marginLeft: "10%",
		marginTop: "5%",
		borderRadius: 15,
		borderStyle: 'solid',
		backgroundColor: 'rgba(255,255,255,0.5)'
	},
	addIcon: {
		height: 100,
		width: 100,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '20%',
		marginTop: '20%',
		opacity: 0.9
	},
	newReceiptText: {
		paddingLeft: 4,
		fontSize: 16,
		fontWeight: 'bold',
		fontFamily: "Snell Roundhand"
	}
});

AppRegistry.registerComponent('NewReceipt', () => NewReceipt);