import json
import boto3
import qrcode
import io
import base64

import logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Initialize a session using Amazon S3
s3 = boto3.client('s3')

def lambda_handler(event, context):
    logger.info(f"Event: {event}")

    # Parse the URL from the event
    # body = json.loads(event.get('body', '{}'))
    body = json.loads(event['body'])
    url = body['url']
    
    # Generate QR code
    img = qrcode.make(url)
    img_bytes = io.BytesIO()
    img.save(img_bytes)
    img_bytes = img_bytes.getvalue()
    
    # Generate a unique filename
    filename = url.split("://")[1].replace("/", "_") + '.png'
    
    # Upload the QR code to the S3 bucket
    s3.put_object(Bucket='qr-code-generator-py', Key=filename, Body=img_bytes, ContentType='image/png', ACL='public-read')
    
    # Generate the URL of the uploaded QR code
    location = s3.get_bucket_location(Bucket='qr-code-generator-py')['LocationConstraint']
    region = '' if location is None else f'{location}'  #if region === undefined || region === null -> region = ''
    qr_code_url = f"https://s3-{region}.amazonaws.com/{'qr-code-generator-py'}/{filename}"
    #https://s3-us-west-2.amazonaws.com/qr-code-generator-py/ameliahill.me.png
    
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'QR code generated and uploaded to S3 bucket successfully!', 'qr_code_url': qr_code_url})
    }