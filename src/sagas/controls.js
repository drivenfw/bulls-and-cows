import { delay } from 'redux-saga'
import { put, select, takeEvery } from 'redux-saga/effects'

import { addContent } from '../actions/display'
import { 
  countdown, 
  initStage,
  countdownStage, 
  playStage,
  congratsStage
} from '../actions/game'
import { tickHandler } from './clock'
import { game } from './game'


function *playHandler() {
  const { game: { stage } } = yield select()

  if (stage === 0) { // TODO: replace numbers with constants
    yield put(countdownStage(3))
    yield delay(1500)
    yield put(countdown())
  } else {
    yield put(playStage())
    yield *tickHandler()
  }
}

function *stopHandler() {
  yield put(initStage())
}

const calcScroll = contentLength => {
  const lines = matchMedia('(min-width: 375px)').matches ? 6 : 5

  return contentLength > lines ? contentLength - lines : 0
}

function *submitHandler(action) {
  const result = game.guess(action.payload)
  const { display: { content } } = yield select()

  yield put(addContent({
    content: `${action.payload}: ${result}`,
    scroll: calcScroll(content.length + 1)
  }))

  if (result === '++++') {
    yield put(congratsStage())
  }
}

export function *watchControlsActions() {
  yield takeEvery('CONTROLS_PLAY', playHandler)
  yield takeEvery('CONTROLS_STOP', stopHandler)
  yield takeEvery('CONTROLS_SUBMIT', submitHandler)
}

