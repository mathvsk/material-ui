import { BasicLayout } from '../../shared/layouts/basic-layout'
import { ToolBar } from '../../shared/components/tool-bar'
import { ActionBar } from '../../shared/components/action-bar'

export function Dashboard() {
  return (
    <BasicLayout
      title={'Dashboard'}
      toolBar={<ToolBar showSearchInput newButtonText={'Novo'} />}
    >
      <ActionBar showBackButton />
      <p>asa</p>
    </BasicLayout>
  )
}
