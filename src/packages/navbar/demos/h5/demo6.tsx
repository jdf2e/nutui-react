import React, { useState } from 'react'
import { NavBar, TabPane, Tabs, Toast, Space } from '@nutui/nutui-react'
import { ArrowLeft, More } from '@nutui/icons-react'
import { MaterialView } from '../../../materialview/materialview'
import { useAppTheme } from '@/sites/mobile/theme-context'

const Demo6 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  const { darkMode } = useAppTheme()
  return (
    <Space direction="vertical">
      <NavBar
        back={
          <MaterialView
            className="navbar-iOS26-button"
            scene="top-solid"
            darkMode={darkMode}
          >
            <ArrowLeft />
          </MaterialView>
        }
        right={
          <MaterialView
            className="navbar-iOS26-button"
            scene="top-solid"
            darkMode={darkMode}
          >
            <span onClick={(e) => Toast.show('编辑')}>编辑</span>
            <More onClick={(e) => Toast.show('icon')} />
          </MaterialView>
        }
        onBackClick={(e) => Toast.show('返回')}
        className="navbar-iOS26"
        zIndex={0}
      >
        <div style={{ width: '100%' }}>
          <Tabs
            value={tab1value}
            onChange={(paneKey) => {
              setTab1value(paneKey)
            }}
            style={{
              '--nutui-tabs-titles-background-color': 'transparent',
              '--nutui-tabs-titles-item-active-font-size':
                'calc(18px * var(--nut-scale-font, var(--nut-scale-f, 1)))',
            }}
            align="left"
          >
            <TabPane title="Tab 1"> Tab 1 </TabPane>
            <TabPane title="Tab 2"> Tab 2 </TabPane>
          </Tabs>
        </div>
      </NavBar>
    </Space>
  )
}
export default Demo6
