import React from 'react'
import styled from 'styled-components'

import Display from '../../components/Display'
import Controls from './Controls'


const StyledDisplay = styled(Display)``

const StyledGame = styled.div`
  & > ${StyledDisplay} {
    margin-bottom: 20px;
  } 
`

const Game = () =>
  <StyledGame>
    <StyledDisplay />
    <Controls />
  </StyledGame>

export default Game

