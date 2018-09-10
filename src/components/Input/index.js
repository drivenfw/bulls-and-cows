import React from 'react'
import styled from 'styled-components'


const StyledInput = styled.div`
  width: 40px;
`

const UpButton = styled.div`
  font-size: 2em;
  text-align: center;
  transform: scaleX(1.5) scaleY(1.5);
  color: grey;
`

const ScrollingInput = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 70px;
  margin: 5px 0;
  border: 1px solid grey;
  border-radius: 2px;
  box-shadow: 0 0 5px 3px lightgrey;
`

const DownButton = styled.div`
  font-size: 2em;
  text-align: center;
  transform: scaleX(1.5) scaleY(1.5);
  color: grey;
`

const Input = () =>
  <StyledInput>
    <UpButton>▲</UpButton>
    <ScrollingInput />
    <DownButton>▼</DownButton>
  </StyledInput>

export default Input

