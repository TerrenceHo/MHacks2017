import React from 'react';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { AppRegistry, Navigator, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';
import NewReceipt from './NewReceipt';
import ExistingReceipts from './ExistingReceipts';

export default class ReceiptDisplay extends React.Component{
	state = {

	}

	_handlePress() {
    	this.props.navigator.pop();
	}

	componentWillMount(){
	}

	render() {
		return(
		  <View style={styles.container}>
		  	<Image source={require('../../assets/bg.jpg')} style={styles.backgroundImage} >
			  	<Text style={styles.receiptHeader}>
			  		Receipts
			  	</Text>
			  	<ExistingReceipts />
	            <NewReceipt />
	             
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
  receiptHeader: {
  	textAlign: 'center',
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 62,
    marginTop: '10%',
    fontWeight: 'bold',
    fontFamily: "Snell Roundhand"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.9
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


AppRegistry.registerComponent('ReceiptDisplay', () => ReceiptDisplay);
