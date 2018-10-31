import { delay } from 'redux-saga'
import { call, put, select, takeEvery } from 'redux-saga/effects'

import { addContent } from 'actions/display'
import { 
  countdown, 
  initStage,
  countdownStage, 
  playStage,
  congratsStage
} from 'actions/game'
import { play, stop, submit } from 'actions/controls'
import { tickHandler } from './clock'
import { game } from './game'

import { gameStages } from 'reducers/game'

import { calcScroll } from 'helpers/display'


export const COUNTDOWN_FROM = 3

export function *playHandler() {
  const { game: { stage } } = yield select()

  if (stage === gameStages.INIT) {
    yield put(countdownStage(COUNTDOWN_FROM))
    yield call(delay, 1500)
    yield put(countdown())
  } else {
    yield put(playStage())
    yield *tickHandler()
  }
}

export function *stopHandler() {
  yield put(initStage())
}

function *submitHandler(action) {
  const result = game.guess(action.payload)
  const { display: { content } } = yield select()

  yield put(addContent({
    content: `${action.payload} ${result}`,
    scroll: calcScroll(content.length + 2)
  }))

  if (result === 'BBBB') {
    yield put(congratsStage())
  }
}

export function *watchControlsActions() {
  yield takeEvery(play, playHandler)
  yield takeEvery(stop, stopHandler)
  yield takeEvery(submit, submitHandler)
}

