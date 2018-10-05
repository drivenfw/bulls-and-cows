import React, { Component } from 'react'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import AppLayout from './layout/AppLayout'

import themes from './themes'
import configureStore from './configureStore'


const store = configureStore()

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyledApp>
          <ThemeProvider theme={themes.main}>
            <AppLayout />
          </ThemeProvider>
        </StyledApp>
      </Provider>
    )
  }
}

export default App

