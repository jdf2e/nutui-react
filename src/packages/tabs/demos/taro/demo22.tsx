import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo22 = () => {
  const [tab1value, setTab1value] = useState('0')
  return (
    <>
      <Tabs
        value={tab1value}
        onChange={(value) => {
          setTab1value(paneKey)
        }}
        style={{ '--nutui-tabs-titles-font-size': '20px' }}
      >
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
      <Tabs
        value={tab1value}
        onChange={(value) => {
          setTab1value(paneKey)
        }}
        style={{ '--nutui-tabs-titles-font-size': '12px' }}
      >
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo22
