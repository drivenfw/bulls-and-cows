import React from 'react'
import styled from 'styled-components'

import LocaleSwitcher from './LocaleSwitcher'
import ThemeSwitcher from './ThemeSwitcher'


const StyledSettings = styled.div``

const Settings = () => 
  <StyledSettings>
    <LocaleSwitcher />
    <ThemeSwitcher />
  </StyledSettings>

export default Settings

