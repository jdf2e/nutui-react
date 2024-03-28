import React, { useState } from 'react'
import { NavBar, Tabs, TabPane } from '@nutui/nutui-react-taro'
import { More, ArrowLeft } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'

const Demo3 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  const [tab2value, setTab2value] = useState<string | number>('0')
  return (
    <>
      <NavBar
        back={<ArrowLeft size={14} />}
        right={
          <>
            <span
              style={{ marginRight: '5px' }}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
            >
              编辑
            </span>
            <More
              size={20}
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <div style={{ width: '100%' }}>
          <Tabs
            value={tab1value}
            onChange={(paneKey) => {
              setTab1value(paneKey)
            }}
            style={{
              '--nutui-tabs-titles-gap': 0,
            }}
          >
            <TabPane title="Tab 1"> Tab 1 </TabPane>
            <TabPane title="Tab 2"> Tab 2 </TabPane>
            <TabPane title="Tab 3"> Tab 3 </TabPane>
            <TabPane title="Tab 4"> Tab 4 </TabPane>
          </Tabs>
        </div>
      </NavBar>

      <NavBar
        titleAlign="left"
        back={<ArrowLeft size={14} />}
        right={
          <>
            <span
              style={{ marginRight: '5px' }}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
            >
              编辑
            </span>
            <More
              size={20}
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <div>
          <Tabs
            className="navbar-tabs"
            align="left"
            activeType="simple"
            value={tab2value}
            onChange={(paneKey) => {
              setTab2value(paneKey)
            }}
          >
            <TabPane title="Tab 1"> Tab 1 </TabPane>
            <TabPane title="Tab 2"> Tab 2 </TabPane>
            <TabPane title="Tab 3"> Tab 3 </TabPane>
          </Tabs>
        </div>
      </NavBar>
    </>
  )
}
export default Demo3
