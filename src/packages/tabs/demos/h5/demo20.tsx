import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo20 = () => {
  const [tab8value, setTab8value] = useState<number | string>('0')
  const [tab9value, setTab9value] = useState<number | string>('0')
  return (
    <>
      <Tabs
        value={tab8value}
        onChange={(value) => {
          setTab8value(value)
        }}
        direction="vertical"
      >
        <Tabs.TabPane title="Tab longitem">
          <Tabs
            value={tab9value}
            onChange={(value) => {
              setTab9value(value)
            }}
            direction="horizontal"
          >
            <Tabs.TabPane title="Tab longitem"> Tab longitem </Tabs.TabPane>
            <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
            <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
          </Tabs>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo20
