import { Button } from '@mui/material'
import '@fontsource/roboto' // Importa a fonte Roboto

export function App() {
  return (
    <div color={'default'}>
      <h1>My App</h1>
      <p style={{ fontFamily: 'Roboto' }}>Welcome to my app!</p>
      <Button variant="contained" color={'primary'}>
        Click me!
      </Button>
    </div>
  )
}
