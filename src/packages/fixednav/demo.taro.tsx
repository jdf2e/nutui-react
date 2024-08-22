import React from 'react'
import Taro from '@tarojs/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'

const FixedNavDemo = () => {
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Demo1 />
        <Demo2 />
        <Demo3 />
        <Demo4 />
        {/* <!-- 配合 Drag 支持拖拽 ，小程序暂不支持 --> */}
        <Demo5 />
      </div>
    </>
  )
}

export default FixedNavDemo
