import React from 'react'
import { connect } from 'react-redux'
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
const GameDisplay = ({ className, content, scroll }) =>
  <StyledGameDisplay>
    {content.map((line, index) =>
      <span key={index}>{index + 1}. {line}<br /></span>
    )}
  </StyledGameDisplay>

const mapStateToProps = ({
  display: { content, scroll }
}) => ({
  content, scroll
})

export default connect(mapStateToProps)(GameDisplay)

