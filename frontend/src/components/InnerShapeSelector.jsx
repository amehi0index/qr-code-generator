import React from 'react'

const InnerShapeSelector = ({ setInnerColor, setInnerShape, innerColor}) => {
  return (
    <>
        <div className="innerEyeContainer">
          <div className="innerShapeContainer">
            <label>Inner Shape</label>
            <div className="innerShapeBtns">
              <button onClick={() => setInnerShape('circle')}>
                <span className="circleShape"></span>
              </button>
              <button onClick={() => setInnerShape('rectangle')}>
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