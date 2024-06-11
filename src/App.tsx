import { CssBaseline } from '@mui/material'
import { AppThemeProvider } from './shared/contexts/ThemeContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'

export function App() {
  return (
    <AppThemeProvider>
      <CssBaseline /> {/* reset css */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  )
}
