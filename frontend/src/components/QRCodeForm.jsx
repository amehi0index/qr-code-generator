import { useState } from 'react'

const QRCodeForm = ({
    patternColor,
    patternShape,
    outerColor,
    outerShape,
    innerColor,
    innerShape
}) => {

    const [url, setUrl] = useState('')
    const [qrCodeUrl, setQrCodeUrl] = useState('')

    const handleSubmit = async () => {

        e.preventDefault()
        const data = {
          url,
          patternShape,
          patternColor,
          innerShape,
          innerColor,
          outerShape,
          outerColor
        };
        
        // Send data to AWS Lambda
        try {
          const response = await axios.post('https://iky6zlh45iqkjzxcnyz7oqz34m0tkrli.lambda-url.us-west-2.on.aws/', { data });
          setQrCodeUrl(response.data.qr_code_url);
        } catch (error) {
          console.error('Error generating QR Code:', error);
        }
      }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="url" 
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            />
            <button className="downloadBtn" type="submit">Generate</button>
        </form>
    </div>
  )
}

export default QRCodeForm