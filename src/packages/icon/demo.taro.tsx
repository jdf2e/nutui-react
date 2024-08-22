import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import '@nutui/icons-react-taro/dist/style_iconfont.css'
import { Cell, Toast } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
// import '@/packages/icon/demo.scss'

const IconDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '84aa6bce': '基础用法',
      svg: 'SVG 按需使用',
      dab8a74f: '图片链接',
      '52c15454': '图标颜色',
      '7aeb5407': '图标大小',
      f2e6c6d6: '基础图标',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      svg: 'SVG 按需使用',
      dab8a74f: '圖片連結',
      '52c15454': '圖示顏色',
      '7aeb5407': '圖示大小',
      f2e6c6d6: '基礎圖示',
    },
    'en-US': {
      '84aa6bce': 'Basic Usage',
      svg: 'SVG import On Demand',
      dab8a74f: 'Image Link',
      '52c15454': 'IconFont Color',
      '7aeb5407': 'IconFont Size',
      f2e6c6d6: 'Base IconFont',
    },
  })

  const [state, setState] = useState({
    msg: '',
    type: 'text',
    cover: false,
    visible: false,
    duration: 2,
    closeOnOverlayClick: false,
    title: '',
    bottom: '',
    icon: '',
    center: true,
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Toast
          content={state.msg}
          visible={state.visible}
          type={state.type}
          duration={state.duration}
          icon={state.icon}
          closeOnOverlayClick={state.closeOnOverlayClick}
          onClose={() => {
            setState({
              ...state,
              visible: false,
            })
          }}
        />
        <h2>{translated.svg}</h2>
        <Cell>
          <Demo1 />
        </Cell>
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.dab8a74f}</h2>
        <Cell>
          <Demo3 />
        </Cell>
        <h2>{translated['52c15454']}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated['7aeb5407']}</h2>
        <Cell style={{ alignItems: 'center' }}>
          <Demo5 />
        </Cell>
        <Demo6 />
        <Demo7 />
      </div>
    </>
  )
}

export default IconDemo
