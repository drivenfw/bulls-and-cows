import { createSelector } from 'reselect'


const difficulty = state => state.settings.difficulty

export const getOptions = createSelector(
  difficulty,
  difficulty => Array.from({ length: difficulty + 5 }, (_, i) => i)
)

