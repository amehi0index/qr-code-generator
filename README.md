# QR Code Generator with AWS Lambda and S3

This project is a serverless application that generates QR codes for given URLs and uploads them to an Amazon S3 bucket. It utilizes AWS Lambda Function URLs to provide direct HTTP access to the Lambda function.

## Features

- **URL to QR Code Conversion:** Converts a provided URL into a QR code.
- **AWS S3 Integration:** Automatically uploads the generated QR code images to a specified S3 bucket.
- **Serverless Architecture:** Runs as an AWS Lambda function for easy deployment and scalability.
- **Direct HTTP Access:** Utilizes AWS Lambda Function URL for straightforward HTTP invocation.

## Prerequisites

- AWS account with access to Lambda and S3 services.
- Basic knowledge of AWS services and Python programming.

## Setup and Deployment

1. **Create an S3 Bucket:**
   - Log in to your AWS account and create a new S3 bucket, e.g., `qr-code-generator`.
   - Ensure that the bucket has the necessary permissions to store files and make them publicly accessible.

2. **Deploy the Lambda Function:**
   - Create a new AWS Lambda function.
   - Upload the Python script or paste the code into the Lambda code editor.
   - Set the Lambda function's execution role with permissions to access S3 services.
   - Configure a Lambda Function URL in the AWS Lambda console to allow HTTP requests OR  configure an API Gateway to trigger the Lambda function.

## Usage

To use the QR code generator, send a JSON payload with a URL to the Lambda Function URL:

```json
{
  "url": "https://example.com"
}
```

The function will:

- Generate a QR code for the provided URL.
- Save the QR code as a PNG file.
- Upload the file to the S3 bucket.
- Return the URL of the uploaded QR code image.