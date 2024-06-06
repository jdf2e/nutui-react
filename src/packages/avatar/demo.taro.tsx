import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import './demo.scss'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'
import Demo9 from './demos/taro/demo9'

const AvatarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '67f78db5': '支持三种尺寸：small、normal、large',
      '3928b17e': '支持两种形状：square、round',
      '049b6a97': '支持三种类型：图片、Icon 以及字符',
      a304dabf: 'Icon和字符型可以自定义图标颜色及背景色',
      '89bca4e7': '带徽标的头像',
      e981579e: '头像组合展现',
      f645fc65: '组合头像可控制层级方向',
      '43f00872': '点击头像触发事件',
      f645fc66: '列表展示',
    },
    'zh-TW': {
      '67f78db5': '支持三種尺寸：small、normal、large',
      '3928b17e': '支持兩種形狀：square、round',
      '049b6a97': '支持三種類型：圖片、Icon 以及字符',
      a304dabf: 'Icon和字符型可以自定義圖標顏色及背景色',
      '89bca4e7': '帶徽標的頭像',
      e981579e: '頭像組合展現',
      f645fc65: '組合頭像可控制層級方向',
      '43f00872': '點擊頭像觸發事件',
      f645fc66: '列表展示',
    },
    'en-US': {
      '67f78db5': 'Support three sizes: small, normal, large',
      '3928b17e': 'Two shapes are supported: square, round',
      '049b6a97': 'Three types are supported: Picture, Icon and Character',
      a304dabf:
        'Icon and character type can customize icon color and background color',
      '89bca4e7': 'Avatar with logo',
      e981579e: 'Avatar combination display',
      f645fc65: 'Combining avatars to control hierarchy direction',
      '43f00872': 'Click on the avatar to trigger the event',
      f645fc66: 'list',
    },
  })

  return (
    <>
      <Header />
      <ScrollView
        className={`demo ${
          Taro.getEnv() === 'WEB' ? 'web' : ''
        } full avatar-demo`}
      >
        <View className="h2">{translated['67f78db5']}</View>
        <Cell align="flex-end">
          <Demo1 />
        </Cell>
        <View className="h2">{translated['3928b17e']}</View>
        <Cell>
          <Demo2 />
        </Cell>
        <View className="h2">{translated['049b6a97']}</View>
        <Cell>
          <Demo3 />
        </Cell>
        <View className="h2">{translated.a304dabf}</View>
        <Cell>
          <Demo4 />
        </Cell>
        <View className="h2">{translated['89bca4e7']}</View>
        <Cell>
          <Demo5 />
        </Cell>
        <View className="h2">{translated.e981579e}</View>
        <Demo6 />
        <View className="h2">{translated.f645fc65}</View>
        <Cell>
          <Demo7 />
        </Cell>
        <View className="h2">{translated['43f00872']}</View>
        <Cell>
          <Demo8 />
        </Cell>
        <View className="h2">{translated.f645fc66}</View>
        <Cell>
          <Demo9 />
        </Cell>
      </ScrollView>
    </>
  )
}

export default AvatarDemo
