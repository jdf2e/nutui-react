import React from 'react'
import Cell from '@/packages/cell'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'

const SpaceDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基本用法',
      wrap: '换行',
      direction: '垂直',
      spaceGap: '间距大小',
      mainAxisAlign: '主轴对齐方式',
      crossAxisAlign: '交叉轴对齐方式',
    },
    'zh-TW': {
      basic: '基本用法',
      wrap: '換行',
      direction: '垂直',
      spaceGap: '間距大小',
      mainAxisAlign: '主軸對齊方式',
      crossAxisAlign: '交叉軸對齊方式',
    },
    'en-US': {
      basic: 'Basic Usage',
      wrap: 'wrap',
      direction: 'Direction',
      spaceGap: 'SpaceGap',
      mainAxisAlign: 'MainAxis Alignment',
      crossAxisAlign: 'CrossAxis Alignment',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Demo1 />
        </Cell>
        <h2>{translated.wrap}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.direction}</h2>
        <Cell>
          <Demo3 />
        </Cell>
        <h2>{translated.spaceGap}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated.mainAxisAlign}</h2>
        <Cell style={{ display: 'block' }}>
          <Demo5 />
        </Cell>
        <h2>{translated.crossAxisAlign}</h2>
        <Cell>
          <Demo6 />
        </Cell>
      </div>
    </>
  )
}

export default SpaceDemo
