import React, { useState } from 'react'
import { QRCodeProvider } from './contexts/QRCodeContext'
import QRCode from './components/QRCode'
import PatternSelector from './components/PatternSelector'
import OuterShapeSelector from './components/OuterShapeSelector'
import InnerShapeSelector from './components/InnerShapeSelector'
import QRCodeForm from './components/QRCodeForm'
import QRCodeDownload from './components/QRCodeDownload'

const App = () => {
  const [outerShape, setOuterShape] = useState('circle')
  const [outerColor, setOuterColor] = useState('#000000')
  const [innerShape, setInnerShape] = useState('circle')
  const [innerColor, setInnerColor] = useState('#000000')
  const [patternColor, setPatternColor] = useState('#000000')
  const [patternChoice, setPatternChoice] = useState('dots')

  return (
    <QRCodeProvider>
      <div className="container">

        <div className="qrCodeContainer">
          <QRCode
            outerShape={outerShape}
            outerColor={outerColor}
            innerShape={innerShape}
            innerColor={innerColor}
            patternChoice={patternChoice}
            patternColor={patternColor}
          />
        {/* <QRCodeForm
          outerShape={outerShape}
          outerColor={outerColor}
          innerShape={innerShape}
          innerColor={innerColor}
          patternChoice={patternChoice}
          patternColor={patternColor} 
          />  */}

          <QRCodeDownload />
      </div>
  

        <div className="styleChoices">
          <h2>Style Your QR Code</h2>
          <PatternSelector 
            setPatternChoice={setPatternChoice} 
            setPatternColor={setPatternColor}
            patternColor={patternColor} 
          />
          {/* <OuterShapeSelector 
            setOuterShape={setOuterShape} 
            setOuterColor={setOuterColor} 
            outerColor={outerColor} 
          />
          <InnerShapeSelector 
            setInnerShape={setInnerShape} 
            setInnerColor={setInnerColor} 
            innerColor={innerColor} 
            /> */}

            <QRCodeForm
            outerShape={outerShape}
            outerColor={outerColor}
            innerShape={innerShape}
            innerColor={innerColor}
            patternChoice={patternChoice}
            patternColor={patternColor} 
            /> 
        </div> 
      </div>
    </QRCodeProvider>
  )
}

export default App
