import React from 'react'
import OuterShape from './OuterShapeChoice'
import PatternChoice from './PatternChoice'

const QRCode = ({ outerShape, outerColor, innerShape, innerColor, patternChoice, patternColor }) => {
  return (
    <div className="qrCode">
  

      <div className="eyes">
        <PatternChoice patternChoice={patternChoice} patternColor={patternColor} />
        <div className="topRow">
          <svg width="100" height="100">
            {/* <OuterShape shape={outerShape} color={outerColor} innerShape={innerShape} innerColor={innerColor} /> */}
            <OuterShape shape={outerShape} color={patternColor} innerShape={innerShape} innerColor={innerColor} />
          </svg>
          <svg width="100" height="100">
            {/* <OuterShape shape={outerShape} color={outerColor} innerShape={innerShape} innerColor={innerColor} /> */}
            <OuterShape shape={outerShape} color={patternColor} innerShape={innerShape} innerColor={innerColor} />
          </svg>
        </div>
        <div className="bottomRow">
          <svg width="100" height="100">
            {/* <OuterShape shape={outerShape} color={outerColor} innerShape={innerShape} innerColor={innerColor} /> */}
            <OuterShape shape={outerShape} color={patternColor} innerShape={innerShape} innerColor={innerColor} />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default QRCode