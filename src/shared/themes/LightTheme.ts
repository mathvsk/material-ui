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
      default: '#f4f4f5', // cor da aplicação
      paper: '#ffffff', // cor de card
    },
  },
})
