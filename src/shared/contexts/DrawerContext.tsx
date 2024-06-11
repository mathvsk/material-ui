import { createContext, useCallback, useContext, useState } from 'react'

import { IChildren } from '../interface/IChildren.tsx'
import { SvgIconComponent } from '@mui/icons-material'

interface IDrawerOptions {
  path: string
  icon: SvgIconComponent
  label: string
}

interface IDrawerContext {
  isDrawerOpen: boolean
  drawerOptions: IDrawerOptions[]
  toggleDrawerOpen: () => void
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
}

const DrawerContext = createContext({} as IDrawerContext)

function AppDrawerContext({ children }: IChildren) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([])

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])
  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOptions[]) => {
      setDrawerOptions(newDrawerOptions)
    },
    [],
  )

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOptions: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
function useDrawerContext() {
  return useContext(DrawerContext)
}

export { AppDrawerContext, useDrawerContext }
