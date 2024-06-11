import { CssBaseline } from '@mui/material'
import { AppThemeProvider } from './shared/contexts/ThemeContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { SideBar } from './shared/components/sideBar'

export function App() {
  return (
    <AppThemeProvider>
      <CssBaseline /> {/* reset css */}
      <BrowserRouter>
        <SideBar>
          <AppRoutes /> {/* Filho do SideBar */}
        </SideBar>
      </BrowserRouter>
    </AppThemeProvider>
  )
}
