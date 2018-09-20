import React, { Component } from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
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

const Content = styled.main`
  box-sizing: border-box;
  padding: 0 20px 20px 20px;
`

class AppLayout extends Component {
  render() {
    return (
      <StyledAppLayout>
        <NavBar>
          <Button>Game</Button>
          <Button>Settings</Button>
        </NavBar>
        <Content>
          <Game />
        </Content>
      </StyledAppLayout>
    )
  }
}

export default AppLayout

