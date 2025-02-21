import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { IconFont } from '@nutui/icons-react-taro'

const Demo2 = () => {
  return (
    <Cell>
      <IconFont name="dongdong" style={{ marginRight: 10 }} />
      <IconFont name="add" style={{ marginRight: 10 }} />
      <IconFont name="minus" />
    </Cell>
  )
}
export default Demo2
