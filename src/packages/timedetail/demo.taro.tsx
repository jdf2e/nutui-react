import React from 'react'
import Taro from '@tarojs/taro'
import { TimeDetail } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

const TimeDetailDemo = () => {
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>基础用法</h2>
        <TimeDetail />
      </div>
    </>
  )
}

export default TimeDetailDemo
