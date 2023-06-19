/*
The `plot.js` module is responsible for fetching a plot image from a S3 bucket and 
returning it as a response in an API endpoint. It utilizes the AWS SDK to interact 
with the S3 service and retrieve the image file specified by the bucket name and key. 
The module sets the appropriate content type header for the image and sends it as the 
response. In case of any errors during the retrieval process, it logs the error and 
sends a 500 status code as the response. This module can be used to integrate plot 
image retrieval functionality into a serverless application or API endpoint.
*/

import AWS from 'aws-sdk';

// Set up AWS S3 configuration
AWS.config.update({
    accessKeyId: 'AKIA4POU5RRAAVW5ELOS',
    secretAccessKey: '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',
    region: 'eu-central-1',
});
// Remember to follow best practices for handling credentials, 
// such as using environment variables or a secure credential storage mechanism, 
// instead of hard-coding the AWS access key and secret access key directly in the code.
// accessKeyId: process.env.AWS_ACCESS_KEY_ID,
// secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,

const s3 = new AWS.S3();
const bucketName = 'tum-di-lab-prod-plots';
const plotKey = 'config33/transistor_0/cyc_mean_temp_33_0.png';

export default async function handler(req, res) {
  try {
    // Fetch the plot image from S3
    const s3Response = await s3.getObject({ Bucket: bucketName, Key: plotKey }).promise();

    // Set the appropriate content type header for the image
    res.setHeader('Content-Type', 'image/png');

    // Send the plot image as the response
    res.end(s3Response.Body);
  } catch (error) {
    console.error('Error fetching plot image from S3:', error);
    res.status(500).end();
  }
}
