import { Button } from '@mui/material'
import '@fontsource/roboto' // Importa a fonte Roboto
import { useAppThemeContext } from './shared/contexts/ThemeContext.tsx'

export function App() {
  const { toggleTheme } = useAppThemeContext()

  return (
    <div color={'default'}>
      <h1>My App</h1>
      <p style={{ fontFamily: 'Roboto' }}>Welcome to my app!</p>
      <Button variant="contained" color={'primary'} onClick={toggleTheme}>
        Change theme!
      </Button>
    </div>
  )
}
