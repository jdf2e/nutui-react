import React from 'react'
import { Toast, Cell } from '@nutui/nutui-react'

const Demo5 = () => {
  const warningToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'warn',
    })
  }
  return (
    <>
      <Cell
        title="警告提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => warningToast('警告提示')}
      />
    </>
  )
}
export default Demo5
