import React, { useState } from 'react'
import { Tabs, pxTransform } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  return (
    <Tabs
      value={tabvalue}
      style={{
        '--nutui-tabs-titles-height': pxTransform(40),
        '--nutui-tabs-titles-background-color':
          'var(--nutui-color-background, #f2f3f5)',
      }}
      activeType="card"
      onChange={(value) => {
        setTabvalue(value)
      }}
      align="left"
    >
      <Tabs.TabPane title="Tab longitem"> Tab longitem </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
    </Tabs>
  )
}
export default Demo8
