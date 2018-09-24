import React, { Component } from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import Game from '../pages/Game'


const StyledAppLayout = styled.div`
  min-height: 100vh;
`

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`

const StyledButton = styled(Button)`
  @media (min-width: 375px) { 
    width: 140px; 
    font-size: 1.2em;
  }
`

const Content = styled.main`
  padding: 0 20px 20px 20px;
`

class AppLayout extends Component {
  render() {
    return (
      <StyledAppLayout>
        <NavBar>
          <StyledButton>Game</StyledButton>
          <StyledButton>Settings</StyledButton>
        </NavBar>
        <Content>
          <Game />
        </Content>
      </StyledAppLayout>
    )
  }
}

export default AppLayout

