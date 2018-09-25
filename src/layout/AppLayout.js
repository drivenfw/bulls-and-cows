import React, { Component } from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import Game from '../pages/Game'


const StyledAppLayout = styled.div`
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin: 0 auto;
`

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media (min-width: 375px) {
    justify-content: space-around;
  }
`

const StyledButton = styled(Button)`
  @media (min-width: 375px) { 
    width: 140px; 
    font-size: 1.2em;
  }

  @media (min-width: 550px) {
    font-size: 1em;
  }
`

const Content = styled.main`
  padding: 0 10px 20px 10px;

  @media (min-width: 375px) {
    padding: 0 20px 20px 20px;
  }
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

