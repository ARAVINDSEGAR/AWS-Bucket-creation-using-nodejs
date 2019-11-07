const fs = require('fs');
const AWS = require('aws-sdk');

// Copied the access ID and secret key from AWS
const ID = 'AK************KA';
const SECRET = 'BP**********************n3Us';

// Bucket name to be created 
const BUCKET_NAME = 'testbucket00220022';
// Initializing S3 Interface
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});
const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'filename', // File name that want to be save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};
// Filename want to be uploaded
uploadFile('filename');
