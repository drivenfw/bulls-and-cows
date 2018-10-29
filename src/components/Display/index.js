import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'


const StyledDisplay = styled.div`
  height: 150px;
  padding: .52em .78em;
  border-radius: 10px;
  font-size: 1.25em;
  background: white;

  ${({ theme }) => css`
    border: 1px solid ${theme.primaryColor};
    box-shadow: inset 0 0 3px 2px ${theme.primaryColor2};
    color: ${theme.primaryColor};
  `}

  @media (min-width: 550px) {
    padding: .52em;
  }

  @media (min-width: 850px) {
    padding: .52em .78em;
  }
`

const Inner = styled.div`
  width: 86%;
  height: 100%;
  padding-right: 3%;
  overflow-y: scroll;
  line-height: 1.5;
  display: inline-block;
  vertical-align: top;

  ${props => props.center && css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `}
`

const fadeIn = keyframes`
  from { 
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.02);
  }
  to { 
    opacity: 1 
    transform: scale(1);
  }
`

const Content = styled.div`
  animation: ${fadeIn} 400ms ease-in;
`

const ScrollBar = styled.div`
  width: 10%;
  height: 100%;
  display: inline-block;
  vertical-align: top;

  & > div:first-child {
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const Button = styled.div`
  text-align: right;
  transform: scaleX(1.3) scaleY(3);
  cursor: pointer;
  user-select: none;
  transition: all 0.1s ease;
`

const UpButton = styled(Button)`
  text-shadow: 0 2px 5px ${props => props.theme.primaryColor1};

  &:active {
    transform: scaleX(1.4) scaleY(3) translateY(1px);
    text-shadow: 0 1px 3px ${props => props.theme.primaryColor2};
  }
`

const DownButton = styled(Button)`
  text-shadow: 0 -2px 5px ${props => props.theme.primaryColor1};

  &:active {
    transform: scaleX(1.4) scaleY(3) translateY(-1px);
    text-shadow: 0 -1px 3px ${props => props.theme.primaryColor2};
  }
`

class Display extends Component {
  innerEl = React.createRef()

  getLineHeight = () =>
    // TODO: if (window.getComputedStyle) else currentStyle - ?
    getComputedStyle(this.innerEl.current).getPropertyValue('line-height')

  scrollUp = lines => {
    while (lines--) {
      this.innerEl.current.scrollTop -= parseFloat(this.getLineHeight())
    }
  } 

  scrollDown = lines => {
    while (lines--) {
      this.innerEl.current.scrollTop += parseFloat(this.getLineHeight())
    }
  }

  applyInitialScroll = () => {
    const { scroll } = this.props

    this.innerEl.current.scrollTop = 0

    if (scroll)
      this.scrollDown(scroll)
  }

  componentDidMount() {
    this.applyInitialScroll()
  }

  componentDidUpdate() {
    this.applyInitialScroll()
  }

  render() {
    const { children, center, className } = this.props

    return (
      <StyledDisplay className={className}>
        <Inner innerRef={this.innerEl} center={center}>
          {React.Children.map(children, child => (
            <Content>{child}</Content>
          ))}
        </Inner>
        <ScrollBar>
          <div>
            <UpButton onClick={() => this.scrollUp(1)}>⬆</UpButton>
            <DownButton onClick={() => this.scrollDown(1)}>⬇</DownButton>
          </div>
        </ScrollBar>
      </StyledDisplay>
    )
  }
}

Display.propTypes = {
  scroll: PropTypes.number
}

export default Display

