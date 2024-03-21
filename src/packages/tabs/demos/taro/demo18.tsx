import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo18 = () => {
  const [tab5value, setTab5value] = useState<string | number>('0')
  const list5 = Array.from(new Array(2).keys())
  return (
    <>
      <Tabs
        style={{ height: '300px' }}
        value={tab5value}
        onChange={(value) => {
          setTab5value(value)
        }}
        direction="vertical"
      >
        {list5.map((item) => (
          <Tabs.TabPane key={item} title={`Tab ${item}`}>
            Tab {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo18
