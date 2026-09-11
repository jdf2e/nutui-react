import React from 'react'
import Cell from '@/packages/cell'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'
import Demo9 from './demos/h5/demo9'
import Demo10 from './demos/h5/demo10'

const PaginationDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      simple: '简单模式',
      lite: '极简模式',
      ellipse: '显示省略号',
      custom: '自定义按钮',
      uncontrolled: '非受控方式',
      capsule: '胶囊数字型分页符',
      text: '纯文本型分页符',
      progress: '进度条指示型分页符',
      combined: '胶囊数字型 & 进度条指示型分页符',
    },
    'zh-TW': {
      basic: '基礎用法',
      simple: '簡單模式',
      lite: '极简模式',
      ellipse: '顯示省略號',
      custom: '自定義按鈕',
      uncontrolled: '非受控方式',
      capsule: '膠囊數字型分頁符',
      text: '純文本型分頁符',
      progress: '進度條指示型分頁符',
      combined: '膠囊數字型 & 進度條指示型分頁符',
    },
    'en-US': {
      basic: 'Basic usage',
      simple: 'Simple mode',
      lite: 'lite Mode',
      ellipse: 'Show ellipsis',
      custom: 'Custom button',
      uncontrolled: 'Uncontrolled mode',
      capsule: 'Capsule number indicator',
      text: 'Plain text indicator',
      progress: 'Progress bar indicator',
      combined: 'Capsule & progress indicator',
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
      <h2>{translated.capsule}</h2>
      <Demo7 />
      <h2>{translated.text}</h2>
      <Demo8 />
      <h2>{translated.progress}</h2>
      <Demo9 />
      <h2>{translated.combined}</h2>
      <Demo10 />
    </div>
  )
}

export default PaginationDemo
