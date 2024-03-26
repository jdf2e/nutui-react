import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'
import { ScrollView, View } from '@tarojs/components'

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
        lockScroll
      >
        <ScrollView scrollY style={{ height: '200px' }}>
          {Array.from({ length: 200 })
            .fill('')
            .map((_, i) => (
              <View key={i}>
                <Cell>底部弹出-{i}</Cell>
              </View>
            ))}
        </ScrollView>
      </Popup>
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
