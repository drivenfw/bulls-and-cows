import React, { Component } from 'react'
import styled from 'styled-components'

import Game from '../pages/Game'

const StyledAppLayout = styled.div`
  height: 100vh;
`

const NavBar = styled.nav`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`

const NavButton = styled.button`
  width: 120px;
  font-size: 1em;
  padding: 0.5em;
  outline: none;
  border: 1px solid grey;
  border-radius: 100px / 70px;
  box-shadow: 0 0 5px 3px lightgrey;
  background: white;
  transition: transform 50ms ease-in;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(1.05);
    border-width: 2px;
    background: lightgrey;
  }
`

const Content = styled.main`
  box-sizing: border-box;
  padding: 0 20px 20px 20px;
  min-height: calc(100vh - 76px);
`

class AppLayout extends Component {
  render() {
    return (
      <StyledAppLayout>
        <NavBar>
          <NavButton>Game</NavButton>
          <NavButton>Settings</NavButton>
        </NavBar>
        <Content>
          <Game />
        </Content>
      </StyledAppLayout>
    )
  }
}

export default AppLayout

