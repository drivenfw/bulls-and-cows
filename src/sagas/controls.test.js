import { put } from 'redux-saga/effects'

import { initStage } from 'actions/game'
import { stopHandler } from './controls'


test('stopHandler', () => {
  const it = stopHandler()

  expect(it.next().value).toEqual(put(initStage()))

  expect(it.next()).toEqual({ done: true, value: undefined })
})

