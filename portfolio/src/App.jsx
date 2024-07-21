import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ToastWrapper } from './components/ToastContainer' // Certifique-se de que este é o caminho correto
import baseTheme from './styles/themes/baseTheme'
import { AppRoutes } from './routes'
import 'react-toastify/dist/ReactToastify.css'
import GlobalStyles from './styles/global-styles'

export const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <ToastWrapper />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
