import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import './demo.scss?module'

import Demo1 from './demos/h5/demo1'

const BarrageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '84aa6bce': '基础用法',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
    },
    'en-US': {
      '84aa6bce': 'Basic usage',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Demo1 />
      </div>
    </>
  )
}

export default BarrageDemo
