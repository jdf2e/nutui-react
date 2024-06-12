import React from 'react'
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

const Demo9 = () => {
  return (
    <Cell style={cellStyle}>
      <Range defaultValue={50} disabled />
    </Cell>
  )
}
export default Demo9
