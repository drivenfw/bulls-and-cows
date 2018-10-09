import { createReducer } from 'redux-act'

import { pause, play, stop } from '../actions/controls'
import { finish } from '../actions/game'


const initialState = {
  pauseDisabled: false,
  playBtn: true,
  stopDisabled: true,
  submitDisabled: true
}

const controls = createReducer({
  [finish]: state => ({
    ...state,
    pauseDisabled: true,
    submitDisabled: true
  }),
  [pause]: state => ({
    ...state,
    playBtn: true,
    submitDisabled: true
  }),
  [play]: state => ({
    ...state,
    playBtn: false,
    stopDisabled: false,
    submitDisabled: false
  }),
  [stop]: () => initialState
}, initialState)

export default controls

