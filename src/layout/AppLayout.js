import React, { Component } from 'react'
import styled from 'styled-components'

import Display from '../components/Display'


const StyledAppLayout = styled.div`
  height: 100vh;
`

const NavBar = styled.nav`
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
`

const Content = styled.main`
  padding: 0 20px 20px 20px;
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
          <Display />
        </Content>
      </StyledAppLayout>
    )
  }
}

export default AppLayout

