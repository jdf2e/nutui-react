import React from 'react'
import { useTranslate } from '../../sites/assets/locale'

import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'

interface T {
  '84aa6bce': string
  eb4236fe: string
  '9ed40460': string
  '1254a90n': string
  '1254a90d': string
}

const InfiniteloadingDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定义加载文案',
      '1254a90n': '基于window滚动',
      '1254a90d': 'primary主题',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定義加載文案',
      '1254a90n': '基於window滾動',
      '1254a90d': 'primary主題',
    },
    'en-US': {
      '84aa6bce': 'Basic usage',
      eb4236fe: 'Pull down to refresh',
      '9ed40460': 'Custom loading text',
      '1254a90n': 'Window scroll',
      '1254a90d': 'Primary theme',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Demo1 />
        <h2>{translated.eb4236fe}</h2>
        <Demo2 />
        <h2>{translated['9ed40460']}</h2>
        <Demo3 />
        <h2>{translated['1254a90d']}</h2>
        <Demo4 />
        <h2>{translated['1254a90n']}</h2>
        <Demo5 />
      </div>
    </>
  )
}

export default InfiniteloadingDemo
