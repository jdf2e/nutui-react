import React from 'react'
import { useTranslate } from '../../sites/assets/locale'

import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'

const PopupDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      ce5c5446: '基础类型',
      c38a08ef: '展示弹出层',
      b840c88f: '正文',
      a74a1fd4: '弹出位置',
      '8dab2f66': '顶部弹出',
      cfbdc781: '底部弹出',
      c3a3a1d2: '左侧弹出',
      e51e4582: '右侧弹出',
      '7db1a8b2': '关闭图标',
      '7db1a8b3': '阻塞关闭',
      '7db1a8b4': '阻塞点击 Overlay 关闭',
      '7db1a8b5': '阻塞点击 close icon 关闭',
      a52bef0c: '图标位置',
      d04fcbda: '自定义图标',
      '0aaad620': '圆角弹框',
      ea3d02f2: '指定节点挂载',
      c9e6df49: '多层堆叠',
    },
    'zh-TW': {
      ce5c5446: '基礎類型',
      c38a08ef: '展示彈出層',
      b840c88f: '正文',
      a74a1fd4: '彈出位置',
      '8dab2f66': '頂部彈出',
      cfbdc781: '底部彈出',
      c3a3a1d2: '左側彈出',
      e51e4582: '右側彈出',
      '7db1a8b2': '關閉圖標',
      '7db1a8b3': '阻塞關閉',
      '7db1a8b4': '阻塞点击 Overlay 关闭',
      '7db1a8b5': '阻塞点击 close icon 关闭',
      a52bef0c: '圖標位置',
      d04fcbda: '自定義圖標',
      '0aaad620': '圓角彈框',
      ea3d02f2: '指定節點掛載',
      c9e6df49: '多層堆疊',
    },
    'en-US': {
      ce5c5446: 'base type',
      c38a08ef: 'Show popup',
      b840c88f: 'text',
      a74a1fd4: 'popup location',
      '8dab2f66': 'top pop',
      cfbdc781: 'bottom pop',
      c3a3a1d2: 'pop up left',
      e51e4582: 'pop up right',
      '7db1a8b2': 'close icon',
      '7db1a8b3': 'stop close',
      '7db1a8b4': 'when click Overlay,stop close',
      '7db1a8b5': 'when click close icon, stop close',
      a52bef0c: 'Icon position',
      d04fcbda: 'custom icon',
      '0aaad620': 'Rounded popup',
      ea3d02f2: 'Mount the specified node',
      c9e6df49: 'multi-layer stacking',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <Demo1 />

        <h2>{translated.a74a1fd4}</h2>
        <Demo2 />

        <h2>{translated['7db1a8b2']}</h2>
        <Demo3 />

        <h2>{translated[`7db1a8b3`]}</h2>
        <Demo4 />

        <h2>{translated['0aaad620']}</h2>
        <Demo5 />

        <h2>{translated.ea3d02f2}</h2>
        <Demo6 />

        <h2>{translated.c9e6df49}</h2>
        <Demo7 />
      </div>
    </>
  )
}

export default PopupDemo
