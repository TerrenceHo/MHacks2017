const express = require('express');
const bodyParser = require('body-parser');
const Multer = require('multer');

const gcloud_vision = require('./gcloud_vision.js');
const image_fileName = 'gs://receipts-bucket/walmart-receipt.jpg';
const checksum = require('./checksum.js');
const makeUPC = require('./makeUPC.js');
const nutritionApi = require('./nutritionApi.js');
const imgUpload = require('./imgUpload.js');

var app = express();
app.set('port', (process.env.PORT || 8080));
app.use(bodyParser());

const multer = Multer({
  storage: Multer.MemoryStorage,
  fileSize:5 * 1024 * 1024
});

app.post('/api/v1/detection', function(req, res) {
  gcloud_vision.parseImage(req.body["image_path"], function(error, data){
    if (!error){
//      logo = data.responses[0].logoAnnotations[0].description;
//      if (logo !== "Walmart"){
//        console.log("not a receipt");
//        res.send(error);
//      }
      array = [];
      num_annotations = data.responses[0].textAnnotations.length;
      for (i = 0; i<num_annotations; i++){
        characters = data.responses[0].textAnnotations[i].description;
        array.push(characters);
      }
      upc_array = makeUPC.getUPC(array);
      results = [];
      (function iterate_UPC_array(index) {
        if (index === upc_array.length) {
          res.send(results);
          return;
        }
        nutritionApi.UPCtoCal(upc_array[index], function(parsed_food, parsed_error) {
          if (parsed_error != null) {
            iterate_UPC_array(index+1);
          } else {
            results.push(parsed_food);
            iterate_UPC_array(index+1);
          }
        })
      })(0);

    }else{
      res.send(error);
    }
  });
});

app.post('/api/v1/upload', multer.single('image'), imgUpload.uploadToGcs, function(req, res, next) {
  const data = req.body;
  console.log("Data", data);
  if (req.file && req.file.cloudStoragePublicURL) {
    console.log("Req.file", req.file);
    data.imageURL = req.file.cloudStoragePublicURL;
    console.log("ImageURL", data.imageURL);
  }

  console.log("Data2", data);
  res.send(data)
});


app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log('Server Listening at port', app.get('port'));
});

