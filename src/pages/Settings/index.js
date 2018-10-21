import React from 'react'
import styled from 'styled-components'

import DifficultySwitcher from './DifficultySwitcher'
import LocaleSwitcher from './LocaleSwitcher'
import ThemeSwitcher from './ThemeSwitcher'


const StyledSettings = styled.div`
  & > * {
    margin-bottom: 20px;
  }
`

const Settings = () => 
  <StyledSettings>
    <LocaleSwitcher />
    <ThemeSwitcher />
    <DifficultySwitcher />
  </StyledSettings>

export default Settings

