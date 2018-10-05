import React, { Component } from 'react'
import styled, { css } from 'styled-components'


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
`

const Inner = styled.div`
  width: 86%;
  height: 100%;
  padding-right: 3%;
  overflow-y: scroll;
  line-height: 1.5;
  display: inline-block;
  vertical-align: top;
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
  constructor(props) {
    super(props)
    this.innerEl = React.createRef()
  }

  getLineHeight = () =>
    // TODO: if (window.getComputedStyle) else currentStyle - ?
    getComputedStyle(this.innerEl.current).getPropertyValue('line-height')

  scrollUp = () => {
    this.innerEl.current.scrollTop -= parseFloat(this.getLineHeight())
  } 

  scrollDown = () => {
    this.innerEl.current.scrollTop += parseFloat(this.getLineHeight())
  }

  componentDidMount() {
    window.innerEl = this.innerEl.current
  }

  render() {
    const { children, className } = this.props

    return (
      <StyledDisplay className={className}>
        <Inner innerRef={this.innerEl}>
          {children}
        </Inner>
        <ScrollBar>
          <div>
            <UpButton onClick={this.scrollUp}>⬆</UpButton>
            <DownButton onClick={this.scrollDown}>⬇</DownButton>
          </div>
        </ScrollBar>
      </StyledDisplay>
    )
  }
}

export default Display

