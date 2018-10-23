import { createSelector } from 'reselect'

import { gameStages } from 'reducers/game'


const getDifficulty = state => state.settings.difficulty
const getGameStage = state => state.game.stage

export const getOptions = createSelector(
  getDifficulty,
  difficulty => Array.from({ length: difficulty + 5 }, (_, i) => i)
)

export const getDifficultySwitcherState = createSelector(
  getGameStage,
  stage => [gameStages.COUNTDOWN, gameStages.PLAY].includes(stage)
)

