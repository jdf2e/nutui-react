import React from 'react'
import { BackTop, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const handleClick = () => {
    console.log('触发返回顶部')
  }
  const demoStyle = {
    height: 'auto',
    minHeight: 'auto',
  }
  return (
    <>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop onClick={handleClick} />
    </>
  )
}
export default Demo4
