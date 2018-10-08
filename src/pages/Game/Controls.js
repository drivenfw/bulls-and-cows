import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Button from '../../components/Button'
import Input from '../../components/Input'

import Pause from '../../icons/Pause'
import Play from '../../icons/Play'
import Stop from '../../icons/Stop'
import Submit from '../../icons/Submit'

import { pause, play, stop } from '../../actions/controls'


const StyledControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledButton = styled(Button)`
  width: 43px;
  height: 43px;
  border-radius: 50%;

  &:first-child {
    margin-bottom: 10px;
  }

  @media (min-width: 375px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 550px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 850px) {
    width: 50px;
    height: 50px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
`

const Controls = ({ 
  className,
  playBtn,
  stopDisabled,
  submitDisabled,
  onPause,
  onPlay,
  onStop
}) => {
  const inputOptions = Array.from({ length: 9 }, (_, i) => i + 1)

  return (
    <StyledControls className={className}>
      <ButtonGroup>
        {playBtn 
          ? <StyledButton scale={1.1} onClick={onPlay}>
              <Play />
            </StyledButton>
          : <StyledButton scale={1.1} onClick={onPause}>
              <Pause />
            </StyledButton>
        }
        <StyledButton 
          disabled={stopDisabled}
          scale={1.1}
          onClick={onStop}
        >
          <Stop />
        </StyledButton>
      </ButtonGroup>
      <InputGroup>
        <Input options={inputOptions} />
        <Input options={inputOptions} />
        <Input options={inputOptions} />
        <Input options={inputOptions} />
      </InputGroup>
      <StyledButton
        disabled={submitDisabled}
        scale={1.1}
      >
        <Submit />
      </StyledButton>
    </StyledControls>
  )
}

const mapStateToProps = ({ 
  controls: { playBtn, stopDisabled, submitDisabled }
}) => ({
  playBtn, stopDisabled, submitDisabled  
})

const mapDispatchToProps = dispatch => ({
  onPause: () => dispatch(pause()),
  onPlay: () => dispatch(play()),
  onStop: () => dispatch(stop())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(Controls)

