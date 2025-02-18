import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo20 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  const [tabvalue1, setTabvalue1] = useState<string | number>('0')
  return (
    <>
      <Tabs
        style={{ height: 300 }}
        value={tabvalue}
        onChange={(value) => {
          setTabvalue(value)
        }}
        direction="vertical"
      >
        <Tabs.TabPane title="Tab longitem">
          <Tabs
            value={tabvalue1}
            onChange={(value) => {
              setTabvalue1(value)
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
