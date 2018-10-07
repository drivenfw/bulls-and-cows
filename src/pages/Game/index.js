import React, { Component } from 'react'
import styled from 'styled-components'

import Controls from './Controls'
import GameClock from './GameClock'
import GameDisplay from './GameDisplay'


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
          <GameDisplay />
          <div>
            <StyledControls />
            {!desktop && <GameClock />}
          </div>
        </TopGroup>
        {desktop && <GameClock />}
      </StyledGame>
    )
  }
}

export default Game

