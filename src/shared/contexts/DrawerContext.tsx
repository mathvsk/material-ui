import { createContext, useCallback, useContext, useState } from 'react'

import { IChildren } from '../interface/IChildren.tsx'

interface IDrawerContext {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
}

const DrawerContext = createContext({} as IDrawerContext)

function AppDrawerContext({ children }: IChildren) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}
function useDrawerContext() {
  return useContext(DrawerContext)
}

export { AppDrawerContext, useDrawerContext }
