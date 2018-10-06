import { delay } from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'


function *playHandler() {
  yield delay(2000)
  console.log('playHandler') 
}

export function *watchControlsActions() {
  yield takeEvery('CONTROLS_PLAY', playHandler)
}

