import React from 'react'
import styled from 'styled-components'


const StyledInput = styled.div`
  width: 40px;
  padding: 5px;
  overflow: hidden;
`

const UpButton = styled.div`
  font-size: 2em;
  text-align: center;
  transform: scaleX(2.2) scaleY(0.9);
  color: grey;
  cursor: pointer;
  user-select: none;
  text-shadow:
    0 2px 7px rgba(255,255,255,0.8),
    0 5px 5px rgba(0,0,0,0.4);
  transition: all 0.1s ease;

  &:active {
    transform: scaleX(2.2) scaleY(0.8) translateY(1px);
    text-shadow: 0 2px 3px rgba(0,0,0,0.3);
  }
`

const ScrollingInput = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 70px;
  border: 1px solid grey;
  border-radius: 2px;
  box-shadow: 0 0 5px 3px lightgrey;
`

const DownButton = styled.div`
  font-size: 2em;
  text-align: center;
  transform: rotate(180deg) scaleX(2.2) scaleY(0.8);
  color: grey;
  cursor: pointer;
  user-select: none;
  text-shadow:
    0 2px 7px rgba(255,255,255,0.8),
    0 5px 5px rgba(0,0,0,0.4);
  transition: all 0.1s ease;

  &:active {
    transform: rotate(180deg) scaleX(2.2) scaleY(0.8) translateY(1px);
    text-shadow: 0 2px 3px rgba(0,0,0,0.3);
  }
`
const Input = () =>
  <StyledInput>
    <UpButton>⌃</UpButton>
    <ScrollingInput />
    <DownButton>⌃</DownButton>
  </StyledInput>

export default Input

