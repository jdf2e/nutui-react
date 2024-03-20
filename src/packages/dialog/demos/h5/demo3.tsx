import React, { useState } from 'react'
import { Cell, Dialog } from '@nutui/nutui-react'

const Demo3 = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)

  return (
    <>
      <Cell title="底部按钮 垂直布局 使用" onClick={() => setVisible1(true)} />
      <Dialog
        title="底部按钮 垂直布局 使用"
        visible={visible1}
        footerDirection="vertical"
        onConfirm={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}
      >
        支持函数调用和组件调用两种方式。
      </Dialog>
      <Cell
        title="底部 Footer 为 Button 时，点击遮罩不关闭"
        onClick={() => setVisible2(true)}
      />
      <Dialog
        title="底部 Footer 为 Button 时，点击遮罩不关闭"
        visible={visible2}
        lockScroll={false}
        footerDirection="vertical"
        closeOnOverlayClick={false}
        onConfirm={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
      >
        支持函数调用和组件调用两种方式。
      </Dialog>
      <Cell title="无底部 Footer 区域" onClick={() => setVisible3(true)} />
      <Dialog
        title="无底部 Footer 区域"
        visible={visible3}
        footer={null}
        onClose={() => {
          setVisible3(false)
        }}
      >
        支持函数调用和组件调用两种方式。
      </Dialog>
    </>
  )
}
export default Demo3
