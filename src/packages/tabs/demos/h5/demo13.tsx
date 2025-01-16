import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo13 = () => {
  const [tab2value, setTab2value] = useState<number | string>('0')
  return (
    <>
      <Tabs
        value={tab2value}
        style={{ position: 'relative', zIndex: 11 }}
        tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}
        onChange={(value) => {
          setTab2value(value)
        }}
      >
        <Tabs.TabPane title="Tab longitem" value="0">
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
          <p>Tab longitem</p>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2" value="1">
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
          <p>Tab 2</p>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3" value="2">
          Tab 3
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo13
