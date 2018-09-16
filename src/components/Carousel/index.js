import React from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const StyledCarousel = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 70px;
  border: 1px solid grey;
  border-radius: 2px;
  box-shadow: 0 0 5px 3px lightgrey;
  position: relative;
  overflow: hidden;

  & .turn-down-enter {
    top: -100%;
    transition: top 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .turn-down-enter-active {
    top: 0;
  }

  & .turn-down-exit {
    top: 0;
    transition: top 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .turn-down-exit-active {
    top: 100%;
  }

  & .turn-up-enter {
    top: 100%;
    transition: top 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .turn-up-enter-active {
    top: 0;
  }

  & .turn-up-exit {
    top: 0;
    transition: top 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .turn-up-exit-active {
    top: -100%;
  }
`

const Carousel = ({ children, direction }) => 
  <StyledCarousel>
    <TransitionGroup>
      {React.Children.map(children, child => (
        <CSSTransition
          timeout={500}
          classNames={`turn-${direction}`}
          mountOnEnter
          unmountOnExit
        >
          {child}
        </CSSTransition>
      ))}
    </TransitionGroup>
  </StyledCarousel>

export default Carousel

