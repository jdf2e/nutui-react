import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'

const PriceDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '支持三种尺寸：small、normal、large',
      title2: '不保留小数',
      title3: '有人民币符号，无千位分隔',
      title4: '有人民币符号，有千位分隔，保留小数点后三位',
      title5: '调整 symbol 符号位置',
      title6: '异步随机变更',
      title7: '不展示 symbol 符号',
      title8: '划线价',
    },
    'zh-TW': {
      title1: '支持三種尺寸：small、normal、large',
      title2: '不保留小數',
      title3: '有人民幣符號，無千位分隔',
      title4: '有人民幣符號，有千位分隔，保留小數點後三位',
      title5: '調整 symbol 符號位置',
      title6: '異步隨機變更',
      title7: '不展示 symbol 符號',
      title8: '劃線價',
    },
    'en-US': {
      title1: 'Support three sizes：small、normal、large',
      title2: 'No decimals',
      title3: 'With RMB symbol, no thousands separator',
      title4:
        'With RMB symbol, separated by thousands, keep three decimal places',
      title5: 'Adjust the symbol position',
      title6: 'Asynchronous random changes',
      title7: 'Do not display symbol',
      title8: 'Line-through price',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <View className="h2">{translated.title1}</View>
        <Demo1 />
        <View className="h2">{translated.title2}</View>
        <Cell>
          <Demo2 />
        </Cell>
        <View className="h2">{translated.title3}</View>
        <Cell>
          <Demo3 />
        </Cell>
        <View className="h2">{translated.title4}</View>
        <Cell>
          <Demo4 />
        </Cell>
        <View className="h2">{translated.title5}</View>
        <Cell>
          <Demo5 />
        </Cell>
        <View className="h2">{translated.title7}</View>
        <Cell>
          <Demo6 />
        </Cell>
        <View className="h2">{translated.title6}</View>
        <Cell>
          <Demo7 />
        </Cell>
        <View className="h2">{translated.title8}</View>
        <Cell>
          <Demo8 />
        </Cell>
      </ScrollView>
    </>
  )
}

export default PriceDemo
