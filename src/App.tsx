import { Button } from '@mui/material'
import '@fontsource/roboto' // Importa a fonte Roboto

export function App() {
  return (
    <>
      <h1>My App</h1>
      <p style={{ fontFamily: 'Roboto' }}>Welcome to my app!</p>
      <Button variant="text">Click me!</Button>
    </>
  )
}
