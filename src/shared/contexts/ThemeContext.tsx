import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { Box, ThemeProvider } from '@mui/material'

import { IChildren } from '../interface/IChildren.tsx'

import { LightTheme } from '../themes/LightTheme.ts'
import { DarkTheme } from '../themes/DarkTheme.ts'

interface IThemeContext {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext({} as IThemeContext)

function AppThemeContext({ children }: IChildren) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    setTheme((oldTheme) => {
      return oldTheme === 'light' ? 'dark' : 'light'
    })
  }, [])
  const themeValue = useMemo(() => {
    if (theme === 'light') {
      return LightTheme
    }

    return DarkTheme
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeValue}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={themeValue.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
function useAppThemeContext() {
  return useContext(ThemeContext)
}

export { AppThemeContext, useAppThemeContext }
