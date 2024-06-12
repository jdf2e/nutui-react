import React, { useState } from 'react'
import { Range, Cell } from '@nutui/nutui-react-taro'
import { rn } from '@/utils/platform-taro'

const cellStyle = !rn()
  ? {
      padding: '40px 18px',
    }
  : {
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 18,
      paddingRight: 18,
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
