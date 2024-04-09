import React from 'react'
import { Toast, Cell } from '@nutui/nutui-react'

const Demo3 = () => {
  const toastBottom = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'loading',
      style: {
        '--nutui-toast-inner-top': '90%',
      },
    })
  }
  return (
    <Cell
      title="自定义底部高度"
      onClick={(
        event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
      ) => toastBottom('自定义底部高度')}
    />
  )
}
export default Demo3
