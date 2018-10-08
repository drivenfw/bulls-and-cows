import { createReducer } from 'redux-act'

import { pause, play, stop } from '../actions/controls'


const initialState = {
  playBtn: true,
  stopDisabled: true,
  submitDisabled: true
}

const controls = createReducer({
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

