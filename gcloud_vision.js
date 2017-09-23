'use strict';

var vision = require('@google-cloud/vision')({
    projectId: 'integreal-bliss-180806',
    keyFilename: 'key.json'
});

const image_fileName = 'images/walmart-receipt.jpg';

function getTextDetection(fileName) {
  vision.textDetection({ source: { filename: fileName } })
    .then((results) => {
      const detections = results[0].textAnnotations;
      console.log('Text:');
      detections.forEach((text) => console.log(text));
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
}

function getLogoDetection(fileName) {
  vision.logoDetection({ source: {filename: fileName } })
    .then((results) => {
      const logos = results[0].logoAnnotations;
      console.log('Logos:');
      logos.forEach((logo) => console.log(logo));
    })
    .catch((err) =>{
      console.error('Error:', err);
    });
}

function getLabelDetection(fileName) {
  vision.labelDetection({ source: {filename: fileName } })
    .then((results) => {
      const labels = results[0].labelAnnotations;
      console.log('Labels:');
      labels.forEach((label) => console.log(label));
    })
    .catch((err) => {
      console.error('Error:', err);
    });
}

function testExport(){
  console.log("Export Success");
}

// Exports
module.exports.testExport = testExport;
