import { createReducer } from 'redux-act'

import {
  switchDifficulty,
  switchLocale, 
  switchTheme 
} from 'actions/settings'


const initialState = {
  difficulty: '1',
  locale: 'en',
  options: 6,
  theme: 'main'
}

const settings = createReducer({
  [switchDifficulty]: (state, payload) => ({
    ...state,
    difficulty: payload
  }),
  [switchLocale]: (state, payload) => ({
    ...state,
    locale: payload
  }),
  [switchTheme]: (state, payload) => ({
    ...state,
    theme: payload
  })
}, initialState)

export default settings

