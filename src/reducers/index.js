import { combineReducers } from 'redux'

import display from './display'
import layout from './layout'


const reducer = combineReducers({
  display,
  layout
})

export default reducer

