import React, { useState } from 'react'
import { Cell, Dialog } from '@nutui/nutui-react'

const Demo5 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell title="确认按钮loading效果" onClick={() => setVisible(true)} />
      <Dialog
        className="test-dialog"
        title="确认按钮loading效果"
        visible={visible}
        onConfirm={async () => {
          const wait = () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(0)
              }, 3000)
            })
          }
          await wait()
          setVisible(false)
        }}
        onCancel={() => setVisible(false)}
        style={{
          '--nutui-dialog-close-color': '#FFFFFF',
        }}
      >
        支持函数调用和组件调用两种方式。
      </Dialog>
    </>
  )
}
export default Demo5
