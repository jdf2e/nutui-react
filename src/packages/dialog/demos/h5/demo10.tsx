import React, { useState } from 'react'
import { Cell, Dialog } from '@nutui/nutui-react'

const Demo10 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell title="倒计时自动关闭" onClick={() => setVisible(true)} />
      <Dialog
        title="自动关闭"
        autoClose={5}
        visible={visible}
        onClose={() => setVisible(false)}
        onConfirm={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        该对话框将在 5 秒后自动关闭。
      </Dialog>
    </>
  )
}
export default Demo10
