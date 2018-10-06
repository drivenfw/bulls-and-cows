import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import main from './sagas'


let loggerMiddleware
const sagaMiddleware = createSagaMiddleware()

const configureStore = preloadedState => {
  const middleware = [sagaMiddleware]

  if (process.env.NODE_ENV === 'development') {
    loggerMiddleware = createLogger()

    middleware.push(loggerMiddleware)
  }

  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    ) 
  ) 

  sagaMiddleware.run(main)

  return store
}

export default configureStore

