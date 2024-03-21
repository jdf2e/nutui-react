import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  return (
    <>
      <Cell
        title="顶部弹出"
        onClick={() => {
          setShowTop(true)
        }}
      />
      <Cell
        title="底部弹出"
        onClick={() => {
          setShowBottom(true)
        }}
      />
      <Cell
        title="左侧弹出"
        onClick={() => {
          setShowLeft(true)
        }}
      />
      <Cell
        title="右侧弹出"
        onClick={() => {
          setShowRight(true)
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
      <Popup
        visible={showBottom}
        style={{ height: '20%' }}
        position="bottom"
        onClose={() => {
          setShowBottom(false)
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
      <Popup
        visible={showRight}
        style={{ width: '20%', height: '100%' }}
        position="right"
        onClose={() => {
          setShowRight(false)
        }}
      />
    </>
  )
}
export default Demo2
