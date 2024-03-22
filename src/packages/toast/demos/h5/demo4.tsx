import React from 'react'
import { Toast, Cell } from '@nutui/nutui-react'

const Demo4 = () => {
  const errorToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'fail',
    })
  }
  return (
    <>
      <Cell
        title="失败提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => errorToast('失败提示')}
      />
    </>
  )
}
export default Demo4
