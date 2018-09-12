import React from 'react'
import styled from 'styled-components'

import Clock from '../../components/Clock'
import Controls from './Controls'
import Display from '../../components/Display'


const StyledControls = styled(Controls)``
const StyledDisplay = styled(Display)``

const StyledGame = styled.div`
  & > ${StyledControls} {
    margin-bottom: 10px;
  }

  & > ${StyledDisplay} {
    margin-bottom: 10px;
  } 
`

const Game = () =>
  <StyledGame>
    <StyledDisplay />
    <StyledControls />
    <Clock />
  </StyledGame>

export default Game

