import React from 'react'
import { BackTop, Cell } from '@nutui/nutui-react'

const Demo5 = () => {
  const handleClick = () => {
    const ele = document.getElementsByClassName('backtop-button')[0]
  }
  return (
    <>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop
        onClick={() => {
          handleClick()
        }}
        target="target"
        className="backtop-button"
      />
    </>
  )
}
export default Demo5
