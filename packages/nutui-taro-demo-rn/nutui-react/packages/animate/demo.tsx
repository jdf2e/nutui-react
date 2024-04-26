import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'

const AnimateDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      click: '点击触发',
      loop: '循环动画',
    },
    'zh-TW': {
      click: '點擊觸發',
      loop: '迴圈動畫',
    },
    'en-US': {
      click: 'Clicking to trigger',
      loop: 'Loop animation',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.click}</h2>
        <Demo1 />

        <h2>{translated.loop}</h2>
        <Demo2 />
      </div>
    </>
  )
}

export default AnimateDemo
