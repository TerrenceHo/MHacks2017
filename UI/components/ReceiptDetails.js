import React from 'react';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { AppRegistry, Navigator, ScrollView, TouchableOpacity, StyleSheet, Animated, Text, View, Image } from 'react-native';
import NewReceipt from './NewReceipt';
import ExistingReceipts from './ExistingReceipts';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class ReceiptDetails extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			foodItemsToDisplay: [],
			tableData:[[]]
		}
	}
	    // Perform the request. Note the content type - very important

	 createTableData(arrObj, len){
	 	for(var k = 0; k < len; k++){
	 		if(arrObj[k]){
	 			var row = [];
	 			row.push(arrObj[k].food_name);
	 			row.push(arrObj[k].nf_protein);
	 			row.push(arrObj[k].nf_calories);
	 			row.push(arrObj[k].nf_total_fat);
	 			row.push(arrObj[k].nf_sugars );
	 			var temp = this.state.tableData;
	 			temp.push(row);
	 			this.setState({tableData: temp});
	 		}
	 	}
	 }

	componentWillMount(){
		fetch('https://receipts-app-production.herokuapp.com/api/v1/detection', {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json',
		  }, 
        
		  body: JSON.stringify({
		    image_path: this.props.imgURL,	
		  })
		})
		.then(res => {
			var data = res._bodyInit;
			console.log(data);
			var apiData = JSON.parse(data);
			const len = apiData.length;
			for(var i=0; i < len; i++){
				if(apiData[i]){ //is not NULL
					var item = apiData[i];
					var itemDisplay = 
						(<View style={styles.itemBlock} key={i}>
							<View style={styles.foodName}>
								<Text style={styles.foodTitle}> {item.food_name} </Text>
							</View>
							<View style={styles.foodDetails}>
								<Text style={styles.count}> {item.nf_calories ? "Calories: "+item.nf_calories : ''} </Text>
								<Text style={styles.count}> {item.nf_protein ? "Protein: "+item.nf_protein  : '' } </Text>
								<Text style={styles.count}> {item.nf_total_fat ? "Fat: "+item.nf_total_fat : ''} </Text> 
								<Text style={styles.count}> {item.nf_total_carbohydrate ?  "Carbohydrate " + item.nf_total_Carbohydrate : ''} </Text>
								<Text style={styles.count}> {item.nf_sugars ? "Sugar: "+item.nf_sugars : '' } </Text>
							</View>
						</View>);
						var arr = this.state.foodItemsToDisplay;
						arr.push(itemDisplay);
						console.log("PUSHEEDDD");
						this.setState({foodItemsToDisplay: arr});
				}
			}
			this.createTableData(apiData, len);

			console.log('***');
			console.log(response);
			this.setState({foodItems: response});
			//console.log(JSON.stringify(results));
		})
		.catch(err => {
			console.log("werwer"+err);
		}) 
	}


	render(){
		const tableHead = ['FOOD', 'Protein', 'Calories', 'Fat', "Sugar"];

	    let {tableData }= this.state;


		return(
			<View>
				<TouchableOpacity onPress={this.props.closeDetailsClicked}>  		
					<Image source={require('../../assets/icons/cross.png')} style={styles.crossIcon}/>	
				</TouchableOpacity>	
				<ScrollView>
					<Image source={{uri: this.props.imgURL}} style={styles.heroBill}/>
					<Text style={styles.titleBill}>
						{this.props.date}
					</Text>
					

				 <View>
			        <Table style={styles.tableLayout}>
			          <Row data={tableHead} flexArr={[1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>
			          <TableWrapper style={{flexDirection: 'row'}}>
			            <Rows data={tableData} flexArr={[1, 1, 1, 1]} style={styles.row}/>
			          </TableWrapper>
			        </Table>
			      </View>
				</ScrollView>
			</View>
		);
	}
}


const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 54, backgroundColor: 'rgba(255,255,255,0.6)' },
  text: { textAlign: 'center' },
	
	itemBlock: {
		flex: 1,
		height: 80,
		width: '85%',
		marginLeft: '7.5%',
		backgroundColor: 'rgba(255,255,255,0.6)',
		flexDirection: 'row'
		
	},
	tableLayout: {
		marginBottom: '20%',
		marginLeft: '5%',
		marginRight: '5%' 

	},
	foodDetails: {
		padding: 0,
		width: 150,
		height: 60,
		marginTop: 2,

	},
	foodName: {
	},
	foodTitle: {
		color: 'black',
	    fontSize: 32,
	    fontWeight: 'bold',
	    fontFamily: "Snell Roundhand",
	    marginTop: 23
	},
	count: {
	    color: 'black',
	    fontSize: 12,
	    fontWeight: 'bold',
	    fontFamily: "Menlo-Italic",
	    marginLeft: '5%',
	    marginTop: 0,
	    textAlign: 'left',
	    alignSelf: 'flex-end',
	},
	heroBill: {
		height: 350,
		width: 260,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '2%',
		marginTop: '3%',
		opacity: 0.9
	},
	crossIcon: {
		marginTop: '0.5%',
		height: 28,
		width: 28,
		marginRight: '10%',
		maxWidth: '10%',
		alignSelf: 'flex-end',
	},
	titleBill:{
		textAlign: 'center',
	    color: 'black',
	    backgroundColor: 'rgba(0,0,0,0)',
	    fontSize: 32,
	    fontWeight: 'bold',
	    fontFamily: "Snell Roundhand"
	},
	text2: {
	    textAlign: 'center',
	    color: 'white',
	    backgroundColor: 'rgba(0,0,0,0)',
	    fontSize: 52,
	    fontFamily: "Menlo-Italic",
	    fontWeight: 'bold'
  },

});

AppRegistry.registerComponent('ReceiptDetails', () => ReceiptDetails);