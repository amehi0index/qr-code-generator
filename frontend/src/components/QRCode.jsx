import React from 'react'
import OuterShape from './OuterShapeChoice'
import PatternChoice from './PatternChoice'

const QRCode = ({ outerShape, outerColor, innerShape, innerColor, patternChoice, patternColor }) => {
  return (
    <div className="qrCode">
      <PatternChoice patternChoice={patternChoice} patternColor={patternColor} />

      <div className="eyes">
        <div className="topRow">
          <svg width="100" height="100">
            <OuterShape shape={outerShape} color={outerColor} innerShape={innerShape} innerColor={innerColor} />
          </svg>
          <svg width="100" height="100">
            <OuterShape shape={outerShape} color={outerColor} innerShape={innerShape} innerColor={innerColor} />
          </svg>
        </div>
        <div className="bottomRow">
          <svg width="100" height="100">
            <OuterShape shape={outerShape} color={outerColor} innerShape={innerShape} innerColor={innerColor} />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default QRCode