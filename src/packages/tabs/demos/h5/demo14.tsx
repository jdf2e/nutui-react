import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo14 = () => {
  const [tab2value, setTab2value] = useState<number | string>('0')
  return (
    <>
      <Tabs
        value={tab2value}
        autoHeight
        onChange={(value) => {
          setTab2value(value)
        }}
      >
        <Tabs.TabPane title="Tab longitem">
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo14
