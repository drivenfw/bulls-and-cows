import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import Select, { Option } from 'components/Select'

import { switchDifficulty } from 'actions/settings'

import messages from './i18n'


const DifficultySwitcher = ({ difficulty, onDifficultyChange }) =>
  <Select
    value={difficulty}
    onChange={onDifficultyChange}
  >
    <Option value="1">
      <FormattedMessage {...messages.easierThanEasy} />
    </Option>
    <Option value="2">
      <FormattedMessage {...messages.easy} />
    </Option>
    <Option value="3">
      <FormattedMessage {...messages.medium} />
    </Option>
    <Option value="4">
      <FormattedMessage {...messages.hard} />
    </Option>
    <Option value="5">
      <FormattedMessage {...messages.harderThanHard} />
    </Option>
  </Select>

const mapStateToProps = ({ settings: { difficulty } }) => ({
  difficulty  
})

const mapDispatchToProps = dispatch => ({
  onDifficultyChange: difficulty => dispatch(switchDifficulty(difficulty))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DifficultySwitcher)

