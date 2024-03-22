import React from 'react'
import { Cell, Dialog } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Dialog id="test" />
      <Cell
        title="函数式调用"
        onClick={() =>
          Dialog.open('test', {
            title: '函数式调用',
            content: '可通过 Dialog.open 打开对话框',
            onConfirm: () => {
              Dialog.close('test')
            },
            onCancel: () => {
              Dialog.close('test')
            },
          })
        }
      />
    </>
  )
}
export default Demo1
