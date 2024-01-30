import React, { useState } from 'react'
import QRCode from './components/QRCode'
import PatternSelector from './components/PatternSelector'
import OuterShapeSelector from './components/OuterShapeSelector'
import InnerShapeSelector from './components/InnerShapeSelector'
import QRCodeForm from './components/QRCodeForm'

const App = () => {
  const [outerShape, setOuterShape] = useState('circle')
  const [outerColor, setOuterColor] = useState('#000000')
  const [innerShape, setInnerShape] = useState('circle')
  const [innerColor, setInnerColor] = useState('#FF0000')
  const [patternColor, setPatternColor] = useState('#000000')
  const [patternChoice, setPatternChoice] = useState('dots')

  console.log('patternColor', patternColor)

  return (
    <div className="container">
      {/* <div className="qrCodeContainer"> */}

      <div className="qrCodeContainer">
        <QRCode
          outerShape={outerShape}
          outerColor={outerColor}
          innerShape={innerShape}
          innerColor={innerColor}
          patternChoice={patternChoice}
          patternColor={patternColor}
        />
       <QRCodeForm
        outerShape={outerShape}
        outerColor={outerColor}
        innerShape={innerShape}
        innerColor={innerColor}
        patternChoice={patternChoice}
        patternColor={patternColor} 
        /> 

    </div>
 

      <div className="styleChoices">
        <h2>Style Your QR Code</h2>
        <PatternSelector 
          setPatternChoice={setPatternChoice} 
          setPatternColor={setPatternColor}
          patternColor={patternColor} 
        />
        <OuterShapeSelector 
          setOuterShape={setOuterShape} 
          setOuterColor={setOuterColor} 
          outerColor={outerColor} 
        />
        <InnerShapeSelector 
          setInnerShape={setInnerShape} 
          setInnerColor={setInnerColor} 
          innerColor={innerColor} 
          />
        {/* <button className="downloadBtn">Download Your QR Code</button> */}
      </div>
    </div>
  )
}

export default App
