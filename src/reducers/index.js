import { combineReducers } from 'redux'

import display from './display'
import controls from './controls'


const reducer = combineReducers({
  controls,
  display
})

export default reducer

