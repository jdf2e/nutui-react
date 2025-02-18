/**
 * JDRN 端最佳实践
 */
import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { BackTop, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [scrollRes, setScrollRes] = useState<any>(null)

  return (
    // @TODO 待 taro 侧支持获取视窗尺寸后调整
    <ScrollView
      onScroll={(res) => {
        setScrollRes(res.detail)
      }}
      className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
      style={{ width: '100%', height: '100%' }}
    >
      <View className="h2">基础用法</View>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop scrollRes={scrollRes} />
    </ScrollView>
  )
}
export default Demo5
