import { delay } from 'redux-saga'
import { put, select, takeEvery } from 'redux-saga/effects'

import { tickHandler } from './clock'
import { countdown, playStage } from 'actions/game'
import { clear } from 'actions/display'
import { getOptions } from 'selectors'
import Game from 'app/Game'


export let game = null

export function *countdownHandler() {
  const { game: { countdown: cd }, settings } = yield select()

  if (cd > 0) {
    yield delay(1500)
    yield put(countdown())
  } else {
    game = new Game(getOptions({ settings }))
    game.start()

    yield put(clear())
    yield put(playStage())
    yield *tickHandler()
  }
}

function initHandler() {
  game = null
}

export function *watchGameActions() {
  yield takeEvery('GAME_COUNTDOWN', countdownHandler)
  yield takeEvery('GAME_INIT_STAGE', initHandler)
}

