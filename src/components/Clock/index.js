import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import Carousel, { Value } from '../Carousel'

import { granularTime, handLength, paddedNumber } from 'helpers/clock'


const StyledClock = styled.div`
  height: 70px;
  border-radius: 50%;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: white;

  ${({ theme }) => css`
    border: 1px solid ${theme.primaryColor};
    box-shadow: 0 0 5px 3px ${theme.primaryColor2};
  `}
`

const StyledCarousel = styled(Carousel)`
  width: 20px;
  height: 30px;
  font-size: 1.5em;

  ${({ theme }) => css`
    border: 1px solid ${theme.primaryColor};
    box-shadow: 0 0 3px 1px ${theme.primaryColor2};
  `}

  @media (min-width: 375px) {
    width: 25px;
    height: 35px;
    font-size: 1.8em;
  }

  @media (min-width: 850px) {
    width: 30px;
    height: 40px;
    font-size: 2em;
  }
`

const StyledValue = styled(Value)`
  color: ${props => props.theme.primaryColor};
`

const CarouselGroup = styled.div`
  display: flex;
  & > ${StyledCarousel}:first-child {
    margin-right: 3px;
  }
`

const Counters = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;

  @media (min-width: 850px) {
    width: 250px;
  }
`

const SecondHand = styled.div`
  width: ${props => props.width}px;
  height: 1px;
  background: ${props => props.theme.primaryColor};
  box-shadow: -2px 2px 3px ${props => props.theme.primaryColor1};
  transform-origin: 100%;
  transform: 
    translateX(-50%)
    rotate(${props => 90 + props.rotate}deg);
  position: absolute;
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
    const { className } = this.props
    const { rootElWidth, rootElHeight } = this.state

    const time = granularTime(this.props.timeSecs)
    const hours = paddedNumber(time.hours, 2).split('').map(s => parseInt(s, 10))
    const mins = paddedNumber(time.mins, 2).split('').map(s => parseInt(s, 10))
    const angleDeg = 6 * time.secs
    const angleRad = Math.PI / 180 * angleDeg
    const width = handLength(rootElWidth, rootElHeight, angleRad)

    return (
      <StyledClock 
        innerRef={this.rootEl}
        className={className}
      >
        <Counters>
          <CarouselGroup>
            <StyledCarousel direction="down">
              <StyledValue key={hours[0]}>{hours[0]}</StyledValue>
            </StyledCarousel>
            <StyledCarousel direction="down">
              <StyledValue key={hours[1]}>{hours[1]}</StyledValue>
            </StyledCarousel>
          </CarouselGroup>
          <CarouselGroup>
            <StyledCarousel direction="down">
              <StyledValue key={mins[0]}>{mins[0]}</StyledValue>
            </StyledCarousel>
            <StyledCarousel direction="down">
              <StyledValue key={mins[1]}>{mins[1]}</StyledValue>
            </StyledCarousel>
          </CarouselGroup>
        </Counters>
        <SecondHand 
          rotate={angleDeg} 
          width={width}
        />
      </StyledClock>
    )
  }
}

Clock.defaultProps = {
  timeSecs: 0
}

export default Clock

