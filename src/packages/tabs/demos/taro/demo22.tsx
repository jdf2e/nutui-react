import React, { useState } from 'react'
import { Tabs, pxTransform } from '@nutui/nutui-react-taro'

// TODO：鸿蒙支持的不好：自定义变量
const Demo22 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tabvalue}
        onChange={(value) => {
          setTabvalue(value)
        }}
        style={{ '--nutui-tabs-titles-font-size': pxTransform(20) }}
      >
        <Tabs.TabPane title="Tab longitem"> Tab longitem </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
      <Tabs
        value={tabvalue}
        onChange={(value) => {
          setTabvalue(value)
        }}
        style={{ '--nutui-tabs-titles-font-size': pxTransform(12) }}
      >
        <Tabs.TabPane title="Tab longitem"> Tab longitem </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo22
