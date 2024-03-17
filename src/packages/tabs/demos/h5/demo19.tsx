import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo19 = () => {
  const [tab6value, setTab6value] = useState<number | string>('0')
  const list5 = Array.from(new Array(2).keys())
  return (
    <>
      <Tabs
        style={{ height: '300px' }}
        value={tab6value}
        onChange={(value) => {
          setTab6value(value)
        }}
        activeType="smile"
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
export default Demo19
