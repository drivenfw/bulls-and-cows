import { createReducer } from 'redux-act'

import { pause, play } from '../actions/controls'


const initialState = {
  playBtn: true,
  stopDisabled: true,
  submitDisabled: true
}

const layout = createReducer({
  [pause]: state => ({
    ...state,
    playBtn: true,
    stopDisabled: true,
    submitDisabled: true
  }),
  [play]: state => ({
    ...state,
    playBtn: false,
    stopDisabled: false,
    submitDisabled: false
  })
}, initialState)

export default layout

