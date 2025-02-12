import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo14 = () => {
  const [tabvalue, setTabvalue] = useState<number | string>('0')
  return (
    <>
      <Tabs
        value={tabvalue}
        autoHeight
        onChange={(value) => {
          setTabvalue(value)
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
