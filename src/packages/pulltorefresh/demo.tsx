import React from 'react'
import { useTranslate } from '@/sites/assets/locale'

import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'

const PullToRefreshDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      primary: '反白模式',
    },
    'zh-TW': {
      basic: '基礎用法',
      primary: '反白模式',
    },
    'en-US': {
      basic: 'Basic Usage',
      primary: 'reverse',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />

        <h2>{translated.primary}</h2>
        <Demo2 />
      </div>
    </>
  )
}

export default PullToRefreshDemo
