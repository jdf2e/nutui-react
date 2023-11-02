import React, { useState } from 'react'
import { CircleClose, Heart } from '@nutui/icons-react'
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
  '7db1a8b3': string
  '7db1a8b4': string
  '7db1a8b5': string
  a52bef0c: string
  d04fcbda: string
  '0aaad620': string
  ea3d02f2: string
  c9e6df49: string
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

  const [showBasic, setShowBasic] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [showIconPosition, setShowIconPosition] = useState(false)
  const [showIconDefine, setShowIconDefine] = useState(false)
  const [showBottomRound, setShowBottomRound] = useState(false)
  const [showMountNode, setShowMountNode] = useState(false)
  const [showMutiple, setShowMutiple] = useState(false)
  const [showMutipleInner, setShowMutipleInner] = useState(false)
  const [showOverlayStop, setShowOverlayStop] = useState(false)
  const [showCloseIconStop, setShowCloseIconStop] = useState(false)

  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <Cell
          title={translated.c38a08ef}
          onClick={() => {
            setShowBasic(true)
          }}
        />
        <Popup
          visible={showBasic}
          zIndex={2000}
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
          onClick={() => {
            setShowTop(true)
          }}
        />
        <Popup
          visible={showTop}
          destroyOnClose
          style={{ height: '20%' }}
          position="top"
          round
          onClose={() => {
            setShowTop(false)
          }}
        />
        <Cell
          title={translated.cfbdc781}
          onClick={() => {
            setShowBottom(true)
          }}
        />
        <Popup
          visible={showBottom}
          style={{ height: '40%' }}
          position="bottom"
          onClose={() => {
            setShowBottom(false)
          }}
        />
        <Cell
          title={translated.c3a3a1d2}
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
          onClick={() => {
            setShowIcon(true)
          }}
        />
        <Popup
          closeable
          closeIcon={<CircleClose width="12px" height="12px" />}
          visible={showIcon}
          left="返回"
          title="我是标题"
          style={{ height: '20%' }}
          position="bottom"
          onClose={() => {
            setShowIcon(false)
          }}
        />
        <Cell
          title={translated.a52bef0c}
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
          onClick={() => {
            setShowIconDefine(true)
          }}
        />
        <Popup
          closeable
          closeIcon={<Heart width="15px" height="15px" />}
          visible={showIconDefine}
          style={{ height: '20%' }}
          position="bottom"
          onClose={() => {
            setShowIconDefine(false)
          }}
        />

        <h2>{translated[`7db1a8b3`]}</h2>
        <Cell
          title={translated[`7db1a8b4`]}
          onClick={() => {
            setShowOverlayStop(true)
          }}
        />
        <Popup
          visible={showOverlayStop}
          style={{ padding: '30px 50px' }}
          onClose={() => {
            setShowOverlayStop(false)
          }}
          onOverlayClick={() => {
            console.log('onOverlayClick')
            return false
          }}
        >
          {translated.b840c88f}
        </Popup>
        <Cell
          title={translated[`7db1a8b5`]}
          onClick={() => {
            setShowCloseIconStop(true)
          }}
        />
        <Popup
          closeable
          closeIcon={<CircleClose width="12px" height="12px" />}
          visible={showCloseIconStop}
          closeOnOverlayClick={false}
          style={{ height: '20%' }}
          position="bottom"
          onClose={() => {
            setShowIcon(false)
          }}
          onCloseIconClick={() => {
            console.log('onCloseIconClick')
          }}
        />

        <h2>{translated['0aaad620']}</h2>
        <Cell
          title={translated['0aaad620']}
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

        <h2>{translated.ea3d02f2}</h2>
        <Cell
          title={translated.ea3d02f2}
          onClick={() => {
            setShowMountNode(true)
          }}
        />
        <Popup
          visible={showMountNode}
          style={{ padding: '30px 50px' }}
          portal={document.body}
          onClose={() => {
            setShowMountNode(false)
          }}
        >
          body
        </Popup>

        <h2>{translated.c9e6df49}</h2>
        <Cell
          title={translated.c9e6df49}
          onClick={() => {
            setShowMutiple(true)
          }}
        />
        <Popup
          visible={showMutiple}
          style={{ padding: '30px 50px' }}
          onClose={() => {
            setShowMutiple(false)
          }}
        >
          <span
            onClick={() => {
              setShowMutipleInner(true)
            }}
          >
            Click It
          </span>
        </Popup>
        <Popup
          visible={showMutipleInner}
          style={{ padding: '30px 50px' }}
          overlayStyle={{ backgroundColor: 'transparent' }}
          onClose={() => {
            setShowMutipleInner(false)
          }}
        >
          <span
            onClick={() => {
              setShowMutipleInner(false)
            }}
          >
            close
          </span>
        </Popup>
      </div>
    </>
  )
}

export default PopupDemo
