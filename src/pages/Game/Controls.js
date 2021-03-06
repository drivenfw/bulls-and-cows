import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Button from 'components/Button'
import Input from 'components/Input'

import Pause from 'icons/Pause'
import Play from 'icons/Play'
import Stop from 'icons/Stop'
import Submit from 'icons/Submit'

import { pause, play, stop, submit } from 'actions/controls'
import { gameStages } from 'reducers/game'
import { getOptions } from 'selectors'


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

  @media (min-width: 550px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (min-width: 850px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`

class Controls extends Component {
  inputs = Array.from({ length: 4 }, () => React.createRef())

  resetInputs = () => {
    this.inputs.forEach(input => 
      input.current.value = 0
    )
  }

  playHandler = () => {
    const { stage, onPlay } = this.props

    if (stage === gameStages.INIT)
      this.resetInputs()
    onPlay()
  }

  stopHandler = () => {
    const { onStop } = this.props

    this.resetInputs()
    onStop()
  }

  submitHandler = () => {
    const { onSubmit } = this.props
    const value = this.inputs.map(input =>
      input.current.value
    ).join('')

    onSubmit(value)
  }

  render() {
    const {
      className,
      options,
      pauseDisabled,
      playBtn,
      playDisabled,
      stopDisabled,
      submitDisabled,
      onPause
    } = this.props

    return (
      <StyledControls className={className}>
        <ButtonGroup>
          {playBtn 
            ? <StyledButton
                disabled={playDisabled}
                scale={1.1} 
                onClick={this.playHandler}
              >
                <Play />
              </StyledButton>
            : <StyledButton
                disabled={pauseDisabled} 
                scale={1.1} 
                onClick={onPause}
              >
                <Pause />
              </StyledButton>
          }
          <StyledButton 
            disabled={stopDisabled}
            scale={1.1}
            onClick={this.stopHandler}
          >
            <Stop />
          </StyledButton>
        </ButtonGroup>
        <InputGroup>
          <Input ref={this.inputs[0]} options={options} />
          <Input ref={this.inputs[1]} options={options} />
          <Input ref={this.inputs[2]} options={options} />
          <Input ref={this.inputs[3]} options={options} />
        </InputGroup>
        <StyledButton
          disabled={submitDisabled}
          scale={1.1}
          onClick={this.submitHandler}
        >
          <Submit />
        </StyledButton>
      </StyledControls>
    )
  }
}

const mapStateToProps = ({ 
  controls: { 
    pauseDisabled, 
    playBtn, 
    playDisabled,
    stopDisabled, 
    submitDisabled 
  },
  game: { stage },
  settings
}) => ({
  options: getOptions({ settings }),
  pauseDisabled,
  playBtn, 
  playDisabled,
  stage,
  stopDisabled, 
  submitDisabled
})

const mapDispatchToProps = dispatch => ({
  onPause: () => dispatch(pause()),
  onPlay: () => dispatch(play()),
  onStop: () => dispatch(stop()),
  onSubmit: value => dispatch(submit(value)) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(Controls)

