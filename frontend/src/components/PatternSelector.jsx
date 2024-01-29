import React from 'react'

const PatternSelector = ({ setPatternChoice, setPatternColor, patternColor }) => {
    return (
        <>
            <div className="patternsContainer">
                <label>Patterns</label>
                <div className="patterns">
                    <span onClick={() => setPatternChoice('rounded')}>R</span>
                    <span onClick={() => setPatternChoice('gap-squares')}>GS</span>
                    <span onClick={() => setPatternChoice('horizontal-bars')}>HB</span>
                    <span onClick={() => setPatternChoice('vertical-bars')}>VB</span>
                    <span onClick={() => setPatternChoice('dots')}>D</span>
                    <span onClick={() => setPatternChoice('squares')}>SQ</span>
                </div>
            </div>

            <div className="patternColorsContainer">
                <div className="defaultPatternColors">
                    <label>Colors</label>
                    <div className="defaultColorTabs">
                    <span className="black" onClick={() => setPatternColor('#000000')}></span>
                    <span className="blue" onClick={() => setPatternColor('#2f1d9f')}></span>
                    <span className="orange" onClick={() => setPatternColor('#ff4400')}></span>
                    </div>
                </div>

                <div className="customPatternColor">
                    <label>Custom Color</label>
                    <input type="color" value={patternColor} onChange={e => setPatternColor(e.target.value)} />
                </div>
            </div>
        </>
    )
}

export default PatternSelector