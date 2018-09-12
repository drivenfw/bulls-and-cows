import React from 'react'
import styled from 'styled-components'

import Input from '../../components/Input'


const StyledControls = styled.div`
  display: flex;
  justify-content: center;
`

const Controls = ({ className }) => 
  <StyledControls className={className}>
    <Input />
    <Input />
    <Input />
    <Input />
  </StyledControls>

export default Controls

