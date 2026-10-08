import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'

const MaterialViewDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      scenes: '各材质场景一览',
      bottomBar: '底部导航背板（bottom-bar）',
      immersive: '沉浸式与悬浮购买栏',
    },
    'zh-TW': {
      scenes: '各材質場景一覽',
      bottomBar: '底部導航背板（bottom-bar）',
      immersive: '沉浸式與懸浮購買欄',
    },
    'en-US': {
      scenes: 'Material Scenes',
      bottomBar: 'Bottom Navigation Bar (bottom-bar)',
      immersive: 'Immersive and Floating Bar',
    },
  })

  return (
    <div className="demo">
      <h2>{translated.scenes}</h2>
      <Demo1 />
      <h2>{translated.bottomBar}</h2>
      <Demo2 />
      <h2>{translated.immersive}</h2>
      <Demo3 />
    </div>
  )
}

export default MaterialViewDemo
