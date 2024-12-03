import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo18 = () => {
  const [tabvalue, setTabvalue] = useState<number | string>('0')
  const list = Array.from(new Array(2).keys())
  return (
    <>
      <Tabs
        style={{ height: '300px' }}
        value={tabvalue}
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
export default Demo18
