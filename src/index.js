import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'
import themes from './themes'

import App from './App'

import './index.css'


const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themes.main}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

