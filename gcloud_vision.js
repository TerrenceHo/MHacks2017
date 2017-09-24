'use strict';
const request = require('request');
// const vision = require('@google-cloud/vision')({
//     projectId: 'integreal-bliss-180806',
//     keyFilename: 'key.json'
// });


function parseImage(fileName, callback) {
  var req_obj = {};
  req_obj['requests'] = [];

  var image = {
    source: {
      image_uri: fileName
    }
  };

  var features = []
  var type_list = ['LOGO_DETECTION', 'LABEL_DETECTION', 'TEXT_DETECTION', 'WEB_DETECTION'];
  for (var i = 0; i < type_list.length; i++) {
    var type_data = {
      type: type_list[i]
    };
    features.push(type_data);
  }
  req_obj['requests'].push({
    image: image,
    features: features
  });
  var json_obj = JSON.stringify(req_obj);

	const options = {
		url: 'https://vision.googleapis.com/v1/images:annotate',
    qs: {
      key:"AIzaSyCYo9FyDznSq_jUDn7eZlkmL-TmMDHFh3E"
    },
    json:{
      requests: req_obj['requests']
    }
	};

  request.post(options, function(error, response, body) {
		if (!error && response.statusCode == 200) {
      return callback(null, body);

		} else {
      console.error("Error\n", error);
      return callback(error, null);
    }
  });



}

// Exports
module.exports.parseImage = parseImage;

// function getTextDetection(fileName) {
//   vision.textDetection({ source: { filename: fileName } })
//     .then((results) => {
//       const detections = results[0].textAnnotations;
//       console.log('Text:');
//       detections.forEach((text) => console.log(text));
//     })
//     .catch((err) => {
//       console.error('ERROR:', err);
//     });
// }

// function getLogoDetection(fileName, callback) {
//   vision.logoDetection({ source: {filename: fileName } })
//     .then((results) => {
//       callback(results[0].logoAnnotations, null);
//     })
//     .catch((err) =>{
//       console.error('Error:', err);
//       callback(null, err);
//     });
// }

// function getLabelDetection(fileName) {
//   vision.labelDetection({ source: {filename: fileName } })
//     .then((results) => {
//       const labels = results[0].labelAnnotations;
//       console.log('Labels:');
//       labels.forEach((label) => console.log(label));
//       return labels;
//     })
//     .catch((err) => {
//       console.error('Error:', err);
//     });
// }

// function testExport(){
//   console.log("Export Success");
// }

// // module.exports.testExport = testExport;
// // module.exports.getTextDetection = getTextDetection;
// // module.exports.getLogoDetection = getLogoDetection;
// // module.exports.getLabelDetection = getLabelDetection;

