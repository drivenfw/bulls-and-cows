import { createReducer } from 'redux-act'

import { pause, stop } from 'actions/controls'
import { 
  countdownStage,
  playStage,
  congratsStage
} from 'actions/game'


const initialState = {
  pauseDisabled: false,
  playBtn: true,
  playDisabled: false,
  stopDisabled: true,
  submitDisabled: true
}

const controls = createReducer({
  [countdownStage]: state => ({
    ...state,
    playDisabled: true
  }),
  [congratsStage]: state => ({
    ...state,
    pauseDisabled: true,
    submitDisabled: true
  }),
  [playStage]: state => ({
    ...state,
    playBtn: false,
    stopDisabled: false,
    submitDisabled: false
  }),
  [pause]: state => ({
    ...state,
    playBtn: true,
    playDisabled: false,
    submitDisabled: true
  }),
  [stop]: () => initialState
}, initialState)

export default controls

