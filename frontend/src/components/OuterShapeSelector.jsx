import React from 'react'

const OuterShapeSelector = ({ setOuterShape, setOuterColor, outerColor }) => {
  return (
    <>
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
    </>
  )
}

export default OuterShapeSelector