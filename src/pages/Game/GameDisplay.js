import React from 'react'
import styled from 'styled-components'

import Display from '../../components/Display'


const StyledGameDisplay = styled(Display)`
  margin-bottom: 10px;

  @media (min-width: 375px) {
    height: 180px;
  }

  @media (min-width: 550px) {
    width: 200px;
    height: 180px;
    margin-right: 20px;
    margin-bottom: 0;
    font-size: 1.25em;
  }

  @media (min-width: 850px) {
    width: 300px;
    height: 198px;
    margin-right: 30px;
    font-size: 1.375em;
  }
`
const GameDisplay = ({ className }) =>
  <StyledGameDisplay>
    1. Lorem ipsum <br />
    2. Lorem ipsum <br />
    3. Lorem ipsum <br />
    4. Lorem ipsum <br />
    5. Lorem ipsum <br />
    6. Lorem ipsum <br />
    7. Lorem ipsum <br />
    8. Lorem ipsum <br />
    9. Lorem ipsum <br />
    10. Lorem ipsum <br />
  </StyledGameDisplay>

export default GameDisplay

