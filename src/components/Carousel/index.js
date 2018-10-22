import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const StyledCarousel = styled.div`
  box-sizing: border-box;
  width: 35px;
  height: 60px;
  border-radius: 3px;
  font-size: 2em;
  position: relative;
  overflow: hidden;
  background: white;

  ${({ theme }) => css`
    border: 1px solid ${theme.primaryColor};
    box-shadow: 0 0 5px 3px ${theme.primaryColor2};
  `}

  & .scroll-down-enter {
    top: -100%;
    transition: top 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .scroll-down-enter-active {
    top: 0;
  }

  & .scroll-down-exit {
    top: 0;
    transition: top 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .scroll-down-exit-active {
    top: 100%;
  }

  & .scroll-up-enter {
    top: 100%;
    transition: top 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .scroll-up-enter-active {
    top: 0;
  }

  & .scroll-up-exit {
    top: 0;
    transition: top 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .scroll-up-exit-active {
    top: -100%;
  }

  & .scroll-left-enter {
    left: -100%;
    transition: left 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .scroll-left-enter-active {
    left: 0;
  }

  & .scroll-left-exit {
    left: 0;
    transition: left 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .scroll-left-exit-active {
    left: 100%;
  }

  & .scroll-right-enter {
    left: 100%;
    transition: left 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .scroll-right-enter-active {
    left: 0;
  }

  & .scroll-right-exit {
    left: 0;
    transition: left 500ms cubic-bezier(0, 0.7, 0.25, 1.19);
  }

  & .scroll-right-exit-active {
    left: -100%;
  }
`

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  color: ${props => props.theme.primaryColor};
`

const Carousel = ({ children, className, direction }) => 
  <StyledCarousel className={className}>
    <TransitionGroup>
      {React.Children.map(children, child => (
        <CSSTransition
          timeout={500}
          classNames={`scroll-${direction}`}
          mountOnEnter
          unmountOnExit
        >
          {child}
        </CSSTransition>
      ))}
    </TransitionGroup>
  </StyledCarousel>

Carousel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['down', 'up', 'left', 'right']).isRequired
}

export default Carousel

