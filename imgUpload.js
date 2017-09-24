'use strict';
const storage = require('@google-cloud/storage');
const fs = require('fs');

const gcs = storage({
  projectId: "integral-bliss-180806",
  keyFilename: "./key.json"
});

const bucketName = 'receipts-bucket'
const bucket = gcs.bucket(bucketName);


function getPublicUrl(filename) {
  return 'https://storage.googleapis.com/' + bucketName + '/' + filename;
}

var ImgUpload = {};

ImgUpload.uploadToGcs = (req, res, next) => {
  if(!req.file) return next();

  // Can optionally add a path to the gcsname below by concatenating it before the filename
  const gcsname = req.file.originalname;
  console.log("gcsname", gcsname);
  var file = bucket.file(gcsname);
  file.makePublic(function(err, apiResponse){
    console.error("ERROR:", err);
    console.log("apiResponse", apiResponse);
  });
  // ).then(() => {
  //   console.log("Made Public");
  // })
  // .catch(err => {
  //   console.error("ERROR:", err);
  // });

  console.log(gcsname + ";" + file);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });
  console.log("Creating Stream");

  stream.on('error', (err) => {
    console.error("Error Stream", err);
    req.file.cloudStorageError = err;
    next(err);
  });

	stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname;
    req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
    next();
  });

  console.log("Ending");
  stream.end(req.file.buffer);
}

module.exports = ImgUpload;


