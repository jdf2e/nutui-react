import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo21 = () => {
  const [tab8value, setTab8value] = useState<string | number>('0')
  const [tab9value, setTab9value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab8value}
        onChange={(value) => {
          setTab8value(value)
        }}
        autoHeight
      >
        <Tabs.TabPane title="Tab longitem">
          <Tabs
            value={tab9value}
            onChange={(value) => {
              setTab9value(value)
            }}
            direction="vertical"
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
export default Demo21
