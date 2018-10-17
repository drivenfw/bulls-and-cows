import { createReducer } from 'redux-act'

import { 
  countdown, 
  initStage,
  countdownStage,
  playStage,
  congratsStage
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
  [initStage]: () => initialState,
  [countdownStage]: (state, payload) => ({
    ...state,
    countdown: payload,
    stage: 1
  }),
  [playStage]: state => ({
    ...state,
    stage: 2
  }),
  [congratsStage]: state => ({
    ...state,
    stage: 3
  })
}, initialState)

export default game

