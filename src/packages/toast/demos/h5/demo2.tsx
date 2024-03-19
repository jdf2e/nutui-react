import React from 'react'
import { Toast, Cell } from '@nutui/nutui-react'

const Demo2 = () => {
  const titleToast = (msg: string) => {
    Toast.show({
      content: msg,
      title: '标题提示',
    })
  }
  return (
    <>
      <Cell
        title="Toast 标题提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => titleToast('Toast 标题提示')}
      />
    </>
  )
}
export default Demo2
