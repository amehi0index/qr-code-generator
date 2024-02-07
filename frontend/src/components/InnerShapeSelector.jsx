import { useState } from 'react'

const InnerShapeSelector = ({ setInnerColor, setInnerShape, innerColor}) => {
  const [selectedShape, setSelectedShape] = useState('');

  const handleShapeClick = (shape) => {
    setInnerShape(shape);
    setSelectedShape(shape);
  }

  return (
    <>
      <div className="innerEyeContainer">
        <div className="innerShapeContainer">
          <label>Inner Shape</label>
          <div className="innerShapeBtns">
            <button
              onClick={() => handleShapeClick('circle')}
              className={selectedShape === 'circle' ? 'selected' : ''}
            >
              <span className="circleShape"></span>
            </button>
            <button
              onClick={() => handleShapeClick('rectangle')}
              className={selectedShape === 'rectangle' ? 'selected' : ''}
            >
              <span className="rectangleShape"></span>
            </button>
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
    </>
  )
}

export default InnerShapeSelector