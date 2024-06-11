import '@fontsource/roboto' // Importa a fonte Roboto

import { Navigate, Route, Routes } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDrawerContext } from '../shared/contexts/DrawerContext.tsx'
import { useEffect } from 'react'
import { Fingerprint, Home } from '@mui/icons-material'

export function AppRoutes() {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: Home,
        label: 'Home',
        path: '/home',
      },
      {
        icon: Fingerprint,
        label: 'Rota 2',
        path: '/oi',
      },
    ])
  }, [setDrawerOptions])

  return (
    <Routes>
      <Route
        path="/oi"
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
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
