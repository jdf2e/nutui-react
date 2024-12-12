import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'
import { Text } from '@tarojs/components'

const Demo18 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  const list = Array.from(new Array(2).keys())
  return (
    <>
      <Tabs
        style={{ height: 300 }}
        value={tabvalue}
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
export default Demo18
