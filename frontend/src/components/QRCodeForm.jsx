import { useState } from 'react'
import axios from 'axios'

const QRCodeForm = ({
    patternColor,
    patternChoice,
    innerColor,
    innerShape,
    outerColor,
    outerShape,
}) => {

    const [url, setUrl] = useState('')
    const [qrCodeUrl, setQrCodeUrl] = useState('')
  
    const handleSubmit = async (e) => {

        e.preventDefault()
        const payload = {
          url,
          patternChoice,
          patternColor,
          innerShape,
          innerColor,
          outerShape,
          outerColor
        }
        
        // Send data to AWS Lambda
        try {
          const response = await axios.post('https://iky6zlh45iqkjzxcnyz7oqz34m0tkrli.lambda-url.us-west-2.on.aws/', payload)

          console.log(response.data.qr_code_url)
          setQrCodeUrl(response.data.qr_code_url)
          setUrl('')

        } catch (error) {
          console.error('Error generating QR Code:', error)
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

        {qrCodeUrl && (
          <a href={qrCodeUrl} download className="downloadBtn">
            Download QR Code
          </a>
        )}
    </div>
  )
}

export default QRCodeForm