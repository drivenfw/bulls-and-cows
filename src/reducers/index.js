import { combineReducers } from 'redux'

import clock from './clock'
import controls from './controls'
import display from './display'


const reducer = combineReducers({
  clock,
  controls,
  display
})

export default reducer

