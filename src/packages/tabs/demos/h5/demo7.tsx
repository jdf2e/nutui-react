import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo7 = () => {
  const [tab1value, setTab1value] = useState('0')
  return (
    <>
      <Tabs
        value={tab1value}
        align="left"
        onChange={(value) => {
          setTab1value(value)
        }}
      >
        <Tabs.TabPane title="Tab 1"> Tab 1</Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo7
