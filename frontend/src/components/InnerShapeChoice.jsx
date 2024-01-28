import React from 'react'

const InnerShapeChoice = ({ shape, color }) => {
  switch (shape) {
    case 'circle':
      // return <circle cx="50" cy="50" r="25" fill={innerColor} />
      return <circle cx="42.5" cy="42.5" r="18" fill={color} />
    case 'rectangle':
      // return <rect x="35" y="35" width="30" height="30" fill={innerColor} />
      return <rect x="27.5" y="27.5" width="30" height="30" fill={color} />
    default:
      return null
    }   
}

export default InnerShapeChoice