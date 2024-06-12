import { BasicLayout } from '../../shared/layouts/basicLayout'
import { ToolBar } from '../../shared/components/toolBar'

export function Dashboard() {
  return (
    <BasicLayout
      title={'Dashboard'}
      toolBar={<ToolBar showSearchInput newButtonText={'Novo'} />}
    >
      <p>asa</p>
    </BasicLayout>
  )
}
