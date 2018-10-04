import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom'
import Loadable from 'react-loadable'
import styled from 'styled-components'

import Button from '../components/Button'
import Spinner from './Spinner'


const StyledAppLayout = styled.div`
  min-width: 310px;
  height: 505px;
  border: 1px solid ${props => props.theme.primaryColor2};
  background: ${props => props.theme.secondaryColor};
  border-radius: 10px;

  @media (min-width: 375px) {
    min-width: 362px;
    height: 587px;
  }

  @media (min-width: 550px) {
    min-width: 529px;
    height: 294px;
  }

  @media (min-width: 850px) {
    min-width: 769px;
    height: 486px;
  }

  @media (orientation: portrait) {
    margin: 20px;
  }
`

const NavBar = styled.nav`
  height: 36px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 375px) {
    height: 45px;
    justify-content: space-around;
  }

  @media (min-width: 550px) {
    height: 36px;
  }

  @media (min-width: 850px) {
    height: 45px;
    padding: 30px;
  }
`

const StyledButton = styled(Button)`
  @media (min-width: 375px) { 
    width: 130px; 
    font-size: 1.1em;
  }

  @media (min-width: 550px) {
    font-size: 1em;
  }

  @media (min-width: 850px) {
    width: 200px;
    font-size: 1.2em;
  }
`

const Content = styled.main`
  height: 409px;
  padding: 0 10px 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 375px) {
    height: 482px;
    padding: 0 20px 20px 20px;
  }

  @media (min-width: 550px) {
    height: 200px;
  }

  @media (min-width: 850px) {
    height: 353px;
    padding: 0 30px 30px 30px;
  }
`

const GamePage = Loadable({
  loader: () => import('../pages/Game'),
  loading: Spinner
})

const SettingsPage = Loadable({
  loader: () => import('../pages/Settings'),
  loading: Spinner
})

class AppLayout extends Component {
  render() {
    return (
      <Router>
        <StyledAppLayout>
          <NavBar>
            <Link to="/">
              <StyledButton>Game</StyledButton>
            </Link>
            <Link to="/settings">
              <StyledButton>Settings</StyledButton>
            </Link>
          </NavBar>
          <Content>
            <Route exact path="/" component={GamePage} />
            <Route path="/settings" component={SettingsPage} />
          </Content>
        </StyledAppLayout>
      </Router>
    )
  }
}

export default AppLayout

