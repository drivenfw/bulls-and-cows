import { createAction } from 'redux-act'


export const countdown = createAction('GAME_COUNTDOWN')

export const initStage = createAction('GAME_INIT_STAGE')

export const countdownStage = createAction('GAME_COUNTDOWN_STAGE')

export const playStage = createAction('GAME_PLAY_STAGE')

export const congratsStage = createAction('GAME_CONGRATS_STAGE')

