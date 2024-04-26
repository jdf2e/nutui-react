import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Cell from '../cell'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'

const AudioDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      progress: '进度条模式',
      none: '自定义模式',
      control: '控件模式',
    },
    'en-US': {
      basic: 'Basic',
      progress: 'Progress Mode',
      none: 'Custom Mode',
      control: 'Control Mode',
    },
  })

  return (
    <div className="demo">
      <h2>{translated.basic}</h2>
      <Cell>
        <Demo1 />
      </Cell>
      <h2>{translated.progress}</h2>
      <Cell>
        <Demo2 />
      </Cell>
      <h2>{translated.none}</h2>
      <Cell>
        <Demo3 />
      </Cell>
      <h2>{translated.control}</h2>
      <Cell>
        <Demo4 />
      </Cell>
    </div>
  )
}
export default AudioDemo
