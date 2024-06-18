import React, { useState } from 'react'
import { Range, Cell } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const cellStyle = {
  paddingTop: pxTransform(40),
  paddingBottom: pxTransform(40),
  paddingLeft: pxTransform(18),
  paddingRight: pxTransform(18),
}

const Demo2 = () => {
  const [value, setValue] = useState(40)
  return (
    <Cell style={cellStyle}>
      <Range value={value} onChange={(val: any) => setValue(val)} />
    </Cell>
  )
}
export default Demo2
