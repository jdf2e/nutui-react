import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'

const EmptyDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      ce5c5446: '全屏 full',
      c38a08ee: '半屏 half',
      c38a08ed: '局部 partial',
      c38a08ef: '自定义图片大小',
      b840c88f: '图片类型，内置8个',
      a74a1fd4: '自定义图片',
      '8dab2f66': '自定义底部按钮',
    },
    'zh-TW': {
      ce5c5446: '全屏 full',
      c38a08ee: '半屏 half',
      c38a08ed: '局部 partial',
      c38a08ef: '自定義圖片大小',
      b840c88f: '圖片類型，內置8個',
      a74a1fd4: '自定義圖片',
      '8dab2f66': '自定義底部按鈕',
    },
    'en-US': {
      ce5c5446: 'Full',
      c38a08ee: 'Half',
      c38a08ed: 'Partial',
      c38a08ef: 'Custom image size',
      b840c88f: 'Picture type, built-in 8',
      a74a1fd4: 'Custom image',
      '8dab2f66': 'Custom bottom buttons',
    },
  })

  return (
    <div className="demo">
      <h2>{translated.ce5c5446}</h2>
      <Demo1 />
      <h2>{translated.c38a08ee}</h2>
      <Demo2 />
      <h2>{translated.c38a08ed}</h2>
      <Demo3 />
      <h2>{translated.b840c88f}</h2>
      <Demo4 />
      <h2>{translated.c38a08ef}</h2>
      <Demo7 />
      <h2>{translated.a74a1fd4}</h2>
      <Demo5 />
      <h2>{translated['8dab2f66']}</h2>
      <Demo6 />
    </div>
  )
}

export default EmptyDemo
