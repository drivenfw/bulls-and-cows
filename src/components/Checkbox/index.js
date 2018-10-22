import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'


const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ theme }) => css`
    &:active ${Checkmark} {
      transform: scale(0.9);
      box-shadow: 0 0 2px 3px ${theme.primaryColor2};
    }
  `}
`

const Label = styled.label`
  color: ${props => props.theme.primaryColor};
  font-size: 1.4em;
  margin-right: 0.7em;
  cursor: inherit;
  user-select: none;

  @media (min-width: 850px) {
    font-size: 1.7em;
  }
`

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    border: 1px solid ${theme.primaryColor};
    box-shadow: 0 0 5px 3px ${theme.primaryColor2};
  `}

  @media (min-width: 850px) {
    width: 35px;
    height: 35px;
  }
`

const Checkmark = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2px;

  ${({ theme }) => css`
    background: ${theme.primaryColor};
    box-shadow: 0 0 3px 1px ${theme.primaryColor2};
  `}
`

class Checkbox extends Component {
  handleChange = () => {
    const { checked, onChange } = this.props

    onChange(!checked)
  }

  render() {
    const { checked, label } = this.props

    return (
      <StyledCheckbox onClick={this.handleChange}>
        <Label>{label}</Label>
        <Wrapper>
          {checked && <Checkmark />}
        </Wrapper>
      </StyledCheckbox>
    )
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Checkbox

