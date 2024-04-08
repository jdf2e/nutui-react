import React from 'react'
import { Notify, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  const baseNotify = (message: string) => {
    Notify.text(message, {
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
          baseNotify('基础用法')
        }}
      />
    </>
  )
}
export default Demo1
