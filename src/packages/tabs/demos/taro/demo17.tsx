import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'
import { Text } from '@tarojs/components'

const Demo17 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  const list = Array.from(new Array(20).keys())
  return (
    <>
      <Tabs
        value={tabvalue}
        style={{ height: 300 }}
        onChange={(value) => {
          setTabvalue(value)
        }}
        direction="vertical"
      >
        {list.map((item) => (
          <Tabs.TabPane key={item} title={`Tab ${item}`}>
            <Text>Tab {item}</Text>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo17
