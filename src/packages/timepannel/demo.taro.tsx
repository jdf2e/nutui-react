import React from 'react'
import Taro from '@tarojs/taro'
import { TimePannel } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

const TimePannelDemo = () => {
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>基础用法</h2>
        <TimePannel />
      </div>
    </>
  )
}

export default TimePannelDemo
