import React from 'react'
import { TimePannel } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

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
