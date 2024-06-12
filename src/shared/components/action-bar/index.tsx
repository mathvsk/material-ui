import {
  Box,
  Button,
  Divider,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

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
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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
          <Typography variant={'button'} noWrap>
            Salvar
          </Typography>
        </Button>
      )}

      {showSaveButtonLoading && <Skeleton width={110} height={60} />}

      {showSaveAndCloseButton &&
        !showSaveAndCloseButtonLoading &&
        !smDown &&
        !mdDown && (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            startIcon={<Save />}
            onClick={onClickSaveAndClose}
          >
            <Typography variant={'button'} noWrap>
              Salvar e fechar
            </Typography>
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
          <Typography variant={'button'} noWrap>
            Apagar
          </Typography>
        </Button>
      )}

      {showDeleteButtonLoading && !smDown && !mdDown && (
        <Skeleton width={110} height={60} />
      )}

      {showNewButton && !showNewButtonLoading && !smDown && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Add />}
          onClick={onClickNew}
        >
          <Typography variant={'button'} noWrap>
            {newButtonText}
          </Typography>
        </Button>
      )}

      {showNewButtonLoading && !smDown && <Skeleton width={110} height={60} />}

      {showBackButton &&
        (showSaveButton ||
          showSaveAndCloseButton ||
          showDeleteButton ||
          showNewButton) && <Divider variant="middle" orientation="vertical" />}

      {showBackButton && !showBackButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={onClickBack}
        >
          <Typography variant={'button'} noWrap>
            Voltar
          </Typography>
        </Button>
      )}

      {showBackButtonLoading && <Skeleton width={110} height={60} />}
    </Box>
  )
}
