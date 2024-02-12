import React from 'react'
import { Tooltip } from 'react-tooltip'

const PatternSelector = ({ setPatternChoice, setPatternColor, patternColor }) => {
    return (
        <>
            <div className="patternsContainer">
                <label>Patterns</label>
                <div className="patterns">
                    <span 
                        data-tooltip-id="my-tooltip" 
                        data-tooltip-content="Rounded Pattern" 
                        data-tooltip-place="top-start"
                        onClick={() => setPatternChoice('rounded')}>R
                    </span>
                    <span 
                        data-tooltip-id="my-tooltip" 
                        data-tooltip-content="Gap Squares" 
                        data-tooltip-place="top-start"
                        onClick={() => setPatternChoice('gap-squares')}>GS
                    </span>
                    <span 
                        data-tooltip-id="my-tooltip" 
                        data-tooltip-content="Horizontal Bars" 
                        data-tooltip-place="top-start"
                        onClick={() => setPatternChoice('horizontal-bars')}>HB
                    </span>
                    <span 
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Vertical Bars" 
                        data-tooltip-place="top-start"
                        onClick={() => setPatternChoice('vertical-bars')}>VB
                    </span>
                    <span 
                        data-tooltip-id="my-tooltip" 
                        data-tooltip-content="Dots Pattern"
                        data-tooltip-place="top-start"
                        onClick={() => setPatternChoice('dots')}>D
                    </span>
                    <span 
                        data-tooltip-id="my-tooltip" 
                        data-tooltip-content="Square Pattern" 
                        data-tooltip-place="top-start"
                        onClick={() => setPatternChoice('squares')}>SQ
                    </span>
                    <Tooltip 
                        id="my-tooltip" 
                        style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222" }}
                        openOnClick="false"
                        openEvents={{ mouseenter: true }}
                        closeEvents={{ mouseleave: true }}
                    />
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
                    <label>Custom</label>
                    <input 
                        type="color" 
                        value={patternColor} 
                        data-tooltip-id="color-tooltip" 
                        data-tooltip-content="Customize your color" 
                        data-tooltip-place="top-start"
                        onChange={e => setPatternColor(e.target.value)} 
                    />
                  
                    <Tooltip 
                        id="color-tooltip" 
                        style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222" }}
                        openOnClick="false"
                        openEvents={{ mouseenter: true }}
                        closeEvents={{ mouseleave: true }}
                    />
                </div>
            </div>
        </>
    )
}

export default PatternSelector