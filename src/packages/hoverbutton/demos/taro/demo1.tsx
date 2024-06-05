/**
 * 基础用法
 */
import React from 'react'
import { HoverButton } from '@nutui/nutui-react-taro'
import { Cart } from '@nutui/icons-react-taro'
import { ITouchEvent, View } from '@tarojs/components'

const Demo1 = () => {
  const testClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    console.log('点击事件')
  }

  return (
    <View>
      <HoverButton icon={<Cart />} onClick={testClick} />
    </View>
  )
}
export default Demo1
