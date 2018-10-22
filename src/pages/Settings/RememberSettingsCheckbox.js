import React from 'react'
import { connect } from 'react-redux'

import Checkbox from 'components/Checkbox'

import { toggleRememberSettings } from 'actions/settings'


const RememberSettings = ({
  remSettings, 
  onRemSettingsChange 
}) =>
  <Checkbox
    checked={remSettings}
    label="Remeber settings"
    onChange={onRemSettingsChange}
  />

const mapStateToProps = ({ settings: { rememberSettings } }) => ({
  remSettings: rememberSettings 
})

const mapDispatchToProps = dispatch => ({
  onRemSettingsChange: value => dispatch(toggleRememberSettings(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(RememberSettings)

