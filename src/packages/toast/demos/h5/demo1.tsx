import React from 'react'
import { Toast, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  const textToast = (msg: string) => {
    Toast.show(msg)
  }
  return (
    <>
      <Cell
        title="文字提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => textToast('网络失败，请稍后再试~')}
      />
    </>
  )
}
export default Demo1
