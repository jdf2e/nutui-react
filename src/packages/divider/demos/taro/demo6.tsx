import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react-taro'
import { Text } from '@tarojs/components'

const Demo6 = () => {
  return (
    <Cell align="center">
      <Text>文本</Text>
      <Divider direction="vertical" />
      <Text style={{ color: '#1989fa' }}>链接</Text>
      <Divider direction="vertical" />
      <Text style={{ color: '#1989fa' }}>链接</Text>
    </Cell>
  )
}
export default Demo6
