import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import {
  Skeleton,
  Switch,
  Avatar,
  Cell,
  ConfigProvider,
} from '@/packages/nutui.react.taro'
import '@/packages/skeleton/demo.scss'
import Header from '@/sites/components/header'

interface T {
  '3b02fdee': string
  '84aa6bce': string
  ea3bc18a: string
  '02a53df5': string
  '0a001122': string
  a4ed11b5: string
  '07d62d5c': string
  '652c6725': string
}
const SkeletonDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '3b02fdee': '触发了change事件，开关状态：',
      '84aa6bce': '基础用法',
      ea3bc18a: '传入多行',
      '02a53df5': '显示头像',
      '0a001122': '标题段落圆角风格',
      a4ed11b5: '图片组合',
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
      a4ed11b5: '图片组合',
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
      a4ed11b5: 'picture combination',
      '07d62d5c': 'show subcomponents',
      '652c6725':
        'A set of JD-style lightweight mobile React component library, providing rich basic components and business components to help developers quickly build mobile applications.',
    },
  })

  const [checked, setChecked] = useState(false)
  const changeStatus = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    console.log(`${translated['3b02fdee']}${value}`)
    setChecked(value)
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated['84aa6bce']}</h2>
        <Cell className="ske-cell-single">
          <Skeleton animated />
          <Skeleton />
        </Cell>

        <h2>{translated.ea3bc18a}</h2>
        <Cell className="ske-cell-double">
          <Skeleton rows={3} title animated />
        </Cell>

        <h2>{translated['02a53df5']}</h2>
        <Cell>
          <Skeleton rows={3} title animated avatar avatarSize="100px" />
        </Cell>

        <h2>{translated['0a001122']}</h2>
        <Cell className="ske-cell-single">
          <ConfigProvider
            theme={{
              nutuiSkeletonLineBorderRadius: '10px',
            }}
          >
            <Skeleton rows={3} animated />
          </ConfigProvider>
        </Cell>

        <h2>{translated.a4ed11b5}</h2>
        <Cell className="ske-cell-double">
          <div className="pic-compose">
            <Skeleton title animated rows={3} className="item" />
            <Skeleton title animated rows={3} className="item" />
          </div>
        </Cell>

        <h2>{translated['07d62d5c']}</h2>
        <Cell>
          <div className="content" style={{ width: '100%' }}>
            <Switch onChange={(value, event) => changeStatus(value, event)} />
            <Skeleton title animated avatar rows={3} visible={checked}>
              <div className="container">
                <Avatar
                  size="50"
                  icon={
                    <img
                      src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
                      alt=""
                    />
                  }
                />
                <div className="right-content">
                  <span className="title">NutUI-React</span>
                  <div className="description">{translated['652c6725']}</div>
                </div>
              </div>
            </Skeleton>
          </div>
        </Cell>
      </div>
    </>
  )
}

export default SkeletonDemo
