import React, { useState, useEffect } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo15 = () => {
  const [tabvalue, setTabvalue] = useState<number | string>(0)
  const [list, setList] = useState<number[]>([])
  useEffect(() => {
    setTimeout(() => {
      setTabvalue(2)
      setList([...new Array(3).keys()])
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
            Tab {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo15
