import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo4 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tabvalue}
        style={{ '--nutui-tabs-titles-height': '40px' }}
        onChange={(value) => {
          setTabvalue(value)
        }}
        activeType="card"
      >
        <Tabs.TabPane title="Tab longitem"> Tab longitem </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo4
