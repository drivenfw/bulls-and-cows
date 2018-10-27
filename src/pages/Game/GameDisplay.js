import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FormattedMessage, intlShape } from 'react-intl'

import Countdown from 'components/Countdown'
import Display from 'components/Display'

import { gameStages } from 'reducers/game'

import messages from './i18n'

import { nbspPadding } from 'helpers/display'

import './fireworks.css'


const Message = styled.div`
  font-size: 2em; 
  text-shadow: 
    1px 1px 3px ${props => props.theme.primaryColor2},
    2px 2px 5px ${props => props.theme.primaryColor1};

  @media (min-width: 550px) {
    font-size: 1.9em;
  }

  @media (min-width: 850px) {
    font-size: 2.2em;
  }
`

const InitMsg = styled(Message)`
  width: 170px;
  line-height: 1.2em;
  text-align: ${props => props.textAlign || 'center'};

  @media (min-width: 550px) {
    width: 160px;
  }

  @media (min-width: 850px) {
    width: 200px;
  }
`

const Congrats = styled(Message)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  playBtn,
  scroll,
  stage 
}, {
  intl: { locale } 
}) => {
  let center = true, displayContent

  if (stage === gameStages.INIT) {
    displayContent = <div key="init">
        <InitMsg textAlign="left">
          <FormattedMessage {...messages.bulls} />
        </InitMsg>
        <InitMsg>
          <FormattedMessage {...messages.and} />
        </InitMsg>
        <InitMsg textAlign="right">
          <FormattedMessage {...messages.cows} />
        </InitMsg>
      </div>
  } else if (stage === gameStages.COUNTDOWN) {
    displayContent = <Countdown value={countdown} />
  } else if (stage === gameStages.PLAY) {
    center = false
    displayContent = playBtn
      ? <Message><FormattedMessage {...messages.pause} /></Message>
      : [
          <span key="title">
            <FormattedMessage {...messages['#']} />
            {nbspPadding(2)}
            <FormattedMessage {...messages.guess} />
            {locale === 'en' ? nbspPadding(5) : nbspPadding(5)}
            <FormattedMessage {...messages.result} />
          </span>,
          content.map((line, index) =>
            <span key={index}>
              {index + 1}.
              {locale === 'en' ? nbspPadding(1) : nbspPadding(3)}
              {line.split(' ')[0]}
              {locale === 'en' ? nbspPadding(7) : nbspPadding(4)}
              {line.split(' ')[1]}
              <br />
            </span>
          )
        ]

    center = playBtn
  } else if (stage === gameStages.CONGRATS) {
    displayContent = <Congrats className="fireworks">
      <div className="before"></div>
      <FormattedMessage {...messages.congrats} />
      <div className="after"></div>
    </Congrats>
  }

  return (
    <StyledGameDisplay center={center} scroll={scroll}>
      {displayContent}
    </StyledGameDisplay>
  )
}

GameDisplay.contextTypes = {
  intl: intlShape
}

const mapStateToProps = ({
  controls: { playBtn },
  display: { content, scroll },
  game: { countdown, stage }
}) => ({
  content, 
  countdown,
  playBtn,
  scroll,
  stage
})

export default connect(mapStateToProps)(GameDisplay)

