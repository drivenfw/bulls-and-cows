import { createReducer } from 'redux-act'

import { play, stop } from '../actions/controls'


const initialState = {
  content: [
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum'
  ],
  scroll: 0
}

const display = createReducer({
  [play]: () => ({
    content: [],
    scroll: 0
  }),
  [stop]: () => initialState
}, initialState)

export default display

