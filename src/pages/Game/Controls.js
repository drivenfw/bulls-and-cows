import React from 'react'
import styled from 'styled-components'

import Input from '../../components/Input'


const StyledControls = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 338px);
`

const Controls = () => 
  <StyledControls>
    <Input />
    <Input />
    <Input />
    <Input />
  </StyledControls>

export default Controls

