import React, { Component } from 'react'
import styled from 'styled-components'

import Clock from '../../components/Clock'
import Controls from './Controls'
import Display from '../../components/Display'


const StyledDisplay = styled(Display)`
  margin-bottom: 10px;

  @media (min-width: 375px) {
    height: 200px;
  }

  @media (min-width: 550px) {
    width: 180px;
    height: 180px;
    margin-right: 20px;
    margin-bottom: 0;
    font-size: 1.1em;
  }

  @media (min-width: 850px) {
    width: 300px;
    height: 200px;
    margin-right: 30px;
    font-size: 1.4em;
  }
`

const StyledControls = styled(Controls)`
  margin-bottom: 10px;

  @media (min-width: 550px) {
    margin-bottom: 0;
  }
`

const TopGroup = styled.div`
  @media (min-width: 550px) {
    display: flex;
    align-items: center;
  }
`

const StyledClock = styled(Clock)`
  @media (min-width: 375px) {
    height: 90px;
  }

  @media (min-width: 550px) {
    height: 70px;
  }

  @media (min-width: 850px) {
    height: 90px;
    margin-top: 30px;
  }
`

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
`

class Game extends Component {
  state = {
    desktop: true
  }

  checkMediaQuery = () => {
    this.setState({ 
      desktop: window.matchMedia("(min-width: 850px)").matches
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkMediaQuery)
    this.checkMediaQuery()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkMediaQuery)
  }

  render() {
    const { desktop } = this.state

    return (
      <StyledGame>
        <TopGroup>
          <StyledDisplay>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </StyledDisplay>
          <div>
            <StyledControls />
            {!desktop && <StyledClock />}
          </div>
        </TopGroup>
        {desktop && <StyledClock />}
      </StyledGame>
    )
  }
}

export default Game

