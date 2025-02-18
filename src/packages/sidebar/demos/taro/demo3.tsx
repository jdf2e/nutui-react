import React, { useState } from 'react'
import { SideBar } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [value, setValue] = useState<number | string>('b')
  return (
    <>
      <SideBar
        style={{ height: 300 }}
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
      >
        <SideBar.Item title="Opt 1" value="a">
          Content 1
        </SideBar.Item>
        <SideBar.Item title="Opt 2" value="b">
          Content 2
        </SideBar.Item>
        <SideBar.Item title="Opt 3" value="c">
          Content 3
        </SideBar.Item>
      </SideBar>
    </>
  )
}
export default Demo3
