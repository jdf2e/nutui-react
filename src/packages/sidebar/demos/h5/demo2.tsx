import React, { useState } from 'react'
import { SideBar } from '@nutui/nutui-react'

const Demo2 = () => {
  const [value, setValue] = useState<number | string>('0')
  return (
    <>
      <SideBar
        style={{ height: 300 }}
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
      >
        <SideBar.Item title="Opt 1">Content 1</SideBar.Item>
        <SideBar.Item title="Opt 2">Content 2</SideBar.Item>
        <SideBar.Item title="Opt 3" disabled />
      </SideBar>
    </>
  )
}
export default Demo2
