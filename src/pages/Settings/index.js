import React from 'react'
import styled from 'styled-components'

import DifficultySwitcher from './DifficultySwitcher'
import LocaleSwitcher from './LocaleSwitcher'
import RememberSettingsCheckbox from './RememberSettingsCheckbox'
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
    <RememberSettingsCheckbox />
  </StyledSettings>

export default Settings

