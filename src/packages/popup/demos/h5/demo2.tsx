import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react'

const Demo2 = () => {
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [showText, setShowText] = useState(false)

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
      <Cell
        title="居中弹出"
        onClick={() => {
          setShowText(true)
        }}
      />
      <Popup
        visible={showTop}
        destroyOnClose
        position="top"
        onClose={() => {
          setShowTop(false)
        }}
      />
      <Popup
        visible={showBottom}
        position="bottom"
        onClose={() => {
          setShowBottom(false)
        }}
      />
      <Popup
        visible={showLeft}
        position="left"
        onClose={() => {
          setShowLeft(false)
        }}
      />
      <Popup
        visible={showRight}
        position="right"
        onClose={() => {
          setShowRight(false)
        }}
      />
      <Popup
        visible={showText}
        style={{ padding: '30px 50px' }}
        onClose={() => {
          setShowText(false)
        }}
      >
        <div style={{ height: '100px', overflowY: 'auto' }}>
          {Array.from({ length: 10 })
            .fill('')
            .map((_, i) => (
              <Cell key={i}>正文</Cell>
            ))}
        </div>
      </Popup>
    </>
  )
}
export default Demo2
