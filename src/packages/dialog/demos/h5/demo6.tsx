import React, { useState } from 'react'
import { Cell, Dialog } from '@nutui/nutui-react'

const Demo6 = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  return (
    <>
      <Cell
        title="顶部带关闭按钮"
        onClick={() => {
          setVisible1(true)
        }}
      />
      <Dialog
        className="test-dialog"
        title="顶部带关闭按钮"
        visible={visible1}
        closeIcon
        closeIconPosition="top-right"
        style={{
          '--nutui-dialog-close-color': '#8c8c8c',
        }}
        onConfirm={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}
      >
        支持函数调用和组件调用两种方式。
      </Dialog>
      <Cell
        title="底部带关闭按钮"
        onClick={() => {
          setVisible2(true)
        }}
      />
      <Dialog
        className="test-dialog"
        title="底部带关闭按钮"
        visible={visible2}
        onConfirm={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
        closeIcon
      >
        支持函数调用和组件调用两种方式。
      </Dialog>
    </>
  )
}
export default Demo6
