import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { SvgIconComponent } from '@mui/icons-material'

interface IListItem {
  to: string
  icon: SvgIconComponent
  label: string
  onClick: (() => void) | undefined
}

export function ListItemLink({ to, icon: Icon, label, onClick }: IListItem) {
  const navigate = useNavigate()
  const resolvedPath = useResolvedPath(to)
  const match = useMatch({ path: resolvedPath.pathname, end: false })

  function handleClick() {
    navigate(to)
    onClick?.()
  }

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}
