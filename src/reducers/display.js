import { createReducer } from 'redux-act'

import { stop } from 'actions/controls'
import { addContent, clear } from 'actions/display'


const initialState = {
  content: [],
  scroll: 0
}

const display = createReducer({
  [addContent]: (state, { content, scroll }) => ({
    ...state,
    content: [...state.content, content],
    scroll
  }),
  [clear]: state => ({
    ...state,
    content: [],
    scroll: 0
  }),
  [stop]: () => initialState
}, initialState)

export default display

