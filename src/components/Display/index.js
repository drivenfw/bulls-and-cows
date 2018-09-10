import React from 'react'
import styled from 'styled-components'


const StyledDisplay = styled.div`
  height: 200px;
  padding: 10px 15px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: inset 0 0 3px 2px lightgrey;
  color: #4D4D4D;
`

const Inner = styled.div`
  height: 100%;
  overflow-y: scroll;
  font-size: 1.2em;
  line-height: 1.5em;
`

const Display = ({ children, className }) =>
  <StyledDisplay className={className}>
    <Inner>
      {children}
    </Inner>
  </StyledDisplay>

export default Display

