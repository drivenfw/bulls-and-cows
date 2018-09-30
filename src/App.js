import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import AppLayout from './layout/AppLayout'

import themes from './themes'


const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  render() {
    return (
      <StyledApp>
        <ThemeProvider theme={themes.main}>
          <AppLayout />
        </ThemeProvider>
      </StyledApp>
    )
  }
}

export default App

