import { useState } from 'react'
import QRCode from './components/QRCode'

const App = () => {
  const [outerShape, setOuterShape] = useState('circle')
  const [outerColor, setOuterColor] = useState('#000000')
  const [innerShape, setInnerShape] = useState('circle')
  const [innerColor, setInnerColor] = useState('#FF0000')
  const [color, setColor] = useState('#000000')
  const [patternColor, setPatternColor] = useState('#000000')
  const [patternChoice, setPatternChoice] = useState('dots')

  
  return (
    <div className="container">
      <QRCode
        outerShape={outerShape}
        outerColor={outerColor}
        innerShape={innerShape}
        innerColor={innerColor}
        patternChoice={patternChoice}
        patternColor={patternColor}
      />

      <div className="styleChoices">

        <h2>Style Your QR Code</h2>

        <div className="patternsContainer">
          <label>Patterns</label>
          <div className="patterns">
            <span onClick={e => {setPatternChoice('rounded')}}>R</span>
            <span onClick={e => {setPatternChoice('gap-squares')}}>GS</span>
            <span onClick={e => {setPatternChoice('horizontal-bars')}}>HB</span>
            <span onClick={e => {setPatternChoice('vertical-bars')}}>VB</span>
            <span onClick={e => {setPatternChoice('dots')}}>D</span>
            <span onClick={e => {setPatternChoice('squares')}}>SQ</span>
          </div>
        </div>

        <div className="patternColorsContainer">
          <div className="defaultPatternColors">
            <label>Colors</label>
            <div className="defaultColorTabs">
              <span className="black" onClick={e => setPatternColor('#000000')}></span>
              <span className="blue" onClick={e => setPatternColor('#2f1d9f')}></span>
              <span className="orange" onClick={e => setPatternColor('#ff4400')}></span>
            </div>
          </div>

          <div className="customPatternColor">
            <label>Custom Color</label>
            <input type="color" value={patternColor} onChange={e => setPatternColor(e.target.value)} />
          </div>
        </div>

        <div className="outerEyeContainer">
          <div className="outerShapeContainer">
            <label>Outer Shape</label>
            <div className="outerShapeBtns">
              <button onClick={() => setOuterShape('circle')}>
                <span className="circleShape">&nbsp</span>
              </button>
              <button onClick={() => setOuterShape('rectangle')}>
                <span className="rectangleShape"></span>
              </button>
              <button onClick={() => setOuterShape('rounded-square')}>
                <span className="roundedShape"></span>
              </button>
            </div>
          </div>

          <div className="outerShapeColor">
            <label>Select Color</label>
            <input type="color" value={outerColor} onChange={e => setOuterColor(e.target.value)} />
          </div>
          
        </div>

        <div className="innerEyeContainer">
          <div className="innerShapeContainer">
            <label>Inner Shape</label>
            <div className="innerShapeBtns">
            <button onClick={() => setOuterShape('circle')}>
              <span className="circleShape"></span>
            </button>
            <button onClick={() => setOuterShape('rectangle')}>
              <span className="rectangleShape"></span></button>
            <button className="ghostBtn" disabled>
              <span></span>
            </button>
          </div>
        </div>

          <div className="innerShapeColor">
            <label>Select Color</label>
            <input type="color" value={innerColor} onChange={e => setInnerColor(e.target.value)} />
          </div>
      
        </div>
       
       <button className="downloadBtn">Download Your QR Code</button>
        
      </div>

    </div>
  )
}
export default App
