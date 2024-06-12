import { Box, Button, Paper, TextField, useTheme } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

interface IToolBarProps {
  searchText?: string
  showSearchInput?: boolean
  onSearchTextChange?: (newText: string) => void
  newButtonText?: string
  showNewButton?: boolean
  onClickNew?: () => void
}

export function ToolBar({
  searchText = '',
  showSearchInput = false,
  onSearchTextChange,
  newButtonText = 'Novo',
  showNewButton = true,
  onClickNew,
}: IToolBarProps) {
  const theme = useTheme()

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      height={theme.spacing(7)}
      component={Paper}
    >
      {showSearchInput && (
        <TextField
          size={'small'}
          value={searchText}
          placeholder={'Pesquisar...'}
          onChange={(e) => onSearchTextChange?.(e.target.value)}
        />
      )}

      <Box display={'flex'} justifyContent={'end'} flex={1}>
        {showNewButton && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={onClickNew}
            endIcon={<AddIcon />}
          >
            {newButtonText}
          </Button>
        )}
      </Box>
    </Box>
  )
}
