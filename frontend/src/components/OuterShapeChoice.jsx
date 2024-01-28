import React from 'react'
import InnerShape from './InnerShapeChoice'

const OuterShape = ({ shape, color, innerShape, innerColor }) => {
  switch (shape) {
    case 'circle':
      return (
        <g>
          <circle cx="42.5" cy="42.5" r="32.5" stroke={color} strokeWidth="10" fill="none" />
          <InnerShape shape={innerShape} color={innerColor} />
        </g>
      )
    case 'rectangle':
      return (
        <g>
          <rect x="10" y="10" width="65" height="65" stroke={color} strokeWidth="10" fill="none" />
          <InnerShape shape={innerShape} color={innerColor} />
        </g>
      )
    case 'rounded-square':
      return (
        <g>
          <rect x="10" y="10" width="65" height="65" rx="12" ry="12" stroke={color} strokeWidth="10" fill="none" />
          <InnerShape shape={innerShape} color={innerColor} />
        </g>
      )
    default:
      return null
  }
}

export default OuterShape