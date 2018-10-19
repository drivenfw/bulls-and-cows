import { createReducer } from 'redux-act'


const initialState = {
  locale: 'en',
  options: 6
}

const settings = createReducer({

}, initialState)

export default settings

