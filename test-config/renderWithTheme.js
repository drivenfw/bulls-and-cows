import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import themes from 'themes'


global.renderWithTheme = function (component) {
  return mount(
    <ThemeProvider theme={themes.main}>
      {component}
    </ThemeProvider>    
  )
}

