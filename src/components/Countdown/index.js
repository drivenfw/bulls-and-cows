import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'


const pulse = props => keyframes`
  0% { 
    transform: scale(1);
    box-shadow: 0 0 0 0 ${props.theme.primaryColor1};
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 20px #fff;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 #fff;
  }
`

const StyledCountdown = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid ${props => props.theme.primaryColor};
  border-radius: 50%;
  font-size: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 1500ms;
`

const Countdown = ({ value }) =>
  <StyledCountdown key={value}>
    {value}
  </StyledCountdown>

Countdown.propTypes = {
  value: PropTypes.number.isRequired
}

export default Countdown

