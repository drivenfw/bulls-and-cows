import React, { Component } from 'react'
import styled from 'styled-components'


const StyledAppLayout = styled.div`
  height: 100vh;
`

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavButton = styled.button`
  width: 120px;
  font-size: 1em;
  padding: 0.5em;
  margin: 1em 0.5em;
  outline: none;
  border: 1px solid grey;
  border-radius: 100px / 70px;
  box-shadow: 0 0 5px 3px lightgrey;
  background: white;
`

class AppLayout extends Component {
  render() {
    return (
      <StyledAppLayout>
        <NavBar>
          <NavButton>Game</NavButton>
          <NavButton>Settings</NavButton>
        </NavBar>
      </StyledAppLayout>
    )
  }
}

export default AppLayout

