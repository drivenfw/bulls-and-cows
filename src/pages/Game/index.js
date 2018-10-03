import React, { Component } from 'react'
import styled from 'styled-components'

import Clock from '../../components/Clock'
import Controls from './Controls'
import Display from '../../components/Display'


const StyledDisplay = styled(Display)`
  margin-bottom: 10px;

  @media (min-width: 375px) {
    height: 180px;
  }

  @media (min-width: 550px) {
    width: 180px;
    height: 168px;
    margin-right: 20px;
    margin-bottom: 0;
    font-size: 1em;
  }

  @media (min-width: 850px) {
    width: 300px;
    height: 198px;
    margin-right: 30px;
    font-size: 1.375em;
  }
`

const StyledControls = styled(Controls)`
  margin-bottom: 10px;

  @media (min-width: 550px) {
    margin-bottom: 0;
  }
`

const TopGroup = styled.div`
  @media (min-width: 550px) {
    display: flex;
    align-items: center;
  }
`

const StyledClock = styled(Clock)`
  @media (min-width: 375px) {
    height: 90px;
  }

  @media (min-width: 550px) {
    height: 70px;
  }

  @media (min-width: 850px) {
    height: 90px;
    margin-top: 30px;
  }
`

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
`

class Game extends Component {
  state = {
    desktop: true
  }

  checkMediaQuery = () => {
    this.setState({ 
      desktop: window.matchMedia("(min-width: 850px)").matches
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkMediaQuery)
    this.checkMediaQuery()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkMediaQuery)
  }

  render() {
    const { desktop } = this.state

    return (
      <StyledGame>
        <TopGroup>
          <StyledDisplay>
            1. Lorem ipsum dolor<br />
            2. Lorem ipsum dolor<br />
            3. Lorem ipsum dolor<br />
            4. Lorem ipsum dolor<br />
            5. Lorem ipsum dolor<br />
            6. Lorem ipsum dolor<br />
            7. Lorem ipsum dolor<br />
            8. Lorem ipsum dolor<br />
            9. Lorem ipsum dolor<br />
            10. Lorem ipsum dolor<br />
          </StyledDisplay>
          <div>
            <StyledControls />
            {!desktop && <StyledClock />}
          </div>
        </TopGroup>
        {desktop && <StyledClock />}
      </StyledGame>
    )
  }
}

export default Game

