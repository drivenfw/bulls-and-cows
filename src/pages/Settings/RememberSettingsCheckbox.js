import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import Checkbox from 'components/Checkbox'

import { toggleRememberSettings } from 'actions/settings'

import messages from './i18n'


const RememberSettings = ({
  intl: { formatMessage },
  remSettings, 
  onRemSettingsChange 
}) =>
  <Checkbox
    checked={remSettings}
    label={formatMessage(messages.rememberSettings)}
    onChange={onRemSettingsChange}
  />

const mapStateToProps = ({ settings: { rememberSettings } }) => ({
  remSettings: rememberSettings 
})

const mapDispatchToProps = dispatch => ({
  onRemSettingsChange: value => dispatch(toggleRememberSettings(value))
})

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps  
  )(RememberSettings)
)

