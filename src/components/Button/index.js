import styled from 'styled-components'


const Button = styled.button`
  width: 120px;
  font-size: 1em;
  padding: 0.5em;
  outline: none;
  border: 1px solid grey;
  border-radius: 100px / 70px;
  box-shadow: 0 0 5px 3px lightgrey;
  background: white;
  transition: transform 50ms ease-in;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(1.05);
    border-width: 2px;
    background: lightgrey;
  }
`

export default Button

