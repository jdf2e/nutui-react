import React from 'react'
import { useTranslate } from '../../sites/assets/locale'

import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'

interface T {
  header: string
  end: string
  middle: string
  rows: string
  expandCollapse: string
}
const EllipsisDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      header: '头部省略',
      end: '尾部省略',
      middle: '中间省略',
      rows: '多行省略',
      expandCollapse: '展开收起',
    },
    'en-US': {
      header: 'Leading',
      end: 'Tailing',
      middle: 'Middle',
      rows: 'Multi-line',
      expandCollapse: 'Expand & Collapse',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.header}</h2>
        <Demo1 />
        <h2>{translated.end}</h2>
        <Demo2 />
        <h2>{translated.middle}</h2>
        <Demo3 />
        <h2>{translated.rows}</h2>
        <Demo4 />
        <h2>{translated.expandCollapse}</h2>
        <Demo5 />
      </div>
    </>
  )
}

export default EllipsisDemo
