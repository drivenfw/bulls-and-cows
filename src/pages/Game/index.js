import React from 'react'
import styled from 'styled-components'

import Clock from '../../components/Clock'
import Controls from './Controls'
import Display from '../../components/Display'


const StyledDisplay = styled(Display)`
  margin-bottom: 10px;

  @media (min-width: 375px) {
    height: 200px;
    font-size: 1.4em;
  }
`

const StyledControls = styled(Controls)`
  margin-bottom: 10px;
`

const StyledClock = styled(Clock)`
  @media (min-width: 375px) {
    height: 90px;
  }
`

const StyledGame = styled.div`
  min-height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start
`

const Game = () =>
  <StyledGame>
    <StyledDisplay />
    <StyledControls />
    <StyledClock />
  </StyledGame>

export default Game

