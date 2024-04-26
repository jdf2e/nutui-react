import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

interface T {
  header: string
  end: string
  middle: string
  rows: string
  expandCollapse: string
  width: string
}
const EllipsisDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      header: '头部省略',
      end: '尾部省略',
      middle: '中间省略',
      rows: '多行省略',
      expandCollapse: '展开收起',
      width: '宽度',
    },
    'en-US': {
      header: 'Leading',
      end: 'Tailing',
      middle: 'Middle',
      rows: 'Multi-line',
      expandCollapse: 'Expand & Collapse',
      width: 'width',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
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
        <h2>{translated.width}</h2>
        <Demo6 />
      </div>
    </>
  )
}

export default EllipsisDemo
