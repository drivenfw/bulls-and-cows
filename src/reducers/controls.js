import { createReducer } from 'redux-act'

import { pause, play, stop } from '../actions/controls'
import { 
  gameCountdown,
  gamePlay,
  gameCongrats
} from '../actions/game'


const initialState = {
  pauseDisabled: false,
  playBtn: true,
  playDisabled: false,
  stopDisabled: true,
  submitDisabled: true
}

const controls = createReducer({
  [gameCountdown]: state => ({
    ...state,
    playDisabled: true
  }),
  [gameCongrats]: state => ({
    ...state,
    pauseDisabled: true,
    submitDisabled: true
  }),
  [gamePlay]: state => ({
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

