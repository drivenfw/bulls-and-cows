import styled, { css, keyframes } from 'styled-components'


const rotate360 = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`

export default styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  ${({ theme }) => css`
    border: 5px solid ${theme.primaryColor2};
    border-top-color: ${theme.primaryColor};
  `}

  animation: ${rotate360} 1s linear infinite;

  @media (min-width: 850px) {
    width: 250px;
    height: 250px;
    border-width: 10px;
  }
`

