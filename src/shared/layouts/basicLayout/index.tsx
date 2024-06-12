import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { IChildren } from '../../interface/IChildren.tsx'
import { Menu } from '@mui/icons-material'
import { useDrawerContext } from '../../contexts/DrawerContext.tsx'

interface IBasicLayoutProps extends IChildren {
  title: string
}

export function BasicLayout({ title, children }: IBasicLayoutProps) {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { toggleDrawerOpen } = useDrawerContext()

  return (
    <Box height={'100%'} display={'flex'} flexDirection={'column'} gap={1}>
      <Box
        padding={theme.spacing(1)}
        height={theme.spacing(12)}
        display={'flex'}
        alignItems={'center'}
        gap={1}
      >
        {mobile && (
          <IconButton onClick={toggleDrawerOpen}>
            <Menu />
          </IconButton>
        )}

        <Typography variant={'h5'}>{title}</Typography>
      </Box>

      <Box>Barra de ferramentas</Box>

      <Box>{children}</Box>
    </Box>
  )
}
