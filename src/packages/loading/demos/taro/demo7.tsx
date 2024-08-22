import React from 'react'
import { Loading, Cell } from '@nutui/nutui-react-taro'
import { Star } from '@nutui/icons-react-taro'

const Demo7 = () => {
  return (
    <Cell>
      <Loading direction="vertical" icon={<Star size={24} color="red" />} />
    </Cell>
  )
}
export default Demo7
