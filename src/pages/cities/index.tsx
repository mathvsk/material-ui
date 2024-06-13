import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BasicLayout } from '../../shared/layouts/basic-layout'
import { ToolBar } from '../../shared/components/tool-bar'
import { IPersons, PersonService } from '../../shared/services/api/person'
import { useDebounce } from '../../shared/hooks/use-debounce'
import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material'
import { Environment } from '../../shared/environment'

export function Persons() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { debounce } = useDebounce()
  const [rows, setRows] = useState<IPersons[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [totalCount, setTotalCount] = useState(0)

  const inputValue = useMemo(() => {
    return searchParams.get('searchBar') || ''
  }, [searchParams])

  useEffect(() => {
    // Da pra fazer isso, pq o react com informações basicas, ele não vai renderizar novamente por ser o mesmo valor
    setIsLoading(true)

    debounce(() => {
      getPersons()
    })
  }, [inputValue])

  async function getPersons() {
    const result = await PersonService.getAll(1, inputValue)
    setIsLoading(false)

    if (result instanceof Error) {
      return alert(result.message)
    }

    setRows(result.data)
    setTotalCount(result.totalCount)
  }

  return (
    <BasicLayout
      title="Persons"
      toolBar={
        <ToolBar
          showSearchInput
          searchText={inputValue}
          newButtonText="Nova"
          onSearchTextChange={(text) =>
            setSearchParams({ searchBar: text }, { replace: true })
          }
        />
      }
    >
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ margin: 1, width: 'auto' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Actions</TableCell>
              <TableCell>Full name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell></TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          {totalCount === 0 && !isLoading && (
            <caption>{Environment.EMPTY_LIST}</caption>
          )}

          <TableFooter>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={3}>
                  <LinearProgress variant="indeterminate" />
                </TableCell>
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </TableContainer>
    </BasicLayout>
  )
}
