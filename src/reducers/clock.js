import { createReducer } from 'redux-act'

import { tick } from '../actions/clock'


const clock = createReducer({
  [tick]: (state, payload) => state + payload
}, 0)

export default clock

