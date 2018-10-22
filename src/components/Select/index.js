import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Carousel, { Value } from 'components/Carousel'


export const Option = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledSelect = styled.div`
  display: flex;
  align-items: center; 
  padding: 3px;
  overflow: hidden;


  ${({ disabled, theme }) => css`
    opacity: ${disabled && 0.5};

    & > ${Button} {
      cursor: ${disabled ? 'auto' : 'pointer'};
    }

    & > ${LeftButton}:active {
      ${disabled && css`
        transform: rotate(-90deg) scaleX(2.2) scaleY(0.9);
        text-shadow:
          0 2px 7px ${theme.primaryColor1},
          0 5px 5px ${theme.primaryColor2};
      `}
    }

    & > ${RightButton}:active {
      ${disabled && css`
        transform: rotate(90deg) scaleX(2.2) scaleY(0.9);
        text-shadow:
          0 2px 7px ${theme.primaryColor1},
          0 5px 5px ${theme.primaryColor2};
      `}
    }
  `}
`

const StyledCarousel = styled(Carousel)`
  width: 215px;
  height: 33px;
  font-size: 1.4em;
  border-radius: 5px;

  @media (min-width: 850px) {
    width: 300px;
    height: 40px;
    font-size: 1.7em;
  }
`

const Button = styled.div`
  font-size: 1.8em;
  text-align: center;
  user-select: none;
  transition: all 0.1s ease;

  ${({ theme }) => css`
    color: ${theme.primaryColor};
    text-shadow:
      0 2px 7px ${theme.primaryColor1},
      0 5px 5px ${theme.primaryColor2};
  `}

  @media (min-width: 850px) {
    font-size: 2.2em;
  }
`

const LeftButton = styled(Button)`
  margin-right: 5px;
  transform: rotate(-90deg) scaleX(2.2) scaleY(0.9);

  &:active {
    transform: rotate(-90deg) scaleX(2.2) scaleY(0.8) translateY(1px);
    text-shadow: 0 2px 3px rgba(0,0,0,0.3);
  }
`

const RightButton = styled(Button)`
  margin-left: 5px;
  transform: rotate(90deg) scaleX(2.2) scaleY(0.9);

  &:active {
    transform: rotate(90deg) scaleX(2.2) scaleY(0.9) translateY(1px);
    text-shadow: 0 2px 3px rgba(0,0,0,0.3);
  }
`

class Select extends Component {
  direction = 'right'

  left = () => {
    const { children, disabled, value, onChange } = this.props

    if (!disabled) {
      const childArray = React.Children.toArray(children)
      const index = childArray.findIndex(child => child.props.value === value)
      const nextIndex = index > 0 ? index - 1 : childArray.length - 1

      this.direction = 'left'
      onChange(childArray[nextIndex].props.value)
    }
  } 

  right = () => {
    const { children, disabled, value, onChange } = this.props

    if (!disabled) {
      const childArray = React.Children.toArray(children)
      const index = childArray.findIndex(child => child.props.value === value)
      const nextIndex = index < childArray.length - 1 ? index + 1 : 0

      this.direction = 'right'
      onChange(childArray[nextIndex].props.value)
    }
  }

  render() {
    const { children, disabled, value } = this.props
    const selected = React.Children.toArray(children)
      .find(child => child.props.value === value)

    return (
      <StyledSelect disabled={disabled}>
        <LeftButton onClick={this.left}>⌃</LeftButton>
        <StyledCarousel direction={this.direction}>
          <Value key={value}>{selected}</Value>
        </StyledCarousel>
        <RightButton onClick={this.right}>⌃</RightButton>
      </StyledSelect>
    )
  }
}

Select.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Select

