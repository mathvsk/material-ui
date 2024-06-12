import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BasicLayout } from '../../shared/layouts/basic-layout'
import { ToolBar } from '../../shared/components/tool-bar'
import { PersonService } from '../../shared/services/api/person'

export function Persons() {
  const [searchParams, setSearchParams] = useSearchParams()

  const inputValue = useMemo(() => {
    return searchParams.get('searchBar') || ''
  }, [searchParams])

  useEffect(() => {
    getPersons()
  }, [inputValue])

  async function getPersons() {
    const result = await PersonService.getAll()

    if (result instanceof Error) {
      return alert(result.message)
    }

    console.log(result.data[0].fullName)
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
      <p>Teste</p>
    </BasicLayout>
  )
}
