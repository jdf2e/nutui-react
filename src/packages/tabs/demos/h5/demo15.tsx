import React, { useState, useEffect } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo15 = () => {
  const [tab3value, setTab3value] = useState<number | string>(0)
  const [list3, setList3] = useState<number[]>([])
  useEffect(() => {
    setTimeout(() => {
      setTab3value(2)
      setList3([...new Array(3).keys()])
    }, 3000)
  }, [])
  return (
    <>
      <Tabs
        value={tab3value}
        onChange={(value) => {
          setTab3value(value)
        }}
      >
        {list3.map((item) => (
          <Tabs.TabPane key={item} title={`Tab ${item}`}>
            Tab {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo15
