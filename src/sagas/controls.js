import { takeEvery } from 'redux-saga/effects'


function *playHandler() {
  console.log('playHandler') 
}

function *pauseHandler() {
  console.log('pauseHandler')
}

export function *watchControlsActions() {
  yield takeEvery('CONTROLS_PAUSE', pauseHandler)
  yield takeEvery('CONTROLS_PLAY', playHandler)
}

