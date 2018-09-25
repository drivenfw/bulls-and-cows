import React, { Component } from 'react'
import styled from 'styled-components'

import AppLayout from './layout/AppLayout'


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
        <AppLayout />
      </StyledApp>
    )
  }
}

export default App

