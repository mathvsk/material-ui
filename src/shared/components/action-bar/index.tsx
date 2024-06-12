import { Box, Button, Divider, Paper, useTheme } from '@mui/material'

import { Add, ArrowBack, Delete, Save } from '@mui/icons-material'

interface IActionBarProps {
  newButtonText?: string

  showNewButton?: boolean
  showBackButton?: boolean
  showDeleteButton?: boolean
  showSaveButton?: boolean
  showSaveAndCloseButton?: boolean

  onClickNew?: () => void
  onClickBack?: () => void
  onClickDelete?: () => void
  onClickSave?: () => void
  onClickSaveAndClose?: () => void
}

export function ActionBar({
  newButtonText = 'Novo',

  showNewButton = true,
  showBackButton = true,
  showDeleteButton = true,
  showSaveButton = true,
  showSaveAndCloseButton = false,

  onClickNew,
  onClickBack,
  onClickDelete,
  onClickSave,
  onClickSaveAndClose,
}: IActionBarProps) {
  const theme = useTheme()

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(7)}
      component={Paper}
    >
      {showSaveButton && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          startIcon={<Save />}
          onClick={onClickSave}
        >
          Salvar
        </Button>
      )}

      {showSaveAndCloseButton && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Save />}
          onClick={onClickSaveAndClose}
        >
          Salvar e voltar
        </Button>
      )}
      {showDeleteButton && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Delete />}
          onClick={onClickDelete}
        >
          Apagar
        </Button>
      )}
      {showNewButton && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Add />}
          onClick={onClickNew}
        >
          {newButtonText}
        </Button>
      )}

      <Divider variant="middle" orientation="vertical" />

      {showBackButton && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={onClickBack}
        >
          Voltar
        </Button>
      )}
    </Box>
  )
}
