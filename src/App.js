import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { IntlProvider } from 'react-intl'

import AppLayout from 'layout/AppLayout'

import messages from 'i18n'


const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  render() {
    const { locale } = this.props

    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <StyledApp>
          <AppLayout />
        </StyledApp>
      </IntlProvider>
    )
  }
}

export default connect(({
  settings: { locale } 
}) => ({ locale  }))(App)

