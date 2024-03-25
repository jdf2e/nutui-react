import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { Cell } from '@/packages/cell/cell'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'

const ProgressDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      customStyle: '设置颜色与宽度',
      noShowPercentage: '显示百分比',
      customContent: '自定义显示内容',
      customSize: '自定义尺寸',
      statusDisplay: '状态显示',
      dynamicChange: '动态改变',
      lazy: '延迟加载数据',
    },
    'zh-TW': {
      basic: '基礎用法',
      customStyle: '設置顏色與寛度',
      noShowPercentage: '顯示百分比',
      customContent: '自定義顯示內容',
      customSize: '自定義尺寸',
      statusDisplay: '狀態顯示',
      dynamicChange: '動態改變',
      lazy: '延迟加载数据',
    },
    'en-US': {
      basic: 'Basic Usage',
      customStyle: 'Custom Style',
      noShowPercentage: 'Show Percentage',
      customContent: 'Custom Content',
      customSize: 'Custom Size',
      statusDisplay: 'Status Display',
      dynamicChange: 'Dynamic Change',
      lazy: 'Delay Time',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Demo1 />
        </Cell>
        <h2>{translated.customStyle}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.noShowPercentage}</h2>
        <Cell>
          <Demo3 />
        </Cell>
        <h2>{translated.customContent}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated.customSize}</h2>
        <Demo5 />
        <h2>{translated.statusDisplay}</h2>
        <Demo6 />
        <h2>{translated.dynamicChange}</h2>
        <Demo7 />
        <h2>{translated.lazy}</h2>
        <Cell align="center">
          <Demo8 />
        </Cell>
      </div>
    </>
  )
}

export default ProgressDemo
