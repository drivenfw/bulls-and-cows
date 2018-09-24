import React from 'react'
import styled from 'styled-components'

import Carousel, { Value } from '../Carousel'


const StyledInput = styled.div`
  padding: 4px;
  overflow: hidden;
`

const UpButton = styled.div`
  font-size: 1.8em;
  text-align: center;
  transform: scaleX(2.2) scaleY(0.9);
  color: grey;
  cursor: pointer;
  user-select: none;
  text-shadow:
    0 2px 7px rgba(255,255,255,0.8),
    0 5px 5px rgba(0,0,0,0.4);
  transition: all 0.1s ease;

  &:active {
    transform: scaleX(2.2) scaleY(0.8) translateY(1px);
    text-shadow: 0 2px 3px rgba(0,0,0,0.3);
  }
`

const DownButton = styled.div`
  font-size: 1.8em;
  text-align: center;
  transform: rotate(180deg) scaleX(2.2) scaleY(0.8);
  color: grey;
  cursor: pointer;
  user-select: none;
  text-shadow:
    0 2px 7px rgba(255,255,255,0.8),
    0 5px 5px rgba(0,0,0,0.4);
  transition: all 0.1s ease;

  &:active {
    transform: rotate(180deg) scaleX(2.2) scaleY(0.8) translateY(1px);
    text-shadow: 0 2px 3px rgba(0,0,0,0.3);
  }
`

class Input extends React.Component {
  state = { direction: 'up', index: 0 }

  options = Array.from({ length: 9 }, (_, i) => i + 1)

  up = () => {
    this.setState(({ index }) => ({
      direction: 'down',
      index: index < this.options.length - 1 ? index + 1 : 0
    }))
  }

  down = () => {
    this.setState(({ index }) => ({
      direction: 'up',
      index: index > 0 ? index - 1 : this.options.length - 1
    })) 
  }

  get value() {
    return this.options[this.state.index]
  }

  render() {
    const { direction, index } = this.state
    const value = this.options[index]
    const valueEl = <Value key={value}>{value}</Value>

    return (
      <StyledInput>
        <UpButton onClick={this.up}>⌃</UpButton>
        <Carousel direction={direction}>
          {valueEl}
        </Carousel>
        <DownButton onClick={this.down}>⌃</DownButton>
      </StyledInput>
    )
  }
}

export default Input

