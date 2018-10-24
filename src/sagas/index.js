import { all } from 'redux-saga/effects'

import { watchClockActions } from './clock'
import { watchControlsActions } from './controls'
import { watchGameActions } from './game'
import { watchSettingsActions } from './settings'


export default function *main() {
  yield all([
    watchClockActions(), 
    watchControlsActions(),
    watchGameActions(),
    watchSettingsActions()
  ])
}

