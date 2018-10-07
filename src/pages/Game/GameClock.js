import { connect } from 'react-redux'
import styled from 'styled-components'

import Clock from '../../components/Clock'


const StyledClock = styled(Clock)`
  @media (min-width: 375px) {
    height: 90px;
  }

  @media (min-width: 550px) {
    height: 70px;
  }

  @media (min-width: 850px) {
    height: 90px;
    margin-top: 30px;
  }
`

export default connect(({ clock }) => ({ timeSecs: clock }))(StyledClock)

