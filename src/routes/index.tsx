import { Route, Routes } from 'react-router-dom'
import { App } from '../App.tsx'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<App />} />
    </Routes>
  )
}
