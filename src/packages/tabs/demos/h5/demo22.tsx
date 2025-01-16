import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo22 = () => {
  const [tab11value, setTab11value] = useState<string | number>('0')
  const [tab12value, setTab12value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab11value}
        onChange={(value) => {
          setTab11value(value)
        }}
        style={{ '--nutui-tabs-titles-font-size': '20px' }}
      >
        <Tabs.TabPane title="Tab longitem"> Tab longitem </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
      <Tabs
        value={tab12value}
        onChange={(value) => {
          setTab12value(value)
        }}
        style={{ '--nutui-tabs-titles-font-size': '12px' }}
      >
        <Tabs.TabPane title="Tab longitem"> Tab longitem </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo22
