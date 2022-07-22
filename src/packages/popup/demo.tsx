import React, { useState } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '@/packages/cell'
import Popup from '@/packages/popup'
import './demo.scss'

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
  '7db1a8b2': string
  a52bef0c: string
  d04fcbda: string
  '0aaad620': string
}

const PopupDemo = () => {
  const [translated] = useTranslate<T>({
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
      a52bef0c: '图标位置',
      d04fcbda: '自定义图标',
      '0aaad620': '圆角弹框',
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
      a52bef0c: '圖標位置',
      d04fcbda: '自定義圖標',
      '0aaad620': '圓角彈框',
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
      a52bef0c: 'Icon position',
      d04fcbda: 'custom icon',
      '0aaad620': 'Rounded popup',
    },
  })

  const [showBasic, setShowBasic] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [showIconPosition, setShowIconPosition] = useState(false)
  const [showIconDefine, setShowIconDefine] = useState(false)
  const [showBottomRound, setShowBottomRound] = useState(false)

  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <Cell
          title={translated.c38a08ef}
          isLink
          onClick={() => {
            setShowBasic(true)
          }}
        />
        <Popup
          visible={showBasic}
          style={{ padding: '30px 50px' }}
          onClose={() => {
            setShowBasic(false)
          }}
        >
          {translated.b840c88f}
        </Popup>

        <h2>{translated.a74a1fd4}</h2>
        <Cell
          title={translated['8dab2f66']}
          isLink
          onClick={() => {
            setShowTop(true)
          }}
        />
        <Popup
          visible={showTop}
          style={{ height: '20%' }}
          position="top"
          onClose={() => {
            setShowTop(false)
          }}
        />
        <Cell
          title={translated.cfbdc781}
          isLink
          onClick={() => {
            setShowBottom(true)
          }}
        />
        <Popup
          visible={showBottom}
          style={{ height: '20%' }}
          position="bottom"
          onClose={() => {
            setShowBottom(false)
          }}
        />
        <Cell
          title={translated.c3a3a1d2}
          isLink
          onClick={() => {
            setShowLeft(true)
          }}
        />
        <Popup
          visible={showLeft}
          style={{ width: '20%', height: '100%' }}
          position="left"
          onClose={() => {
            setShowLeft(false)
          }}
        />
        <Cell
          title={translated.e51e4582}
          isLink
          onClick={() => {
            setShowRight(true)
          }}
        />
        <Popup
          visible={showRight}
          style={{ width: '20%', height: '100%' }}
          position="right"
          onClose={() => {
            setShowRight(false)
          }}
        />

        <h2>{translated['7db1a8b2']}</h2>
        <Cell
          title={translated['7db1a8b2']}
          isLink
          onClick={() => {
            setShowIcon(true)
          }}
        />
        <Popup
          closeable
          visible={showIcon}
          style={{ height: '20%' }}
          position="bottom"
          onClose={() => {
            setShowIcon(false)
          }}
        />
        <Cell
          title={translated.a52bef0c}
          isLink
          onClick={() => {
            setShowIconPosition(true)
          }}
        />
        <Popup
          closeable
          visible={showIconPosition}
          style={{ height: '20%' }}
          closeIconPosition="top-left"
          position="bottom"
          onClose={() => {
            setShowIconPosition(false)
          }}
        />
        <Cell
          title={translated.d04fcbda}
          isLink
          onClick={() => {
            setShowIconDefine(true)
          }}
        />
        <Popup
          closeable
          visible={showIconDefine}
          style={{ height: '20%' }}
          closeIcon="heart"
          position="bottom"
          onClose={() => {
            setShowIconDefine(false)
          }}
        />

        <h2>{translated['0aaad620']}</h2>
        <Cell
          title={translated['0aaad620']}
          isLink
          onClick={() => {
            setShowBottomRound(true)
          }}
        />
        <Popup
          closeable
          visible={showBottomRound}
          style={{ height: '20%' }}
          position="bottom"
          round
          onClose={() => {
            setShowBottomRound(false)
          }}
        />
      </div>
    </>
  )
}

export default PopupDemo
