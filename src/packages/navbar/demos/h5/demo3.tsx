import React, { useState } from 'react'
import { NavBar, TabPane, Tabs, Toast, Space } from '@nutui/nutui-react'
import { ArrowLeft, More } from '@nutui/icons-react'

const Demo3 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <Space direction="vertical">
      <NavBar
        back={
          <div className="navbar-android-button">
            <ArrowLeft />
          </div>
        }
        right={
          <div className="navbar-android-button">
            <span onClick={(e) => Toast.show('编辑')}>编辑</span>
            <More onClick={(e) => Toast.show('icon')} />
          </div>
        }
        onBackClick={(e) => Toast.show('返回')}
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
export default Demo3
