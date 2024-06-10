import { createTheme } from '@mui/material/styles'
import { amber, green } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[800],
      contrastText: '#fff',
    },
    secondary: {
      light: amber[400],
      main: amber[700],
      dark: amber[900],
      contrastText: '#000',
    },
    background: {
      default: '#71717a', // cor da aplicação
      paper: '#e5e5e5', // cor de card
    },
  },
})
