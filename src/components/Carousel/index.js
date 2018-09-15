import React, { Component } from 'react'
import styled from 'styled-components'


const StyledCarousel = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 70px;
  border: 1px solid grey;
  border-radius: 2px;
  box-shadow: 0 0 5px 3px lightgrey;
`

class Carousel extends Component {
  render() {
    return (
      <StyledCarousel />
    )
  }
}

export default Carousel

