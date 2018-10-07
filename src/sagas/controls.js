import { delay } from 'redux-saga'
import { put, select, takeEvery } from 'redux-saga/effects'

import { tick } from '../actions/clock'


function *tickHandler() {
  const startTime = Date.now()

  yield delay(1000)

  const { controls: { playBtn } } = yield select()

  if (!playBtn) {
    const timeElapsed = Math.floor((Date.now() - startTime) / 1000)
    yield put(tick(timeElapsed))
  }
}

function *playHandler(playAction) {
  yield *tickHandler()
  console.log('playHandler') 
}

export function *watchControlsActions() {
  yield takeEvery('CLOCK_TICK', tickHandler)
  yield takeEvery('CONTROLS_PLAY', playHandler)
}

