import React from 'react'
import Taro from '@tarojs/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const ConfigProviderDemo = () => {
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Demo1 />
        <Demo2 />
        <Demo3 />
      </div>
    </>
  )
}

export default ConfigProviderDemo
