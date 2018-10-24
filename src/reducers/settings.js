import { createReducer } from 'redux-act'

import {
  switchDifficulty,
  switchLocale, 
  switchTheme,
  toggleRememberSettings
} from 'actions/settings'

import { defaultSettings as initialState } from 'loadSettings'


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
  }),
  [toggleRememberSettings]: (state, payload) => ({
    ...state,
    rememberSettings: payload
  })
}, initialState)

export default settings

