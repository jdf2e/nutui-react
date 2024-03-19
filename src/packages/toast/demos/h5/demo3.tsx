import React from 'react'
import { Toast, Cell } from '@nutui/nutui-react'

const Demo3 = () => {
  const successToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'success',
    })
  }
  return (
    <>
      <Cell
        title="Success 成功提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => successToast('成功提示')}
      />
    </>
  )
}
export default Demo3
