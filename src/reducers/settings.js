import { createReducer } from 'redux-act'

import { switchLocale } from 'actions/settings'


const initialState = {
  locale: 'en',
  options: 6,
  theme: 'main'
}

const settings = createReducer({
  [switchLocale]: (state, payload) => ({
    ...state,
    locale: payload
  })
}, initialState)

export default settings

