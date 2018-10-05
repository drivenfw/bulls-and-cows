import styled, { css } from 'styled-components'


const Button = styled.button`
  width: 120px;
  font-size: 1em;
  padding: 0.5em;
  outline: none;
  border-radius: 100px / 70px;
  background: white;
  transition: transform 50ms ease-in;

  ${({ theme }) => css`
    border: 1px solid ${theme.primaryColor};
    box-shadow: 0 0 5px 3px ${theme.primaryColor2};
    color: ${theme.primaryColor};
  `}

  &:hover {
    cursor: pointer;
  }

  &:active {
    border-width: 2px;
    background: ${props => props.theme.primaryColor2};
    transform: scale(${props => props.scale || 1.05});
  }

  #icon-fill path {
    fill: ${props => props.theme.primaryColor};
  }

  &:disabled {
    transform: none;
    border: 1px solid ${props => props.theme.primaryColor2};
    box-shadow: inset 0 0 2px ${props => props.theme.primaryColor2};
    background: white;
    cursor: auto;

    #icon-fill path {
      fill: ${props => props.theme.primaryColor2};
    }
  }
`

export default Button

