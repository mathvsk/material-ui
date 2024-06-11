import '@fontsource/roboto' // Importa a fonte Roboto

import { Route, Routes } from 'react-router-dom'
import { App } from '../App.tsx'
import { Button } from '@mui/material'
import { useDrawerContext } from '../shared/contexts/DrawerContext.tsx'

export function AppRoutes() {
  const { toggleDrawerOpen } = useDrawerContext()
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div color={'default'}>
            <h1>My App</h1>
            <p style={{ fontFamily: 'Roboto' }}>Welcome to my app!</p>
            <Button
              variant="contained"
              color={'primary'}
              onClick={toggleDrawerOpen}
            >
              Toggle drawer !
            </Button>
          </div>
        }
      />
      <Route path="*" element={<App />} />
    </Routes>
  )
}
