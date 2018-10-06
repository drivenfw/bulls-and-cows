import { all } from 'redux-saga/effects'

import { watchControlsActions } from './controls'


export default function *main() {
  yield all([watchControlsActions])
}

