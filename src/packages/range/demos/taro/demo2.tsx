import React, { useState } from 'react'
import { Range, Cell } from '@nutui/nutui-react-taro'
import { rn, harmony } from '@/utils/platform-taro'

let cellStyle = {
  padding: '40px 18px',
} as any

if (rn()) {
  cellStyle = {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 18,
    paddingRight: 18,
  }
}

if (harmony()) {
  cellStyle = {
    paddingTop: '40PX',
    paddingBottom: '40PX',
    paddingLeft: '18PX',
    paddingRight: '18PX',
  }
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
