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

  @media (min-width: 550px) {
    height: 100px;
  }
`

const StyledControls = styled(Controls)`
  margin-bottom: 10px;
`

const TopGroup = styled.div`
  @media (min-width: 550px) {
    display: flex;
    margin-bottom: 10px;

    & > ${StyledDisplay} {
      width: 160px;
      margin-right: 20px;
      margin-bottom: 0;
    }

    & > ${StyledControls} {
      margin-bottom: 0;
    }
  }
`

const StyledClock = styled(Clock)`
  @media (min-width: 375px) {
    height: 90px;
  }

  @media (min-width: 550px) {
    height: 70px;
  }
`

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
`

const Game = () =>
  <StyledGame>
    <TopGroup>
      <StyledDisplay />
      <StyledControls />
    </TopGroup>
    <StyledClock />
  </StyledGame>

export default Game

