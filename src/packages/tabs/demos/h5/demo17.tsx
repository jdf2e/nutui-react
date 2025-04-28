import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo17 = () => {
  const [tabvalue, setTabvalue] = useState<number | string>('0')
  const list = Array.from(new Array(20).keys())
  return (
    <>
      <Tabs
        value={tabvalue}
        style={{ height: '300px' }}
        onChange={(value) => {
          setTabvalue(value)
        }}
        direction="vertical"
      >
        {list.map((item) => (
          <Tabs.TabPane key={item} title={`Tab ${item}`}>
            Tab {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo17
