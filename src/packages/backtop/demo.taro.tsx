import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { harmony } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo5 from './demos/taro/demo5'

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
  const [scrollRes, setScrollRes] = useState<any>(null)

  return (
    <>
      <Header />
      {harmony() ? (
        <Demo5 />
      ) : (
        <ScrollView
          id="backtop-scroll"
          enhanced
          scrollY
          className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
          style={{ height: '100%' }}
          onScroll={(res) => {
            setScrollRes(res.detail)
          }}
        >
          <View className="h2">{translated.title}</View>
          <Demo1 scrollRes={scrollRes} target="backtop-scroll" />
        </ScrollView>
      )}
    </>
  )
}

export default BackTopDemo
