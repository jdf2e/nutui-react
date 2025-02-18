import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo21 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  const [tabvalue1, setTabvalue1] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tabvalue}
        onChange={(value) => {
          setTabvalue(value)
        }}
        autoHeight
      >
        <Tabs.TabPane title="Tab longitem">
          <Tabs
            value={tabvalue1}
            onChange={(value) => {
              setTabvalue1(value)
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
