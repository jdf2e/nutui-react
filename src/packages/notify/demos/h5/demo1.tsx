import React from 'react'
import { Notify, Cell } from '@nutui/nutui-react'
import { Reload } from '@nutui/icons-react'

const Demo1 = () => {
  const baseNotify = (message: string) => {
    Notify.text(message, {
      leftIcon: <Reload />,
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
        title="基础用法"
        onClick={(event: React.MouseEvent) => {
          baseNotify('请求失败，请重试刷新')
        }}
      />
    </>
  )
}
export default Demo1
