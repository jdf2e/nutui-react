import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo5 from './demos/taro/demo5'
import { harmonyAndRn } from '@/utils/platform-taro'

const BackTopDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title: '基础用法',
    },
    'en-US': {
      title: 'Basic Usage',
    },
    'zh-TW': {
      title: '基礎用法',
    },
  })
  const demoStyle = {
    height: '100%',
    minHeight: 'auto',
  }

  return (
    <View
      style={{
        position: 'relative',
      }}
    >
      <Header />
      {harmonyAndRn() ? (
        <Demo5>
          <View
            className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
            style={{ height: 'auto' }}
          >
            <View className="h2">{translated.title}</View>
            {new Array(24).fill(0).map((_, index) => {
              return <Cell key={index}>我是测试数据{index}</Cell>
            })}
          </View>
        </Demo5>
      ) : (
        <ScrollView
          className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
          style={demoStyle}
        >
          <View className="h2">{translated.title}</View>
          <Demo1 />
        </ScrollView>
      )}
    </View>
  )
}

export default BackTopDemo
