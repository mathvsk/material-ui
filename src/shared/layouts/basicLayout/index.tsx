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
import { ReactNode } from 'react'

interface IBasicLayoutProps extends IChildren {
  title: string
  toolBar?: ReactNode
}

export function BasicLayout({ title, children, toolBar }: IBasicLayoutProps) {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  const { toggleDrawerOpen } = useDrawerContext()

  return (
    <Box height={'100%'} display={'flex'} flexDirection={'column'} gap={1}>
      <Box
        padding={theme.spacing(1)}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        display={'flex'}
        alignItems={'center'}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Menu />
          </IconButton>
        )}

        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          overflow={'hidden'}
          whiteSpace={'nowrap'}
          textOverflow={'ellipsis'}
        >
          {title}
        </Typography>
      </Box>

      {toolBar ?? <Box>{toolBar}</Box>}

      <Box>{children}</Box>
    </Box>
  )
}
