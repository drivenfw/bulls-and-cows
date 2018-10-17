import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Countdown from '../../components/Countdown'
import Display from '../../components/Display'

import { gameStages } from '../../reducers/game'

import './fireworks.css'


const Congrats = styled.div`
  width: 100%;
  height: 100%;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledGameDisplay = styled(Display)`
  margin-bottom: 10px;

  @media (min-width: 375px) {
    height: 180px;
  }

  @media (min-width: 550px) {
    width: 200px;
    height: 180px;
    margin-right: 20px;
    margin-bottom: 0;
    font-size: 1.25em;
  }

  @media (min-width: 850px) {
    width: 300px;
    height: 198px;
    margin-right: 30px;
    font-size: 1.375em;
  }
`

const GameDisplay = ({ 
  className, 
  content, 
  countdown,
  scroll,
  stage 
}) => {
  let center = false, displayContent

  if (stage === gameStages.INIT) {
    displayContent = content.join(' ')
  } else if (stage === gameStages.COUNTDOWN) {
    center = true
    displayContent = <Countdown value={countdown} />
  } else if (stage === gameStages.PLAY) {
    displayContent = content.map((line, index) =>
      <span key={index}>{index + 1}. {line}<br /></span>
    )
  } else if (stage === gameStages.CONGRATS) {
    displayContent = <Congrats className="fireworks">
      <div className="before"></div>
      You won!
      <div className="after"></div>
    </Congrats>
  }

  return (
    <StyledGameDisplay center={center} scroll={scroll}>
      {displayContent}
    </StyledGameDisplay>
  )
}

const mapStateToProps = ({
  display: { content, scroll },
  game: { countdown, stage }
}) => ({
  content, 
  countdown,
  scroll,
  stage
})

export default connect(mapStateToProps)(GameDisplay)

