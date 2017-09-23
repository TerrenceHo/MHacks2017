const express = require('express');
const bodyParser = require('body-parser');

const gcloud_vision = require('./gcloud_vision.js');
const image_fileName = 'gs://receipts-bucket/walmart-receipt.jpg';
const checksum = require('./checksum.js');
const makeUPC = require('./makeUPC.js');
const nutritionApi = require('./nutritionApi.js');

var app = express();
app.set('port', (process.env.PORT || 8080));
app.use(bodyParser());

app.post('/api/v1/detection', function(req, res) {
  gcloud_vision.parseImage(req.body["image_path"], function(error, data){
      if (!error){
      array = [];
      size = data.responses[0].textAnnotations.length;
      for (i = 0; i<size; i++){
        characters = data.responses[0].textAnnotations[i].description;
        array.push(characters);

      }
       upc = makeUPC.getUPC(array);
	for (var item in upc) {
       	  nutritionApi.UPCtoCal(upc[item],nutritionApi.infoCallback);
        }
      res.send(upc);
    }else{
      res.send(error);
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Server Listening at port', app.get('port'));
});

