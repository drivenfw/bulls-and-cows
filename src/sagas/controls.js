import { takeEvery } from 'redux-saga/effects'

import { tickHandler } from './clock'


function *playHandler(playAction) {
  yield *tickHandler()
}

export function *watchControlsActions() {
  yield takeEvery('CONTROLS_PLAY', playHandler)
}

