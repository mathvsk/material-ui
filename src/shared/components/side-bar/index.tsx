import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { IChildren } from '../../interface/IChildren.tsx'
import { useDrawerContext } from '../../contexts/DrawerContext.tsx'
import { ListItemLink } from '../list-item-link'
import { useAppThemeContext } from '../../contexts/ThemeContext.tsx'
import { DarkMode, LightMode } from '@mui/icons-material'

export function SideBar({ children }: IChildren) {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext()
  const { toggleTheme } = useAppThemeContext()

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={mobile ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              src="https://github.com/mathvsk.png"
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((option) => (
                <ListItemLink
                  key={option.path}
                  to={option.path}
                  icon={option.icon}
                  label={option.label}
                  onClick={mobile ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>

          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <LightMode /> | <DarkMode />
                </ListItemIcon>
                <ListItemText primary={'Alternar tema'} />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={mobile ? 0 : theme.spacing(28)}>
        {/* children é o filho do menu lateral na estrutura do html */}
        {children}
      </Box>
    </>
  )
}
