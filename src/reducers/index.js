import { combineReducers } from 'redux'

import clock from './clock'
import controls from './controls'
import display from './display'
import settings from './settings'


const reducer = combineReducers({
  clock,
  controls,
  display,
  settings
})

export default reducer

