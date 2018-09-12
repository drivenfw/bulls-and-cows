import React, { Component } from 'react'
import styled from 'styled-components'

import { granularTime, handLength } from '../../helpers/clock'


const StyledClock = styled.div`
  height: 70px;
  border: 1px solid grey;
  border-radius: 50%;
  box-shadow: 0 0 5px 3px lightgrey;
  padding: 3px;
`

const SecondHand = styled.div`
  width: ${props => props.width}px;
  height: 1px;
  background:grey;
  transform-origin: 100%;
  transform: 
    translateX(${props => props.translateX}px) 
    translateY(34px) rotate(${props => 90 + props.rotate}deg);
`

class Clock extends Component {
  state = { secondHand: false }

  clockRef = React.createRef()

  componentDidMount() {
    this.width = this.clockRef.current.clientWidth
    this.height = this.clockRef.current.clientHeight

    this.setState({ secondHand: true })
  }

  render() {
    const { secondHand } = this.state

    const time = granularTime(this.props.timeSecs)
    const angleDeg = 6 * time.secs
    const angleRad = Math.PI / 180 * angleDeg
    const width = handLength(this.width, this.height, angleRad)
    const translateX = this.width / 2 - width - 5

    return (
      <StyledClock innerRef={this.clockRef}>
        {secondHand && 
          <SecondHand 
            rotate={angleDeg} 
            width={width}
            translateX={translateX}
          />
        }
      </StyledClock>
    )
  }
}

Clock.defaultProps = {
  timeSecs: 43
}

export default Clock

