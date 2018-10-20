import React from 'react'
import { connect } from 'react-redux'

import Select, { Option } from 'components/Select'

import { switchLocale } from 'actions/settings'


const mapStateToProps = ({ settings: { locale } }) => ({
  locale  
})

const mapDispatchToProps = dispatch => ({
  onLocaleChange: locale => dispatch(switchLocale(locale))
})

const LocaleSwitcher = ({ locale, onLocaleChange }) =>
  <Select
    value={locale}
    onChange={onLocaleChange}
  >
    <Option value="en">English</Option>
    <Option value="ru">Русский</Option>
  </Select>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleSwitcher)

