/**
 * 多个按钮
 */
import React from 'react'
import { HoverButton } from '@nutui/nutui-react-taro'
import { Cart } from '@nutui/icons-react-taro'

const Demo2 = () => {
  const testClick1 = () => {
    console.log('点击了第 1 个按钮')
  }
  const testClick2 = () => {
    console.log('点击了第 2 个按钮')
  }
  const testClick3 = () => {
    console.log('点击了第 3 个按钮')
  }

  return (
    <HoverButton>
      <HoverButton.Item icon={<Cart />} onClick={testClick1} />
      <HoverButton.Item icon={<Cart />} onClick={testClick2} />
      <HoverButton.Item icon={<Cart />} onClick={testClick3} />
    </HoverButton>
  )
}
export default Demo2
