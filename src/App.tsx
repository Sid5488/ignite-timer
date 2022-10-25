import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

import { Router } from './routes'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export { App }
