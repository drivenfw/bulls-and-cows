import { delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'

import { tickHandler } from 'sagas/clock'
import { tick } from 'actions/clock'


describe('tickHandler', () => {
  test('play stage', () => {
    const state = { controls: { pauseDisabled: false, playBtn: false } }
    const it = tickHandler()

    expect(it.next().value).toEqual(call(delay, 1000))

    expect(it.next().value).toEqual(select())

    expect(it.next(state).value.PUT.action.type).toBe('CLOCK_TICK')

    expect(it.next()).toEqual({ done: true, value: undefined })
  })

  test('congrats stage', () => {
    const state = { controls: { pauseDisabled: true, playBtn: false } }
    const it = tickHandler()

    expect(it.next().value).toEqual(call(delay, 1000))

    expect(it.next().value).toEqual(select())

    expect(it.next(state)).toEqual({ done: true, value: undefined })
  })
})

