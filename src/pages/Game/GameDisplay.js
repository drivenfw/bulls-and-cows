import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Countdown from '../../components/Countdown'
import Display from '../../components/Display'


const Congrats = styled.div`
  font-size: 2em;
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

  if (stage === 0) {
    displayContent = content.join(' ')
  } else if (stage === 1) {
    center = true
    displayContent = <Countdown value={countdown} />
  } else if (stage === 2) {
    displayContent = content.map((line, index) =>
      <span key={index}>{index + 1}. {line}<br /></span>
    )
  } else if (stage === 3) {
    center = true
    displayContent = <Congrats>You won!</Congrats>
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

