import { delay } from 'redux-saga'
import { put, select, takeLatest } from 'redux-saga/effects'

import { tick } from '../actions/clock'


export function *tickHandler() {
  const startTime = Date.now()

  yield delay(1000)

  const { controls: { pauseDisabled, playBtn } } = yield select()

  if (!playBtn && !pauseDisabled) {
    const timeElapsed = Math.floor((Date.now() - startTime) / 1000)
    yield put(tick(timeElapsed))
  }
}

export function *watchClockActions() {
  yield takeLatest('CLOCK_TICK', tickHandler)
}

