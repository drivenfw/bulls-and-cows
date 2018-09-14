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
    translateY(34px) 
    rotate(${props => 90 + props.rotate}deg);
`

class Clock extends Component {
  state = { 
    rootElWidth: 1,
    rootElHeight: 1
  }

  rootEl = React.createRef()

  widthChange = () => {
    const { rootElWidth, rootElHeight } = this.state
    const { clientWidth, clientHeight } = this.rootEl.current

    if (rootElWidth !== clientWidth || rootElHeight !== clientHeight) {
      this.setState({
        rootElWidth: clientWidth,
        rootElHeight: clientHeight
      }) 
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.widthChange)
    this.setState({ 
      rootElWidth: this.rootEl.current.clientWidth,
      rootElHeight: this.rootEl.current.clientHeight
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.widthChange)
  }

  render() {
    const { rootElWidth, rootElHeight } = this.state

    const time = granularTime(this.props.timeSecs)
    const angleDeg = 6 * time.secs
    const angleRad = Math.PI / 180 * angleDeg
    const width = handLength(rootElWidth, rootElHeight, angleRad)
    const translateX = rootElWidth / 2 - width - 5

    return (
      <StyledClock innerRef={this.rootEl}>
        <SecondHand 
          rotate={angleDeg} 
          width={width}
          translateX={translateX}
        />
      </StyledClock>
    )
  }
}

Clock.defaultProps = {
  timeSecs: 43
}

export default Clock

