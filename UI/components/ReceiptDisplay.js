import React from 'react';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { AppRegistry, Navigator, ScrollView, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';
import NewReceipt from './NewReceipt';
import ExistingReceipts from './ExistingReceipts';
import ReceiptDetails from './ReceiptDetails';

export default class ReceiptDisplay extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			receiptsArr: [],
			detailsPageOpen: false,
			dateReceipt: '25 Sept 2017',
			imgURL: null
		}
		this.openDetailsClicked = this.openDetailsClicked.bind(this);
		this.closeDetailsClicked = this.closeDetailsClicked.bind(this);
		this.addReceipt = this.addReceipt.bind(this);
		this._handlePress = this._handlePress.bind(this);
	}

	componentWillMount(){
		//Mount the state receipt array 

	}

	openDetailsClicked(date, imgURL1){
		this.setState({dateReceipt: date, imgURL: imgURL1, detailsPageOpen: true});

	}

	closeDetailsClicked(){
		this.setState({detailsPageOpen: false});
	}

	addReceipt(receipt){
		console.log("rec"+receipt);
		var tempArr = this.state.receiptsArr;
		tempArr.push(receipt);
		this.setState({ receiptsArr: tempArr });
	}

	_handlePress() {
    	this.props.navigator.pop();
	}


	render() {
		const {date, imgURL, detailsPageOpen } = this.state;
		const existingLists = this.state.receiptsArr.map((item) => {
			var v = this.state.id+1;
			this.setState({id: v});
			return <ExistingReceipts key={this.state.id+1} openDetailsClicked={this.openDetailsClicked} imageUrl={this.state.imgURL}/>
		})
		const detailsNotOpen = ( //crate an array with existingreceipt
			<ScrollView>
			  	<ExistingReceipts openDetailsClicked={this.openDetailsClicked}/>
			  	{existingLists}
	   	        <NewReceipt addReceipt={this.addReceipt} />
	       	</ScrollView>  
		);

		const detailsOpen = (
			<ReceiptDetails imgURL={this.state.imgURL} date={this.state.dateReceipt} closeDetailsClicked={this.closeDetailsClicked} />
		);

		return(
		  <View style={styles.container}>
		  	<Image source={require('../../assets/bg.jpg')} style={styles.backgroundImage} >
			  	<Text style={styles.receiptHeader}>
			  		Receipts
			  	</Text>
			  	
			  	{detailsPageOpen ? detailsOpen : detailsNotOpen}
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
    overflow: 'scroll'
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
