import { BasicLayout } from '../../shared/layouts/basic-layout'
import { ToolBar } from '../../shared/components/tool-bar'

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
