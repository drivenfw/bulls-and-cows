import React, { Component } from 'react'
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

class Countdown extends Component {
  state = { from: 3 }

  countdown = () => {
    const { from } = this.state

    if (from > 0) {
      this.setState(prevState => ({
        from: prevState.from - 1
      }))
    }
  }

  render() {
    const { from } = this.state
    console.log('Countdown#render: from = ', from)

    return (
      <StyledCountdown
        key={from}
        onAnimationEnd={this.countdown}
      >
        {from}
      </StyledCountdown>
    )
  }
}

export default Countdown

