import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo11 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tabvalue}
        onChange={(value) => {
          setTabvalue(value)
        }}
      >
        <Tabs.TabPane title="Tab longitem" value="0">
          Tab longitem
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2" value="1" disabled>
          Tab 2
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3" value="2">
          Tab 3
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo11
