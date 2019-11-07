const AWS = require('aws-sdk');
// Copied the access ID and secret key from AWS
const ID = 'AK************KA';
const SECRET = 'BP**********************n3Us';

// Bucket name to be created 
const BUCKET_NAME = 'testbucket00220022';
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set the region
        LocationConstraint: "eu-west-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});