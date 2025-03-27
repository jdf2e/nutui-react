import React from 'react'
import { Notify, Cell } from '@nutui/nutui-react'
import { Reload } from '@nutui/icons-react'

const Demo3 = () => {
  const baseNotify = (message: string) => {
    Notify.text(message, {
      leftIcon: <Reload />,
      closeable: true,
      onClose: () => {
        console.log('close')
      },
      onClick: () => {
        console.log('click')
      },
    })
  }
  return (
    <>
      <Cell
        title="支持关闭"
        onClick={(event: React.MouseEvent) => {
          baseNotify('请求失败，请重新刷新')
        }}
      />
    </>
  )
}
export default Demo3
