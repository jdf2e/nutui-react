import React from 'react'
import Taro from '@tarojs/taro'
import { Cell } from '@/packages/nutui.react.taro'
import '@/packages/skeleton/demo.scss'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'

const SkeletonDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '3b02fdee': '触发了change事件，开关状态：',
      '84aa6bce': '基础用法',
      ea3bc18a: '传入多行',
      '02a53df5': '显示头像',
      '0a001122': '标题段落圆角风格',
      '07d62d5c': '显示子组件',
      '652c6725':
        '一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。',
    },
    'zh-TW': {
      '3b02fdee': '觸發了change事件，開關狀態：',
      '84aa6bce': '基礎用法',
      ea3bc18a: '傳入多行',
      '02a53df5': '顯示頭像',
      '0a001122': '標題段落圓角風格',
      '07d62d5c': '圖片組合',
      '652c6725':
        '一套京東風格的輕量級移動端React組件庫，提供豐富的基礎組件和業務組件，幫助開發者快速搭建移動應用。',
    },
    'en-US': {
      '3b02fdee': 'The change event is triggered, the switch state:',
      '84aa6bce': 'Basic usage',
      ea3bc18a: 'Pass in multiple lines',
      '02a53df5': 'show avatar',
      '0a001122': 'Heading Paragraph Rounded Corner Style',
      '07d62d5c': 'show subcomponents',
      '652c6725':
        'A set of JD-style lightweight mobile React component library, providing rich basic components and business components to help developers quickly build mobile applications.',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated['84aa6bce']}</h2>
        <Cell className="ske-cell-single">
          <Demo1 />
        </Cell>

        <h2>{translated.ea3bc18a}</h2>
        <Cell className="ske-cell-double">
          <Demo2 />
        </Cell>

        <h2>{translated['02a53df5']}</h2>
        <Cell>
          <Demo3 />
        </Cell>

        <h2>{translated['0a001122']}</h2>
        <Cell className="ske-cell-single">
          <Demo4 />
        </Cell>

        <h2>{translated['07d62d5c']}</h2>
        <Cell>
          <Demo5
            description={translated['652c6725']}
            log={translated['3b02fdee']}
          />
        </Cell>
      </div>
    </>
  )
}

export default SkeletonDemo
