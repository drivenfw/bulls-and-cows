import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

// TODO: text-shadow, width > height - ?

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
  animation: ${pulse} 1500ms 500ms;
`

const PulsingStyledCountdown = styled(StyledCountdown)`
  animation: ${pulse} 1500ms;
`

class Countdown extends Component {
  state = { pulse: false }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.prevValue) {
      return {
        prevValue: props.value,
        value: props.value
      }
    }

    return null
  }

  countdown = () => {
    const { value } = this.state
    const { onFinish } = this.props

    if (value > 1) {
      this.setState(prevState => ({
        pulse: true,
        value: prevState.value - 1
      }))
    } else {
      this.setState({ value: 'Go!' })
    }
  }

  render() {
    const { pulse, value } = this.state

    const Content = pulse
      ? PulsingStyledCountdown
      : StyledCountdown

    return (
      <Content
        key={value}
        onAnimationEnd={this.countdown}
      >
        {value}
      </Content>
    )
  }
}

Countdown.propTypes = {
  value: PropTypes.number,
  onFinish: PropTypes.func.isRequired
}

Countdown.defaultProps = { 
  value: 3
}

export default Countdown

