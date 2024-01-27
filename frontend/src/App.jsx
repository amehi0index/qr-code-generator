import { useState } from 'react'
import Rounded from './assets/rounded.svg'
import horizontal from './assets/horizontal.svg'

const App = () => {
  const [outerShape, setOuterShape] = useState('circle')
  const [outerColor, setOuterColor] = useState('#000000')
  const [innerShape, setInnerShape] = useState('circle')
  const [innerColor, setInnerColor] = useState('#FF0000')
  const [color, setColor] = useState('#000000')

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

        <h1>Style Your QR Code</h1>

        <div className="patterns">
          <label>Patterns</label>
          <div className="patternContainer">
            <span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>

        <div className="colors">
          <label>Colors</label>
        </div>

        <div className="outerEye">
         
            <label>Outer Shape</label>
            <select value={outerShape} onChange={e => setOuterShape(e.target.value)}>
              <option value="circle">Circle</option>
              <option value="rectangle">Rectangle</option>
              <option value="rounded-square">Rounded</option>
            </select>
            <input type="color" value={outerColor} onChange={e => setOuterColor(e.target.value)} />
          
        </div>

        < div className="innerEye">
            <label>Inner Shape</label>
            <select value={innerShape} onChange={e => setInnerShape(e.target.value)}>
              <option value="circle">Circle</option>
              <option value="rectangle">Rectangle</option>
            </select>
            <input type="color" value={innerColor} onChange={e => setInnerColor(e.target.value)} />
        </div>
       
       <button className="downloadBtn">Download Your QR Code</button>
        
      </div>

    </div>
  )
}
export default App
