const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    // Extract the base64 encoded file content and file name from the event
    const base64File = event.base64File;
    const fileName = event.fileName;
    const bucketName = 'your-s3-bucket-name'; // Replace with your S3 bucket name
    
    // Check if the file is provided
    if (!base64File || !fileName) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Both base64File and fileName are required' }),
        };
    }

    // Decode the base64 string
    const buffer = Buffer.from(base64File, 'base64');

    // Set the S3 upload parameters
    const params = {
        Bucket: bucketName,
        Key: fileName,    // The name of the file in S3
        Body: buffer,     // The file content as buffer
        ContentType: 'application/pdf', // Or you can dynamically set this based on the file type
    };

    try {
        // Upload the file to S3
        const data = await s3.putObject(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'File uploaded successfully!', data: data }),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error uploading file', error: err.message }),
        };
    }
};
