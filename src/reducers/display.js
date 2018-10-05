import { createReducer } from 'redux-act'


const initialState = {
  content: '',
  scroll: 0
}

const display = createReducer({

}, initialState)

export default display

