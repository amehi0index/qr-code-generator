import { useState } from 'react'
import axios from 'axios'
import { useQRCode } from '../contexts/QRCodeContext'

const QRCodeForm = ({
    patternColor,
    patternChoice,
    innerColor,
    innerShape,
    outerColor,
    outerShape,
}) => {

    const [url, setUrl] = useState('')
    // const [qrCodeUrl, setQrCodeUrl] = useState('')
    const { setQrCodeUrl, setLoading } = useQRCode()
  
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

        setLoading(true)
        
        // Send data to AWS Lambda
        try {
          const response = await axios.post('https://iky6zlh45iqkjzxcnyz7oqz34m0tkrli.lambda-url.us-west-2.on.aws/', payload)

          console.log(response.data.qr_code_url)
          setQrCodeUrl(response.data.qr_code_url)
          if(setQrCodeUrl){
            setLoading(false)
          }
          setUrl('')

        } catch (error) {
          console.error('Error generating QR Code:', error)
        }finally {
          setLoading(false) // Ensure loading is set to false in all cases
      }
    }

  return (
    <div className="styleChoicesFormContainer">
        <form onSubmit={handleSubmit}>
            <input 
              type="url" 
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button className="urlBtn" type="submit">Generate</button>
        </form>
    </div>
  )
}

export default QRCodeForm