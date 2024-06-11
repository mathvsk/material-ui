import { CssBaseline } from '@mui/material'
import { AppThemeContext } from './shared/contexts/ThemeContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { SideBar } from './shared/components/sideBar'
import { AppDrawerContext } from './shared/contexts/DrawerContext.tsx'

export function App() {
  return (
    <AppThemeContext>
      <AppDrawerContext>
        <CssBaseline /> {/* reset css */}
        <BrowserRouter>
          <SideBar>
            <AppRoutes /> {/* Filho do SideBar */}
          </SideBar>
        </BrowserRouter>
      </AppDrawerContext>
    </AppThemeContext>
  )
}
