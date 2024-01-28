import React from 'react'
import Rounded from '../patterns/Rounded'
import Dots from '../patterns/Dots'
import GapSquares from '../patterns/GapSquares'
import HorizontalBars from '../patterns/HorizontalBars'
import VerticalBars from '../patterns/VerticalBars'
import Squares from '../patterns/Squares'

const PatternChoice = ({ patternChoice, patternColor }) => {

    switch (patternChoice) {
        case 'rounded':
            return <Rounded  color={patternColor} />
        case 'gap-squares':
            return <GapSquares color={patternColor} />
        case 'horizontal-bars':
            return <HorizontalBars  color={patternColor}/>
        case 'vertical-bars':
            return <VerticalBars  color={patternColor}/>
        case 'dots':
            return <Dots color={patternColor}/>
        case 'squares':
            return <Squares color={patternColor} />
        default:
            return null
    }
}

export default PatternChoice