import { createReducer } from 'redux-act'

import { tick } from '../actions/clock'
import { stop } from '../actions/controls'


const clock = createReducer({
  [stop]: () => 0,
  [tick]: (state, payload) => state + payload
}, 0)

export default clock

