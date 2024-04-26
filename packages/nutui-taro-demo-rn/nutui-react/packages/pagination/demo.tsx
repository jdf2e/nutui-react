import React from 'react'
import Cell from '@/packages/cell'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'

const PaginationDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      simple: '简单模式',
      lite: '极简模式',
      ellipse: '显示省略号',
      custom: '自定义按钮',
      uncontrolled: '非受控方式',
    },
    'zh-TW': {
      basic: '基礎用法',
      simple: '簡單模式',
      lite: '极简模式',
      ellipse: '顯示省略號',
      custom: '自定義按鈕',
      uncontrolled: '非受控方式',
    },
    'en-US': {
      basic: 'Basic usage',
      simple: 'Simple mode',
      lite: 'lite Mode',
      ellipse: 'Show ellipsis',
      custom: 'Custom button',
      uncontrolled: 'Uncontrolled mode',
    },
  })

  return (
    <div className="demo">
      <h2>{translated.basic}</h2>
      <Cell>
        <Demo1 />
      </Cell>
      <h2>{translated.simple}</h2>
      <Cell>
        <Demo2 />
      </Cell>
      <h2>{translated.lite}</h2>
      <Cell>
        <Demo3 />
      </Cell>
      <h2>{translated.ellipse}</h2>
      <Cell>
        <Demo4 />
      </Cell>
      <h2>{translated.custom}</h2>
      <Cell>
        <Demo5 />
      </Cell>
      <h2>{translated.uncontrolled}</h2>
      <Cell>
        <Demo6 />
      </Cell>
    </div>
  )
}

export default PaginationDemo
