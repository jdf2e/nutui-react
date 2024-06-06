import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Text } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo1Rn from './demos/taro/demo1-rn'
import Demo2 from './demos/taro/demo2'
import Demo2Rn from './demos/taro/demo2-rn'
import Demo3 from './demos/taro/demo3'
import Demo3Rn from './demos/taro/demo3-rn'
import Demo4 from './demos/taro/demo4'
import Demo4Rn from './demos/taro/demo4-rn'
// import Demo5 from './demos/taro/demo5'

const isRn = Taro.getEnv() === 'RN'

const HoverDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      show: '展示',
      basic: '基础用法',
      multiButtons: '多个按钮',
      hasTabbar: '有底部导航栏的情况',
      customZIndex: '自定义层级',
      customSpacing: '自定义间距',
    },
    'zh-TW': {
      show: '展示',
      basic: '基礎用法',
      multiButtons: '多個按鈕',
      hasTabbar: '有底部導航欄的情況',
      customZIndex: '自定義層級',
      customSpacing: '自定義間距',
    },
    'en-US': {
      show: 'Show ',
      basic: 'Basic Usage',
      multiButtons: 'Multiple Buttons',
      hasTabbar: 'With Tabbar',
      customZIndex: 'Custom Z-Index',
      customSpacing: 'Custom Spacing',
    },
  })
  const [curDemo, setCurDemo] = useState('basic')

  return (
    <View>
      <Header />
      <ScrollView
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={isRn ? { minHeight: 420 } : {}}
      >
        <Text className="h2">{translated.basic}</Text>
        <Button
          block
          onClick={() => {
            setCurDemo('basic')
          }}
        >
          {`${translated.show}${translated.basic}`}
        </Button>

        <Text className="h2">{translated.multiButtons}</Text>
        <Button
          block
          onClick={() => {
            setCurDemo('multiButtons')
          }}
        >
          {`${translated.show}${translated.multiButtons}`}
        </Button>

        <Text className="h2">{translated.hasTabbar}</Text>
        <Button
          block
          onClick={() => {
            setCurDemo('hasTabbar')
          }}
        >
          {`${translated.show}${translated.hasTabbar}`}
        </Button>

        <Text className="h2">{translated.customZIndex}</Text>
        <Button
          block
          onClick={() => {
            setCurDemo('customZIndex')
          }}
        >
          {`${translated.show}${translated.customZIndex}`}
        </Button>

        {/* <View className="h2">{translated.customSpacing}</View> */}
        {/* <Demo5 /> */}
      </ScrollView>

      {curDemo === 'basic' && (isRn ? <Demo1Rn /> : <Demo1 />)}
      {curDemo === 'multiButtons' && (isRn ? <Demo2Rn /> : <Demo2 />)}
      {curDemo === 'hasTabbar' && (isRn ? <Demo3Rn /> : <Demo3 />)}
      {curDemo === 'customZIndex' && (isRn ? <Demo4Rn /> : <Demo4 />)}
    </View>
  )
}

export default HoverDemo
