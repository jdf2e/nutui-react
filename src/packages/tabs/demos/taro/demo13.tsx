import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo13 = () => {
  const [tab2value, setTab2value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab2value}
        tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}
        onChange={(value) => {
          setTab2value(value)
        }}
      >
        <Tabs.TabPane title="Tab longitem">
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2">
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo13
