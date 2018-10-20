import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'

import AppLayout from 'layout/AppLayout'

import messages from 'i18n'
import themes from './themes'


const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  render() {
    const { locale, theme } = this.props

    return (
      <ThemeProvider theme={themes[theme]}>
        <IntlProvider 
          key={locale}
          locale={locale} 
          messages={messages[locale]}
        >
          <StyledApp>
            <AppLayout />
          </StyledApp>
        </IntlProvider>
      </ThemeProvider>
    )
  }
}

export default connect(({
  settings: { locale, theme } 
}) => ({ 
  locale, theme  
}))(App)

