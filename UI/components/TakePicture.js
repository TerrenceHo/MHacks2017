import React from 'react';		
 import { Button } from 'react-native-elements';		
 import { Image, View } from 'react-native';		
 import { ImagePicker } from 'expo';		
 		
 export default class TakePicture extends React.Component {		
 		
   state = {		
     image: null,		
   };		
 		
   _handlePress() {		
     this.props.navigator.pop();		
   }		
 		
   render() {		
     let { image } = this.state;		
 		
     return (		
       <View>		
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>		
           <Button		
             title="Pick an image from camera roll"		
             onPress={this._pickImage}		
           />		
         </View>		
       </View>		
     );		
   }		
 		
   _pickImage = async () => {		
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
 		
 	  // Upload the image using the fetch and FormData APIs		
 	  let formData = new FormData();		
 	  // Assume "photo" is the name of the form field the server expects		
 	  formData.append('photo', { uri: localUri, name: filename, type });		
 		
     console.log(formData);		
 		
 		
   };		
 			
 } 