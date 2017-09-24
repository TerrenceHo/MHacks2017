import React from 'react';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { AppRegistry, Navigator, ScrollView, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';
import NewReceipt from './NewReceipt';
import ExistingReceipts from './ExistingReceipts';

export default class ReceiptDetails extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}


	render(){
		return(
			<View> 				
				<Text style={styles.titleBill}>
					{this.props.date}
				</Text>
				<Image source={require('../../assets/icons/cross.png')} style={styles.crossIcon}/>
				<Image source={{uri: this.props.imgURL}} style={styles.heroBill}/>
				<Text>
					Receipt Details will be displayed here 
				</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	heroBill: {
		height: 310,
		width: 180,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '10%',
		marginTop: '10%',
		opacity: 0.9
	},
	crossIcon: {
		top: 0,
		left: 0
	}
});

AppRegistry.registerComponent('ReceiptDetails', () => ReceiptDetails);