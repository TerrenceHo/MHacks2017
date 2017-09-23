const express = require('express');
const bodyParser = require('body-parser');

const gcloud_vision = require('./gcloud_vision.js');
const image_fileName = 'gs://receipts-bucket/walmart-receipt.jpg';

var app = express();
app.use(bodyParser());

app.post('/api/v1/detection', function(req, res) {
  json_obj = gcloud_vision.parseImage(req.body["image_path"], null);
  res.send(json_obj);

  // gcloud_vision.getLogoDetection(req.body["image_path"], ((logos, err) => {
  //   if err === null{
  //     // check error
  //     // return error response code.
  //   } else {
  //     console.log("Sending Logos");
  //     console.log(logos);
  //     res.send(logos);
  //   }
  // }));

  // console.log("Checking after");
});

app.listen(8080);
console.log('Server Listening at port 8080');

