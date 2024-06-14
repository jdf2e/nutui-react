import React from 'react'
import { Range, Cell } from '@nutui/nutui-react-taro'
import { harmony, rn } from '@/utils/platform-taro'

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

const Demo9 = () => {
  return (
    <Cell style={cellStyle}>
      <Range defaultValue={50} disabled />
    </Cell>
  )
}
export default Demo9
