import React from 'react'
import { BackTop, Cell } from '@nutui/nutui-react'
import Demo9 from '../../../tabbar/demos/h5/demo9'

const Demo6 = () => {
  return (
    <>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop target="target" tabbarHeight={48} />
      <Demo9 />
    </>
  )
}
export default Demo6
