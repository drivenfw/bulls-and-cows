import { createReducer } from 'redux-act'


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

}, initialState)

export default display

