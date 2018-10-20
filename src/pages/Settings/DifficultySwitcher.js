import React from 'react'
import { connect } from 'react-redux'

import Select, { Option } from 'components/Select'

import { switchDifficulty } from 'actions/settings'


const DifficultySwitcher = ({ difficulty, onDifficultyChange }) =>
  <Select
    value={difficulty}
    onChange={onDifficultyChange}
  >
    <Option value="1">
      Easier than easy
    </Option>
    <Option value="2">
      Easy
    </Option>
    <Option value="3">
      Medium
    </Option>
    <Option value="4">
      Hard
    </Option>
    <Option value="5">
      Harder than hard
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

