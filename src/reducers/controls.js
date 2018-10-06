import { createReducer } from 'redux-act'

import { play } from '../actions/controls'


const initialState = {
  playBtn: true,
  stopDisabled: true,
  submitDisabled: true
}

const layout = createReducer({
  [play]: state => ({
    ...state,
    playBtn: false,
    stopDisabled: false,
    submitDisabled: false
  })
}, initialState)

export default layout

