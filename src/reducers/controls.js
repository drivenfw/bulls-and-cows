import { createReducer } from 'redux-act'


const initialState = {
  startDisabled: false,
  stopDisabled: true,
  submitDisabled: true
}

const layout = createReducer({

}, initialState)

export default layout

