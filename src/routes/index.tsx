import '@fontsource/roboto' // Importa a fonte Roboto

import { Navigate, Route, Routes } from 'react-router-dom'
import { useDrawerContext } from '../shared/contexts/DrawerContext.tsx'
import { useEffect } from 'react'
import { Fingerprint, Home } from '@mui/icons-material'
import { Dashboard } from '../pages/dashboard'

export function AppRoutes() {
  const { setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: Home,
        label: 'Home',
        path: '/dashboard',
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
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}
