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

## Usage Instructions

### Using Postman

1. **Prepare the JSON Payload:** Create a JSON object with the URL you wish to convert into a QR code. 

    ```json
    {
      "url": "https://example.com"
    }
    ```

2. **Send the Request:** Use Postman to send this JSON payload as a POST request to the Lambda Function URL. Ensure the request header is set to `Content-Type: application/json`.

### Using the Frontend Application

1. **Navigate to the Application:** Open the deployed frontend application in your web browser.

2. **Enter the URL:** In the provided input field, enter the URL you wish to convert into a QR code.

3. **Customize Your QR Code:** (Optional) Use the available options to customize the appearance of your QR code, such as changing the pattern or colors.

4. **Generate and Retrieve the QR Code:**
    - Click the "Generate" button to create your QR code.
    - The QR code will be automatically generated, saved as a PNG file, and uploaded to the configured S3 bucket.
    - The application will then provide you with the URL to the uploaded QR code image, which you can download or share.

## License
This project is licensed under the MIT License - see the [MIT License](LICENSE.txt) file for details.