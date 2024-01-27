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
        return <circle cx="50" cy="50" r="25" fill={innerColor} />
      case 'rectangle':
        return <rect x="35" y="35" width="30" height="30" fill={innerColor} />
      default:
        return null
    }
  }

  const renderOuterShape = () => {
    switch (outerShape) {
      case 'circle':
        return (
          <g>
            <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="10" fill="none" />
            {renderInnerShape()}
          </g>
        )
      case 'rectangle':
        return (
          <g>
            <rect x="10" y="10" width="80" height="80" stroke={color} strokeWidth="10" fill="none" />
            {renderInnerShape()}
          </g>
        )
      case 'rounded-square':
        return (
          <g>
            <rect x="10" y="10" width="80" height="80" rx="12" ry="12" stroke={color} strokeWidth="10" fill="none" />
            {renderInnerShape()}
          </g>
        )
      default:
        return null
    }
  }

  return (
    <>
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

      <div className="styles">
        <div>
          <label>Outer Shape:</label>
          <select value={outerShape} onChange={e => setOuterShape(e.target.value)}>
            <option value="circle">Circle</option>
            <option value="rectangle">Rectangle</option>
            <option value="rounded-square">Rounded</option>
          </select>
          <input type="color" value={outerColor} onChange={e => setOuterColor(e.target.value)} />
        </div>
        <div>
          <label>Inner Shape:</label>
          <select value={innerShape} onChange={e => setInnerShape(e.target.value)}>
            <option value="circle">Circle</option>
            <option value="rectangle">Rectangle</option>
          </select>
          <input type="color" value={innerColor} onChange={e => setInnerColor(e.target.value)} />
        </div>
      </div>

    </>
  )
}
export default App
