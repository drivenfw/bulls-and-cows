import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Select, { Option } from 'components/Select'

import { switchLocale } from 'actions/settings'

import enFlag from 'images/en.png'
import ruFlag from 'images/ru.png'


const StyledOption = styled(Option)`
  & > img {
    margin-right: 10px;
    width: 21px;
    height: 16px;

    @media (min-width: 850px) {
      width: 26px;
      height: 20px;
    }
  }
`

const LocaleSwitcher = ({ locale, onLocaleChange }) =>
  <Select
    value={locale}
    onChange={onLocaleChange}
  >
    <StyledOption value="en">
      <img src={enFlag} />
      English
    </StyledOption>
    <StyledOption value="ru">
      <img src={ruFlag} />
      Русский
    </StyledOption>
  </Select>

const mapStateToProps = ({ settings: { locale } }) => ({
  locale  
})

const mapDispatchToProps = dispatch => ({
  onLocaleChange: locale => dispatch(switchLocale(locale))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleSwitcher)

