/**
 * 基础用法
 */
import React from 'react'
import { HoverButton } from '@nutui/nutui-react-taro'
import { ITouchEvent, View, Icon } from '@tarojs/components'
// @TODO Icon 暂未适配 rn、鸿蒙端
// import { Cart } from '@nutui/icons-react-taro'

const Demo1 = () => {
  const testClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    console.log('点击事件')
  }

  return (
    <View>
      <HoverButton icon={<Icon type="search" />} onClick={testClick} />
    </View>
  )
}
export default Demo1
