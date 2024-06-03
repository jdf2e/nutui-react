import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import '@/packages/overlay/demo.scss'
import Header from '@/sites/components/header'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo1 from './demos/taro/demo1'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

const OverlayDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '84aa6bce': '基础用法',
      duration: '设置动画时间',
      lockscroll: '不锁定背景滚动',
      abbf9359: '自定义遮罩样式',
      ec0d7acf: '嵌套内容',
      closeClickLay: '点击遮罩不关闭',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      duration: '設置動畫時間',
      lockscroll: '不鎖定背景滾動',
      abbf9359: '自定義遮罩樣式',
      ec0d7acf: '嵌套內容',
      closeClickLay: '點擊遮罩不關閉',
    },
    'en-US': {
      '84aa6bce': 'Basic usage',
      duration: 'Set animation time',
      lockscroll: 'Do not lock background scrolling',
      abbf9359: 'Custom mask style',
      ec0d7acf: 'Nested content',
      closeClickLay: 'Click the mask not to close',
    },
  })

  return (
    <>
      <Header />
      {Taro.getEnv() !== Taro.ENV_TYPE.HARMONY &&
      Taro.getEnv() !== Taro.ENV_TYPE.HARMONYHYBRID &&
      Taro.getEnv() !== 'RN' ? (
        <div
          className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} demo-overlay`}
        >
          <h2>{translated['84aa6bce']}</h2>
          <Demo1 />
          <h2>{translated.abbf9359}</h2>
          <Demo2 />
          <h2>{translated.duration}</h2>
          <Demo3 />
          <h2>{translated.lockscroll}</h2>
          <Demo4 />
          <h2>{translated.ec0d7acf}</h2>
          <Demo5 />
          <h2>{translated.closeClickLay}</h2>
          <Demo6 />
        </div>
      ) : (
        <>
          <View className="h2">{translated['84aa6bce']}</View>
          <Demo1 />
          <View className="h2">{translated.abbf9359}</View>
          <Demo2 />
          <View className="h2">{translated.duration}</View>
          <Demo3 />
          <View className="h2">{translated.lockscroll}</View>
          <Demo4 />
          <View className="h2">{translated.ec0d7acf}</View>
          <Demo5 />
          <View className="h2">{translated.closeClickLay}</View>
          <Demo6 />
        </>
      )}
    </>
  )
}

export default OverlayDemo
