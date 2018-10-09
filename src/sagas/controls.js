import { put, select, takeEvery } from 'redux-saga/effects'

import Game from '../app/Game'
import { tickHandler } from './clock'
import { addContent, clear } from '../actions/display'


let game = null

function *playHandler() {
  if (!game) {
    const { settings: { options } } = yield select()

    // TODO: use reselect
    game = new Game(Array.from({ length: options }, (_, i) => i + 1))
    game.start()

    yield put(clear())
  }

  yield *tickHandler()
}

function stopHandler() {
  game = null
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
    // TODO: Congratulate on winning
  }
}

export function *watchControlsActions() {
  yield takeEvery('CONTROLS_PLAY', playHandler)
  yield takeEvery('CONTROLS_STOP', stopHandler)
  yield takeEvery('CONTROLS_SUBMIT', submitHandler)
}

