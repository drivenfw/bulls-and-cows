import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Select, { Option } from 'components/Select'

import { switchTheme } from 'actions/settings'

import themes from 'themes'


const MainThemeOption = styled(Option)`
  background: linear-gradient(
    to right bottom,
    ${themes.main.primaryColor},
    ${themes.main.primaryColor1} 30%,
    ${themes.main.primaryColor2})
`

const RedThemeOption = styled(Option)`
  background: linear-gradient(
    to right bottom,
    ${themes.red.primaryColor},
    ${themes.red.primaryColor1} 30%,
    ${themes.red.primaryColor2})
`

const OrangeThemeOption = styled(Option)`
  background: linear-gradient(
    to right bottom,
    ${themes.orange.primaryColor},
    ${themes.orange.primaryColor1} 30%,
    ${themes.orange.primaryColor2})
`

const YellowThemeOption = styled(Option)`
  background: linear-gradient(
    to right bottom,
    ${themes.yellow.primaryColor},
    ${themes.yellow.primaryColor1} 30%,
    ${themes.yellow.primaryColor2})
`

const GreenThemeOption = styled(Option)`
  background: linear-gradient(
    to right bottom,
    ${themes.green.primaryColor},
    ${themes.green.primaryColor1} 30%,
    ${themes.green.primaryColor2})
`

const BlueThemeOption = styled(Option)`
  background: linear-gradient(
    to right bottom,
    ${themes.blue.primaryColor},
    ${themes.blue.primaryColor1} 30%,
    ${themes.blue.primaryColor2})
`

const IndigoThemeOption = styled(Option)`
  background: linear-gradient(
    to right bottom,
    ${themes.indigo.primaryColor},
    ${themes.indigo.primaryColor1} 30%,
    ${themes.indigo.primaryColor2})
`

const ThemeSwitcher = ({ theme, onThemeChange }) =>
  <Select
    value={theme}
    onChange={onThemeChange}
  >
    <MainThemeOption value="main" />
    <RedThemeOption value="red" />
    <OrangeThemeOption value="orange" />
    <YellowThemeOption value="yellow" />
    <GreenThemeOption value="green" />
    <BlueThemeOption value="blue" />
    <IndigoThemeOption value="indigo" />
  </Select>

const mapStateToProps = ({ settings: { theme } }) => ({
  theme  
})

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(switchTheme(theme))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSwitcher)

