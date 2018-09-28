import React, { Component } from 'react'
import styled from 'styled-components'


const StyledDisplay = styled.div`
  height: 170px;
  padding: .52em .78em;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: inset 0 0 3px 2px lightgrey;
  color: #4D4D4D;
  font-size: 1.2em;
`

const Inner = styled.div`
  width: 86%;
  height: 100%;
  margin-right: 3%;
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
`

class Display extends Component {
  constructor(props) {
    super(props)
    this.innerEl = React.createRef()
  }

  getLineHeight = () =>
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
            <Button onClick={this.scrollUp}>⬆</Button>
            <Button onClick={this.scrollDown}>⬇</Button>
          </div>
        </ScrollBar>
      </StyledDisplay>
    )
  }
}

export default Display

