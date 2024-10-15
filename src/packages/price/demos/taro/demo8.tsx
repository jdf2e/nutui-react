import React from 'react'
import { Cell, Price } from '@nutui/nutui-react-taro'
import { Text } from '@tarojs/components'

const Demo8 = () => {
  return (
    <Cell align="center">
      <Price price={1513.12} size="normal" thousands />
      <Text>&nbsp;</Text>
      <Price price={1513.88} thousands line />
    </Cell>
  )
}
export default Demo8
