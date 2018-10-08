import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Carousel, { Value } from '../Carousel'


const StyledCarousel = styled(Carousel)``

const StyledInput = styled.div`
  padding: 4px;
  overflow: hidden;

  @media (min-width: 375px) {
    & > ${StyledCarousel} {
      width: 40px;
      height: 75px;
      font-size: 2.5em;
    }
  }

  @media (min-width: 550px) {
    & > ${StyledCarousel} {
      width: 30px;
      height: 50px;
      font-size: 2em;
    }
  }

  @media (min-width: 850px) {
    & > ${StyledCarousel} {
      width: 45px;
      height: 80px;
      font-size: 3em;
    }
  }
`

const UpButton = styled.div`
  font-size: 1.8em;
  text-align: center;
  transform: scaleX(2.2) scaleY(0.9);
  cursor: pointer;
  user-select: none;
  transition: all 0.1s ease;

  ${({ theme }) => css`
    color: ${theme.primaryColor};
    text-shadow:
      0 2px 7px ${theme.primaryColor1},
      0 5px 5px ${theme.primaryColor2};
  `}

  &:active {
    transform: scaleX(2.2) scaleY(0.8) translateY(1px);
    text-shadow: 0 2px 3px rgba(0,0,0,0.3);
  }

  @media (min-width: 375px) {
    font-size: 2em;
  }

  @media (min-width: 550px) {
    font-size: 1.6em;
  }

  @media (min-width: 850px) {
    font-size: 2.3em;
  }
`

const DownButton = styled.div`
  font-size: 1.8em;
  text-align: center;
  transform: rotate(180deg) scaleX(2.2) scaleY(0.8);
  cursor: pointer;
  user-select: none;
  transition: all 0.1s ease;

  ${({ theme }) => css`
    color: ${theme.primaryColor};
    text-shadow:
      0 2px 7px ${theme.primaryColor1},
      0 5px 5px ${theme.primaryColor2};
  `}

  &:active {
    transform: rotate(180deg) scaleX(2.2) scaleY(0.8) translateY(1px);
    text-shadow: 0 2px 3px rgba(0,0,0,0.3);
  }

  @media (min-width: 375px) {
    font-size: 2em;
  }

  @media (min-width: 550px) {
    font-size: 1.6em;
  }

  @media (min-width: 850px) {
    font-size: 2.3em;
  }
`

class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = { direction: 'up', index: 0 }
    this.options = props.options
  }

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
        <StyledCarousel direction={direction}>
          {valueEl}
        </StyledCarousel>
        <DownButton onClick={this.down}>⌃</DownButton>
      </StyledInput>
    )
  }
}

Input.propTypes = {
  options: PropTypes.array
}

export default Input

