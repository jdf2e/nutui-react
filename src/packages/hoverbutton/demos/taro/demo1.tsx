/**
 * 基础用法
 */
import React from 'react'
import { HoverButton } from '@nutui/nutui-react-taro'
import { ITouchEvent } from '@tarojs/components'
import { Cart } from '@nutui/icons-react-taro'

const Demo1 = () => {
  const testClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    console.log('点击事件')
  }

  return <HoverButton icon={<Cart />} onClick={testClick} />
}
export default Demo1
