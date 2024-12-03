import React, { useState, useEffect } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'
import { Text } from '@tarojs/components'

const Demo15 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>(0)
  const [list, setlist] = useState<number[]>([])
  useEffect(() => {
    setTimeout(() => {
      setTabvalue(2)
      setlist([...new Array(3).keys()])
    }, 3000)
  }, [])
  return (
    <>
      <Tabs
        value={tabvalue}
        onChange={(value) => {
          setTabvalue(value)
        }}
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
export default Demo15
