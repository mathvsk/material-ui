import { Box, Button, Divider, Paper, useTheme } from '@mui/material'
import { Add, ArrowBack, Delete, Save } from '@mui/icons-material'

export function ActionBar() {
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
      <Button
        color="primary"
        disableElevation
        variant="contained"
        startIcon={<Save />}
      >
        Salvar
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Save />}
      >
        Salvar e voltar
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Delete />}
      >
        Apagar
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Add />}
      >
        Novo
      </Button>

      <Divider variant="middle" orientation="vertical" />

      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<ArrowBack />}
      >
        Voltar
      </Button>
    </Box>
  )
}
