import React, { useState } from 'react'
import { Overlay } from './overlay'
import Cell from '@/packages/cell'
import Button from '@/packages/button'
import './demo.scss'

const OverlayDemo = () => {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)

  const handleToggleShow = () => {
    setVisible(true)
  }
  const handleToggleShow2 = () => {
    setVisible2(true)
  }
  const handleToggleShow3 = () => {
    setVisible3(true)
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
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Button type="primary" onClick={handleToggleShow}>
            显示遮罩层
          </Button>
          <Overlay visible={visible} onClick={onClose} />
        </Cell>
        <h2>遮罩样式</h2>
        <Cell>
          <Button type="primary" onClick={handleToggleShow2}>
            显示遮罩层
          </Button>
          <Overlay
            visible={visible2}
            onClick={onClose2}
            overlayStyle={{
              backgroundColor: '#38333333',
            }}
          />
        </Cell>
        <h2>嵌套内容</h2>
        <Cell>
          <Button type="success" onClick={handleToggleShow3}>
            嵌套内容
          </Button>
          <Overlay visible={visible3} onClick={onClose3}>
            <div className="wrapper">
              <div className="content">这里是正文</div>
            </div>
          </Overlay>
        </Cell>
      </div>
    </>
  )
}

export default OverlayDemo
