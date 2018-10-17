import { createReducer } from 'redux-act'

import { 
  countdown, 
  gameInit,
  gameCountdown,
  gamePlay,
  gameCongrats
} from '../actions/game'


/* 0 - init
 * 1 - countdown
 * 2 - play
 * 3 - congrats
 */

const initialState = {
  countdown: 0,
  stage: 0
}

const game = createReducer({
  [countdown]: state => ({
    ...state,
    countdown: state.countdown - 1
  }),
  [gameInit]: () => initialState,
  [gameCountdown]: (state, payload) => ({
    ...state,
    countdown: payload,
    stage: 1
  }),
  [gamePlay]: state => ({
    ...state,
    stage: 2
  }),
  [gameCongrats]: state => ({
    ...state,
    stage: 3
  })
}, initialState)

export default game

