import { Box, Button, Divider, Paper, Skeleton, useTheme } from '@mui/material'

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

  showNewButtonLoading?: boolean
  showBackButtonLoading?: boolean
  showDeleteButtonLoading?: boolean
  showSaveButtonLoading?: boolean
  showSaveAndCloseButtonLoading?: boolean
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

  showNewButtonLoading = false,
  showBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showSaveButtonLoading = false,
  showSaveAndCloseButtonLoading = false,
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
      {showSaveButton && !showSaveButtonLoading && (
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

      {showSaveButton && <Skeleton width={110} height={60} />}

      {showSaveAndCloseButton && !showSaveAndCloseButtonLoading && (
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

      {showSaveAndCloseButtonLoading && <Skeleton width={180} height={60} />}

      {showDeleteButton && !showDeleteButtonLoading && (
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

      {showDeleteButtonLoading && <Skeleton width={110} height={60} />}

      {showNewButton && !showNewButtonLoading && (
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

      {showNewButtonLoading && <Skeleton width={110} height={60} />}

      <Divider variant="middle" orientation="vertical" />

      {showBackButton && !showBackButtonLoading && (
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

      {showBackButtonLoading && <Skeleton width={110} height={60} />}
    </Box>
  )
}
