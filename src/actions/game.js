import { createAction } from 'redux-act'


export const countdown = createAction('GAME_COUNTDOWN')

export const gameInit = createAction('GAME_INIT_STAGE')

export const gameCountdown = createAction('GAME_COUNTDOWN_STAGE')

export const gamePlay = createAction('GAME_PLAY_STAGE')

export const gameCongrats = createAction('GAME_CONGRATS_STAGE')

