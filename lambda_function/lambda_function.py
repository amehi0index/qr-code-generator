import json
import boto3
import qrcode
import io
import base64
from PIL import Image, ImageDraw
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import (RoundedModuleDrawer, GappedSquareModuleDrawer, 
                                               HorizontalBarsDrawer, VerticalBarsDrawer, CircleModuleDrawer, SquareModuleDrawer)
from qrcode.image.styles.colormasks import SolidFillColorMask

import logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Initialize a session using Amazon S3
s3 = boto3.client('s3')

def style_inner_eyes(img, shape='default', color=(255, 255, 255)): 
    img_size = img.size[0]
    mask = Image.new('RGB', img.size, (0, 0, 0))
    draw = ImageDraw.Draw(mask)

    if shape == 'circle':
        # Draw circles for the eyes
        radius = 15
        draw.ellipse((60-radius, 60-radius, 60+radius, 60+radius), fill=color)
        draw.ellipse((img_size-60-radius, 60-radius, img_size-60+radius, 60+radius), fill=color)
        draw.ellipse((60-radius, img_size-60-radius, 60+radius, img_size-60+radius), fill=color)
    else:
        # Default to square if not circle
        draw.rectangle((60, 60, 90, 90), fill=color)
        draw.rectangle((img_size-90, 60, img_size-60, 90), fill=color)
        draw.rectangle((60, img_size-90, 90, img_size-60), fill=color)

    return mask

def style_outer_eyes(img, shape='default', color=(255, 255, 255)): 
    img_size = img.size[0]
    mask = Image.new('L', img.size, 0)  # Correct: Mask in 'L' mode for transparency
    draw = ImageDraw.Draw(mask)
    
    # Convert RGB color to a single greyscale value for 'L' mode mask
    greyscale_color = int(sum(color) / 3) if isinstance(color, tuple) else 255

    if shape == 'circle':
        radius = 35
        # Use greyscale_color for fill in 'L' mode mask
        draw.ellipse((40-radius, 40-radius, 40+radius, 40+radius), fill=greyscale_color)
        draw.ellipse((img_size-40-radius, 40-radius, img_size-40+radius, 40+radius), fill=greyscale_color)
        draw.ellipse((40-radius, img_size-40-radius, 40+radius, img_size-40+radius), fill=greyscale_color)
    else:
        draw.rectangle((40, 40, 110, 110), fill=greyscale_color)
        draw.rectangle((img_size-110, 40, img_size-40, 110), fill=greyscale_color)
        draw.rectangle((40, img_size-110, 110, img_size-40), fill=greyscale_color)

    return mask

def hex_to_rgb(hex_color):
    """Convert a hex color string to an RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def lambda_handler(event, context):
    logger.info(f"Event: {event}")

    # Parse the URL and user selections from the event
    body = json.loads(event['body'])
    url = body['url']
    patternChoice = body['patternChoice'] 
    patternColor = body['patternColor']
    innerShape = body['innerShape'] 
    innerColor = body['innerColor']
    outerShape = body['outerShape']
    outerColor = body['outerColor']

     # Convert hex colors to RGB tuples
    if isinstance(patternColor, str):
        patternColor = hex_to_rgb(patternColor)
    if isinstance(innerColor, str):
        innerColor = hex_to_rgb(innerColor)
    if isinstance(outerColor, str):
        outerColor = hex_to_rgb(outerColor)


    # Select the module drawer based on user input
    module_drawer = {
        'rounded': RoundedModuleDrawer(),
        'gap-squares': GappedSquareModuleDrawer(),
        'horizontal-bars': HorizontalBarsDrawer(),
        'vertical-bars': VerticalBarsDrawer(),
        'dots': CircleModuleDrawer(),
        'squares': SquareModuleDrawer()
    }.get(patternChoice, SquareModuleDrawer())  # Default to SquareModuleDrawer if not specified

    # Generate QR code with custom style
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
    qr.add_data(url)

    qr_img = qr.make_image(image_factory=StyledPilImage, 
                           module_drawer=module_drawer,
                           color_mask=SolidFillColorMask(back_color=(255, 255, 255), front_color=patternColor))

    # Apply custom eye styles
    inner_eye_mask = style_inner_eyes(qr_img, innerShape, innerColor)
    outer_eye_mask = style_outer_eyes(qr_img, outerShape, outerColor)

    # Before compositing, convert inner_eye_mask to 'L' if it's not already
    inner_eye_mask = inner_eye_mask.convert('L') if inner_eye_mask.mode != 'L' else inner_eye_mask

    # Composite the final image
    intermediate_img = Image.composite(qr_img, qr_img, inner_eye_mask)
    final_image = Image.composite(intermediate_img, intermediate_img, outer_eye_mask)

    # Save to BytesIO object
    img_bytes = io.BytesIO()
    final_image.save(img_bytes, format='PNG')
    img_bytes = img_bytes.getvalue()

    # Generate a unique filename and upload to S3
    filename = url.split("://")[1].replace("/", "_") + '.png'
    s3.put_object(Bucket='qr-code-generator-py', Key=filename, Body=img_bytes, ContentType='image/png', ACL='public-read', ContentDisposition='attachment')

    # Generate the URL of the uploaded QR code
    location = s3.get_bucket_location(Bucket='qr-code-generator-py')['LocationConstraint']
    region = '' if location is None else f'{location}' #if null/undefined=>''
    qr_code_url = f"https://s3-{region}.amazonaws.com/{'qr-code-generator-py'}/{filename}"

    return {
        'statusCode': 200,
        'headers': {
               "Content-Type": "application/json",
        #     'Access-Control-Allow-Origin': '*', 
        #     'Access-Control-Allow-Headers': 'Content-Type',
        #     'Access-Control-Allow-Methods': 'OPTIONS,POST'  
        },
        'body': json.dumps({'message': 'Custom styled QR code generated and uploaded to S3 bucket successfully!', 'qr_code_url': qr_code_url})
    }