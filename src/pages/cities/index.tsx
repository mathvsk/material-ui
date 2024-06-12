import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BasicLayout } from '../../shared/layouts/basic-layout'
import { ToolBar } from '../../shared/components/tool-bar'

export function Persons() {
  const [searchParams, setSearchParams] = useSearchParams()

  const inputValue = useMemo(() => {
    return searchParams.get('searchBar') || ''
  }, [searchParams])

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
