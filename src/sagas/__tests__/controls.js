import { delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'

import { tickHandler } from 'sagas/clock'
import { 
  COUNTDOWN_FROM,
  playHandler,
  stopHandler 
} from 'sagas/controls'

import { 
  countdown,
  initStage,
  countdownStage,
  playStage
} from 'actions/game'
import { gameStages } from 'reducers/game'


describe('playHandler', () => {
  test('init stage', () => {
    const state = { game: { stage: gameStages.INIT } }
    const it = playHandler()

    expect(it.next().value).toEqual(select())

    expect(it.next(state).value).toEqual(put(countdownStage(COUNTDOWN_FROM)))

    expect(it.next().value).toEqual(call(delay, 1500))

    expect(it.next().value).toEqual(put(countdown()))

    expect(it.next()).toEqual({ done: true, value: undefined })
  })

  test('play stage', () => {
    const state = { game: { stage: gameStages.PLAY } }
    const it = playHandler()

    expect(it.next().value).toEqual(select())

    expect(it.next(state).value).toEqual(put(playStage()))

    expect(it.next().value).toEqual(call(delay, 1000))
  })
})

test('stopHandler', () => {
  const it = stopHandler()

  expect(it.next().value).toEqual(put(initStage()))

  expect(it.next()).toEqual({ done: true, value: undefined })
})

