import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo17 = () => {
  const [tab4value, setTab4value] = useState('0')
  return (
    <>
      <Tabs
        value={tab4value}
        style={{ height: '300px' }}
        onChange={(value) => {
          setTab4value(value)
        }}
        direction="vertical"
      >
        {list4.map((item) => (
          <Tabs.TabPane key={item} title={`Tab ${item}`}>
            Tab {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo17
