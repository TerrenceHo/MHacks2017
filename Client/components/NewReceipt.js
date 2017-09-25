import React from 'react';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { AppRegistry, Navigator, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';

export default class NewReceipt extends React.Component{
	state = {
		
	}

	_addReceipt(key){
		console.log(key);
	}

	_captureImage = async () => {
		let result = await ImagePicker.launchCameraAsync({		
	        allowsEditing: true,		
	        aspect: [16, 9],		
	    });		
	 		
	    if (result.cancelled) {		
	       return;		
	    }		

	    // ImagePicker saves the taken photo to disk and returns a local URI to it		
	    let localUri = result.uri;		
	    let filename = localUri.split('/').pop();		
	 		
	     // Infer the type of the image		
	 	let match = /\.(\w+)$/.exec(filename);		
	 	let type = match ? `image/${match[1]}` : `image`;		
	 	
	 	const image = {
	        uri: result.uri,
	        type: 'image/jpeg',
	        name: 'myImage' + '-' + Date.now() + '.jpg'
	    }	

	    const imageBody = new FormData();
	    imageBody.append('image', image);
	    const url = `https://receipts-app-production.herokuapp.com/api/v1/upload`;

	    // Perform the request. Note the content type - very important
	    fetch(url, {
	      	method: 'POST',
	      	headers: {
	        	'Accept': 'application/json',
	        	'Content-Type': 'multipart/form-data',
	      	},
	      	body: imageBody
	      	}).then(res => {
	      		var response = JSON.stringify(res);
	      		var a = JSON.parse(res._bodyText);
	      		var key = null;
	      		console.log(a.imageURL);
	      		this._addReceipt(a.imageURL);
	      		//console.log(key);

	    	}).catch(error => {
	      	console.error(error);
	    });

	 	// Upload the image using the fetch and FormData APIs		
	 	let formData = new FormData();		
	 	// Assume "photo" is the name of the form field the server expects		
	 	formData.append('photo', { uri: localUri, name: filename, type });		
	 		
	    console.log(formData);		
	}


	render(){
		return(
			<TouchableOpacity onPress={this._captureImage}> 
				<View style={styles.receiptBox}>
					<Image source={require('../../assets/icons/add.png')} style={styles.addIcon}/>
					<Text style={styles.newReceiptText}> Add New Receipt </Text>
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
/*import React from 'react';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { AppRegistry, Navigator, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';

export default class NewReceipt extends React.Component{
	state = {
	}

	_captureImage = async () => {
		let result = await ImagePicker.launchCameraAsync({		
	        allowsEditing: true,		
	        aspect: [16, 9],		
	    });		
	 		
	    if (result.cancelled) {		
	       return;		
	    }		

	    // ImagePicker saves the taken photo to disk and returns a local URI to it		
	    let localUri = result.uri;		
	    let filename = localUri.split('/').pop();		
	 		
	     // Infer the type of the image		
	 	let match = /\.(\w+)$/.exec(filename);		
	 	let type = match ? `image/${match[1]}` : `image`;		
	 	
	 	const image = {
	        uri: result.uri,
	        type: 'image/jpeg',
	        name: 'myImage' + '-' + Date.now() + '.jpg'
	    }	

	    const imageBody = new FormData();
	    imageBody.append('image', image);
	    const url = `https://receipts-app-production.herokuapp.com/api/v1/upload`;

	    // Perform the request. Note the content type - very important
	    fetch(url, {
	      	method: 'POST',
	      	headers: {
	        	'Accept': 'application/json',
	        	'Content-Type': 'multipart/form-data',
	      	},
	      	body: imageBody
	      	}).then(res => {
	      		var response = JSON.stringify(res);
	      		var a = JSON.parse(res._bodyText);
	      		console.log(a);
	      		console.log("a:   "+a);
	      		var key = null;
	      		for(i in a){
	      			key=a[i];
	      			if(key){
	      				console.log("KEYYYYY: "+key);
	      				this.props.addReceipt(key);
	      			}
	      		}
	      		//console.log(key);
	    	}).catch(error => {
	      	console.error("err"+error);
	    });

	 	// Upload the image using the fetch and FormData APIs		
	 	let formData = new FormData();		
	 	// Assume "photo" is the name of the form field the server expects		
	 	formData.append('photo', { uri: localUri, name: filename, type });		
	 		
	    console.log(formData);		
	}


	render(){
		return(
			<TouchableOpacity onPress={this._captureImage}> 
				<View style={styles.receiptBox}>
					<Image source={require('../../assets/icons/add.png')} style={styles.addIcon}/>
					<Text style={styles.newReceiptText}> Add New Receipt </Text>
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

AppRegistry.registerComponent('NewReceipt', () => NewReceipt); */