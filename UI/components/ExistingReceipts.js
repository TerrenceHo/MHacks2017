import React from 'react';
import { Button } from 'react-native-elements';
import { AppRegistry, Navigator, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

export default class ExistingReceipts extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			date: '25 sept 2017',
			imgUrl: 'https://storage.googleapis.com/receipts-bucket/walmart-receipt-grocery.jpg',
			openDetails: false
		}
		this._openDetails = this._openDetails.bind(this);
	}

	_openDetails(){
		this.setState({openDetails: true});
		this.props.openDetailsClicked(this.state.date, this.state.imgUrl);
	}

	render(){
		
		return(
			<TouchableOpacity style={styles.receiptBox} onPress={this._openDetails}> 
				<View >
					<Image source={{uri: 'https://storage.googleapis.com/receipts-bucket/walmart-receipt-grocery.jpg'}} style={styles.billImg}/>
					<Text style={styles.existingReceiptText}> 25 Sept 2017 </Text>
				</View>
			</TouchableOpacity>
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
		backgroundColor: 'rgba(255,255,255,0.7)'
	},
	billImg: {
		height: 110,
		width: 110,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '10%',
		marginTop: '10%',
		opacity: 0.9
	},
	existingReceiptText: {
		paddingLeft: 4,
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
		fontFamily: "Snell Roundhand"
	}
});

AppRegistry.registerComponent('ExistingReceipt', () => ExistingReceipt);