import { createTheme } from '@mui/material/styles'
import { amber, green } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
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
      contrastText: '#ffffff',
    },
    background: {
      default: '#212121', // cor da aplicação
      paper: '#171717', // cor de card
    },
  },
})
