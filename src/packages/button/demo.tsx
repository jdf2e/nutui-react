import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '../cell'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'
import Demo9 from './demos/h5/demo9'

const ButtonDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      ce5c5446: '按钮类型',
      ce5c5447: '按钮形状',
      c38a08ef: '主要按钮',
      e51e4582: '填充模式',
      '7db1a8b2': '禁用状态',
      a52bef0c: '加载状态',
      '0aaad622': '图标按钮',
      '0aaad620': '按钮尺寸',
      c9e6df49: '块级元素',
      '781b07fd': '自定义颜色',
    },
    'zh-TW': {
      ce5c5446: '按鈕類型',
      ce5c5447: '按鈕形狀',
      c38a08ef: '主要按鈕',
      e51e4582: '填充模式',
      '7db1a8b2': '禁用狀態',
      a52bef0c: '載入狀態',
      '0aaad622': '图标按钮',
      '0aaad620': '按鈕尺寸',
      c9e6df49: '塊級元素',
      '781b07fd': '自定義顏色',
    },
    'en-US': {
      ce5c5446: 'Button Type',
      ce5c5447: 'Button Shape',
      c38a08ef: 'Main button',
      e51e4582: 'Fill',
      '7db1a8b2': 'Disabled State',
      a52bef0c: 'Load State',
      '0aaad622': 'Icon Button',
      '0aaad620': 'Button size',
      c9e6df49: 'Block-level elements',
      '781b07fd': 'Custom Colors',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo1 />
        </Cell>
        <h2>{translated.e51e4582}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo2 />
        </Cell>
        <h2>{translated['0aaad622']}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo3 />
        </Cell>
        <h2>{translated['7db1a8b2']}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo4 />
        </Cell>
        <h2>{translated.ce5c5447}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo5 />
        </Cell>
        <h2>{translated.a52bef0c}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo6 />
        </Cell>
        <h2>{translated['0aaad620']}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo7 />
        </Cell>
        <h2>{translated.c9e6df49}</h2>
        <Cell>
          <Demo8 />
        </Cell>
        <h2>{translated['781b07fd']}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Demo9 />
        </Cell>
      </div>
    </>
  )
}

export default ButtonDemo
