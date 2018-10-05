import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Button from '../../components/Button'
import Input from '../../components/Input'

// import Pause from '../../icons/Pause'
import Play from '../../icons/Play'
import Stop from '../../icons/Stop'
import Submit from '../../icons/Submit'


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
  startDisabled,
  stopDisabled,
  submitDisabled
}) => (
  <StyledControls className={className}>
    <ButtonGroup>
      <StyledButton
        disabled={startDisabled}
        scale={1.1}
      >
        <Play />
      </StyledButton>
      <StyledButton
        disabled={stopDisabled}
        scale={1.1}
      >
        <Stop />
      </StyledButton>
    </ButtonGroup>
    <InputGroup>
      <Input />
      <Input />
      <Input />
      <Input />
    </InputGroup>
    <StyledButton
      disabled={submitDisabled}
      scale={1.1}
    >
      <Submit />
    </StyledButton>
  </StyledControls>
)

const mapStateToProps = ({ 
  layout: { startDisabled, stopDisabled, submitDisabled }
}) => ({
  startDisabled, stopDisabled, submitDisabled  
})

export default connect(mapStateToProps)(Controls)

