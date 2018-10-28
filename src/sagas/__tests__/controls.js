import { put } from 'redux-saga/effects'

import { stopHandler } from 'sagas/controls'
import { initStage } from 'actions/game'


test('stopHandler', () => {
  const it = stopHandler()

  expect(it.next().value).toEqual(put(initStage()))

  expect(it.next()).toEqual({ done: true, value: undefined })
})

