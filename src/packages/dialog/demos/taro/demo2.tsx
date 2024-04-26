import React, { useState } from 'react'
import { Cell, Dialog } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  return (
    <>
      <Cell title="基础弹框" onClick={() => setVisible1(true)} />
      <Dialog
        title="基础弹框"
        visible={visible1}
        onConfirm={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}
      >
        支持函数调用和组件调用两种方式。
      </Dialog>

      <Cell title="提示弹框" onClick={() => setVisible2(true)} />
      <Dialog
        title="提示弹框"
        visible={visible2}
        confirmText="确认"
        hideCancelButton
        onConfirm={() => setVisible2(false)}
      >
        支持函数调用和组件调用两种方式。
      </Dialog>

      <Cell
        title="无标题弹框、不锁背景滚动"
        onClick={() => setVisible3(true)}
      />
      <Dialog
        visible={visible3}
        lockScroll={false}
        onConfirm={() => setVisible3(false)}
        onCancel={() => setVisible3(false)}
      >
        支持函数调用和组件调用两种方式。
      </Dialog>

      <Cell title="自定义按钮属性" onClick={() => setVisible4(true)} />
      <Dialog
        visible={visible4}
        lockScroll={false}
        confirmButtonProps={{ type: 'success', shape: 'square' }}
        cancelButtonProps={{ shape: 'square' }}
        onConfirm={() => setVisible4(false)}
        onCancel={() => setVisible4(false)}
      >
        支持函数调用和组件调用两种方式。
      </Dialog>
    </>
  )
}
export default Demo2
