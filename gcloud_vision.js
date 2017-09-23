'use strict';

var vision = require('@google-cloud/vision')({
    projectId: 'integreal-bliss-180806',
    keyFilename: '../key.json'
});

const fileName = '../images/walmart-receipt.jpg';

vision.textDetection({ source: { filename: fileName } })
  .then((results) => {
    const detections = results[0].textAnnotations;
    console.log('Text:');
    detections.forEach((text) => console.log(text));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });


// vision.detectFaces('../images/walmart-receipt.jpg', function(err, text){
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(text)
//   }
// });
