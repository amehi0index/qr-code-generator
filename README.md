# QR Code Generator with AWS Lambda and S3

This project is a serverless application that generates QR codes for given URLs and uploads them to an Amazon S3 bucket. It utilizes an AWS Lambda Function URL to provide direct HTTP access to the Lambda function.

The application supports custom styling options for the QR codes, including different patterns and colors for both the QR code itself and its elements (e.g., dots, squares, rounded patterns). The frontend is built with React and Vite, offering a responsive user interface for customizing and generating QR codes.

## Features

- **URL to QR Code Conversion:** Converts a provided URL into a QR code.
- **AWS S3 Integration:** Automatically uploads the generated QR code images to a specified S3 bucket.
- **Serverless Architecture:** Runs as an AWS Lambda function for easy deployment and scalability.
- **Direct HTTP Access:** Utilizes AWS Lambda Function URL for HTTP requests.
- **Custom QR Code Styling:** Offers various customization options for QR code appearance through a React-based frontend.

## Prerequisites

- AWS account with access to Lambda and S3 services.
- Basic knowledge of AWS services and Python programming.

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/amehi0index/qr-code-generator.git
   cd qr-code-generator

2. **Frontend Setup**

   > Navigate to the frontend directory and install dependencies:
   >
   > ```bash
   > cd frontend
   > npm install
   > ```
   >
   > Start the development server:
   >
   > ```bash
   > npm run dev
   > ```


3. **Create an S3 Bucket:**
   - Log in to your AWS account and create a new S3 bucket, e.g., `qr-code-generator`.
   - Ensure that the bucket has the necessary permissions to store files and make them publicly accessible.

4. **Deploy the Lambda Function:**
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