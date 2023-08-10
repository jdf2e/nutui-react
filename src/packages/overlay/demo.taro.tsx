import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Button, Cell, Overlay } from '@/packages/nutui.react.taro'
import '@/packages/overlay/demo.scss'
import Header from '@/sites/components/header'

interface T {
  '84aa6bce': string
  '2a9e4928': string
  duration: string
  lockscroll: string
  abbf9359: string
  ec0d7acf: string
  ce1e18a2: string
  closeClickLay: string
}
const OverlayDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础用法',
      '2a9e4928': '显示遮罩层',
      duration: '设置动画时间',
      lockscroll: '不锁定背景滚动',
      abbf9359: '遮罩样式',
      ec0d7acf: '嵌套内容',
      ce1e18a2: '这里是正文',
      closeClickLay: '点击遮罩不关闭',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      '2a9e4928': '顯示遮罩層',
      duration: '設置動畫時間',
      lockscroll: '不鎖定背景滾動',
      abbf9359: '遮罩樣式',
      ec0d7acf: '嵌套內容',
      ce1e18a2: '這裡是正文',
      closeClickLay: '點擊遮罩不關閉',
    },
    'en-US': {
      '84aa6bce': 'Basic usage',
      '2a9e4928': 'Show mask layer',
      duration: 'Set animation time',
      lockscroll: 'Donot Lock background scrolling',
      abbf9359: 'Mask style',
      ec0d7acf: 'nested content',
      ce1e18a2: 'here is the text',
      closeClickLay: 'Click the mask not to close',
    },
  })

  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)

  const handleToggleShow = () => {
    setVisible(true)
  }
  const handleToggleShow2 = () => {
    setVisible2(true)
  }
  const handleToggleShow3 = () => {
    console.log('visible3', visible3)
    setVisible3(true)
  }
  const handleToggleShow4 = () => {
    setVisible4(true)
  }
  const handleToggleShow5 = () => {
    setVisible5(true)
  }
  const handleToggleShow6 = () => {
    setVisible6(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  const onClose2 = () => {
    setVisible2(false)
  }
  const onClose3 = () => {
    setVisible3(false)
  }
  const onClose4 = () => {
    setVisible4(false)
  }
  const onClose5 = () => {
    setVisible5(false)
  }
  const onClose6 = () => {
    setVisible6(false)
  }
  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} demo-overlay`}
      >
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <Button type="primary" onClick={handleToggleShow}>
            {translated['2a9e4928']}
          </Button>
          <Overlay
            visible={visible}
            onClick={onClose}
            style={{ '--nutui-overlay-zIndex': 2020 }}
            afterShow={() => {
              console.log('afterShow')
            }}
          />
        </Cell>

        <h2>{translated.abbf9359}</h2>
        <Cell>
          <Button type="primary" onClick={handleToggleShow2}>
            {translated.abbf9359}
          </Button>
          <Overlay
            visible={visible2}
            onClick={onClose2}
            style={{
              backgroundColor: 'rgba(0, 0, 0, .2)',
              '--nutui-overlay-zIndex': 2000,
            }}
          />
        </Cell>

        <h2>{translated.duration}</h2>
        <Cell>
          <Button type="primary" onClick={handleToggleShow3}>
            {translated.duration}
          </Button>
          <Overlay
            visible={visible3}
            onClick={onClose3}
            style={{ '--nutui-overlay-animation-duration': '2.5s' }}
            duration={2500}
            afterShow={() => {
              console.log('afterShow')
            }}
            afterClose={() => {
              console.log('afterClose')
            }}
          />
        </Cell>

        <h2>{translated.lockscroll}</h2>
        <Cell>
          <Button type="primary" onClick={handleToggleShow4}>
            {translated.lockscroll}
          </Button>
          <Overlay visible={visible4} lockScroll={false} onClick={onClose4} />
        </Cell>

        <h2>{translated.ec0d7acf}</h2>
        <Cell>
          <Button type="success" onClick={handleToggleShow5}>
            {translated.ec0d7acf}
          </Button>
          <Overlay visible={visible5} onClick={onClose5}>
            <div className="wrapper">
              <div className="content">{translated.ce1e18a2}</div>
            </div>
          </Overlay>
        </Cell>

        <h2>{translated.closeClickLay}</h2>
        <Cell>
          <Button type="primary" onClick={handleToggleShow6}>
            {translated.closeClickLay}
          </Button>
          <Overlay visible={visible6} closeOnOverlayClick={false}>
            <div className="wrapper">
              <div className="content" onClick={onClose6}>
                {translated.ce1e18a2}
              </div>
            </div>
          </Overlay>
        </Cell>
      </div>
    </>
  )
}

export default OverlayDemo
