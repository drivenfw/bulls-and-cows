import { createReducer } from 'redux-act'

import { 
  countdown, 
  initStage,
  countdownStage,
  playStage,
  congratsStage
} from 'actions/game'


export const gameStages = {
  INIT: 0,
  COUNTDOWN: 1,
  PLAY: 2,
  CONGRATS: 3
}

const initialState = {
  countdown: 0,
  stage: gameStages.INIT
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
    stage: gameStages.COUNTDOWN
  }),
  [playStage]: state => ({
    ...state,
    stage: gameStages.PLAY
  }),
  [congratsStage]: state => ({
    ...state,
    stage: gameStages.CONGRATS
  })
}, initialState)

export default game

