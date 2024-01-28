import { useState } from 'react'
import Rounded from './assets/rounded.svg'
import horizontal from './assets/horizontal.svg'

const App = () => {
  const [outerShape, setOuterShape] = useState('circle')
  const [outerColor, setOuterColor] = useState('#000000')
  const [innerShape, setInnerShape] = useState('circle')
  const [innerColor, setInnerColor] = useState('#FF0000')
  const [color, setColor] = useState('#000000')
  const [patternColor, setPatternColor] = useState('#000000')

  const renderInnerShape = () => {
    switch (innerShape) {
      case 'circle':
        // return <circle cx="50" cy="50" r="25" fill={innerColor} />
        return <circle cx="42.5" cy="42.5" r="18" fill={innerColor} />
      case 'rectangle':
        // return <rect x="35" y="35" width="30" height="30" fill={innerColor} />
        return <rect x="27.5" y="27.5" width="30" height="30" fill={innerColor} />
      default:
        return null
    }
  }

  const renderOuterShape = () => {
    switch (outerShape) {
      case 'circle':
        return (
          <g>
            <circle cx="42.5" cy="42.5" r="32.5" stroke={color} strokeWidth="10" fill="none" />
            {renderInnerShape()}
          </g>
        )
      case 'rectangle':
        return (
          <g>
            <rect x="10" y="10" width="65" height="65" stroke={color} strokeWidth="10" fill="none" />
            {renderInnerShape()}
          </g>
        )
      case 'rounded-square':
        return (
          <g>
            <rect x="10" y="10" width="65" height="65" rx="12" ry="12" stroke={color} strokeWidth="10" fill="none" />
            {renderInnerShape()}
          </g>
        )
      default:
        return null
    }
  }

  return (
    <div className="container">
      <div className="qrCode">
        <img src={horizontal} alt="" />
        
        <div className="eyes">

          <div className="topRow">
            <svg width="100" height="100">
              {renderOuterShape()}
            </svg>
            <svg width="100" height="100">
              {renderOuterShape()}
            </svg>
          </div>

          <div className="bottomRow">
            <svg width="100" height="100">
              {renderOuterShape()}
            </svg>
          </div>
          
        </div>
       
      </div>

      <div className="styleChoices">

        <h2>Style Your QR Code</h2>

        <div className="patternsContainer">
          <label>Patterns</label>
          <div className="patterns">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="patternColorsContainer">
         
          <div className="defaultPatternColors">
            <label>Colors</label>
            <div className="defaultColorTabs">
              <span className="black" value="black"></span>
              <span className="blue" value="blue"></span>
              <span className="orange" value="orange"></span>
              {/* <span className="red" value="red"></span>
              <span className="green" value="green"></span>
              <span className="custom" value="custom"></span> */}
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
                <span className="circleShape">&nbsp;</span>
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
