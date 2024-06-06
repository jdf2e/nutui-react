/**
 * 基础用法
 */
import React from 'react'
import { HoverButton, Toast } from '@nutui/nutui-react'
import { Cart } from '@nutui/icons-react'

const Demo1 = () => {
  const testClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    alert('点击事件')
    Toast.show({
      title: '点击事件',
    })
  }

  return <HoverButton icon={<Cart />} onClick={testClick} />
}
export default Demo1
