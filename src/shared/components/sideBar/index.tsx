import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material'

import { IChildren } from '../../interface/IChildren.tsx'
import { Home } from '@mui/icons-material'

export function SideBar({ children }: IChildren) {
  const theme = useTheme()

  return (
    <>
      <Drawer variant={'permanent'}>
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
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {/* children é o filho do menu lateral na estrutura do html */}
        {children}
      </Box>
    </>
  )
}
