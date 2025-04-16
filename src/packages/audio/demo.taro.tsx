import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import Header from '@/sites/components/header'

const AudioDemo = () => {
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View>
          Taro原生的Audio组件,1.6.0版本开始，该组件不再维护。 建议使用能力更强的
          Taro.createInnerAudioContext 接口。
        </View>
      </ScrollView>
    </>
  )
}
export default AudioDemo
