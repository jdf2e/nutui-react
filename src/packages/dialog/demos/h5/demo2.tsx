import React, { useState } from 'react'
import { Cell, Dialog } from '@nutui/nutui-react'

const Demo2 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell title="基础弹框" onClick={() => setVisible(true)} />
      <Dialog
        title="基础弹框"
        visible={visible}
        onConfirm={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        支持函数调用和组件调用两种方式。
      </Dialog>
    </>
  )
}
export default Demo2
