import '@fontsource/roboto' // Importa a fonte Roboto

import { Navigate, Route, Routes } from 'react-router-dom'
import { useDrawerContext } from '../shared/contexts/DrawerContext.tsx'
import { useEffect } from 'react'
import { Home, LocationCity, People } from '@mui/icons-material'
import { Dashboard } from '../pages/dashboard'
import { Persons } from '../pages/cities'

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
        icon: People,
        label: 'Persons',
        path: '/persons',
      },
    ])
  }, [setDrawerOptions])

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/persons" element={<Persons />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}
