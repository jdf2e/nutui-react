import React from 'react'
import { Toast, Cell } from '@nutui/nutui-react'

const Demo8 = () => {
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
      title="Toast 自定义底部高度"
      onClick={(
        event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
      ) => toastBottom('自定义距离')}
    />
  )
}
export default Demo8
