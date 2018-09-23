import React from 'react'
import styled from 'styled-components'

import Clock from '../../components/Clock'
import Controls from './Controls'
import Display from '../../components/Display'


const StyledControls = styled(Controls)``
const StyledDisplay = styled(Display)``

const StyledGame = styled.div`
  height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Game = () =>
  <StyledGame>
    <StyledDisplay />
    <StyledControls />
    <Clock />
  </StyledGame>

export default Game

