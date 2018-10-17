import { combineReducers } from 'redux'

import clock from './clock'
import controls from './controls'
import display from './display'
import game from './game'
import settings from './settings'


const reducer = combineReducers({
  clock,
  controls,
  display,
  game,
  settings
})

export default reducer

