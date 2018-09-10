import React from 'react'
import styled from 'styled-components'


const StyledDisplay = styled.div`
  height: 200px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: inset 0 0 3px 2px lightgrey;
  overflow-y: scroll;
`

const Display = ({ className }) =>
  <StyledDisplay className={className} />

export default Display

