import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '@/packages/cell'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'

const DividerDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      withText: '展示文本',
      contentPosition: '内容位置',
      dashed: '虚线',
      customStyle: '自定义样式',
      verticalDivider: '垂直分割线',
    },
    'en-US': {
      basic: 'Basic Usage',
      withText: 'With Text',
      contentPosition: 'Content Position',
      dashed: 'Dashed',
      customStyle: 'Custom Style',
      verticalDivider: 'Vertical Divider',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Demo1 />
        </Cell>
        <h2>{translated.withText}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.contentPosition}</h2>
        <Demo3 />
        <h2>{translated.dashed}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated.customStyle}</h2>
        <Cell>
          <Demo5 />
        </Cell>
        <h2>{translated.verticalDivider}</h2>
        <Cell>
          <Demo6 />
        </Cell>
      </div>
    </>
  )
}

export default DividerDemo
