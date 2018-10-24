import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from 'registerServiceWorker'
import configureStore from 'configureStore'
import loadSettings from 'loadSettings'

import App from './App'

import './index.css'


const settings = loadSettings()
const store = configureStore({ settings })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

