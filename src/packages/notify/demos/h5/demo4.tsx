import React from 'react'
import { Notify, Cell } from '@nutui/nutui-react'

const Demo4 = () => {
  const timeNotify = (message: string) => {
    Notify.text(message, { duration: 100000 })
  }
  const positionNotify = (message: string) => {
    Notify.text(message, { position: 'bottom' })
  }
  return (
    <>
      <Cell
        title="自定义时长"
        onClick={(event: React.MouseEvent) => {
          timeNotify('自定义时长')
        }}
      />
      <Cell
        title="自定义位置"
        onClick={(event: React.MouseEvent) => {
          positionNotify('自定义位置')
        }}
      />
    </>
  )
}
export default Demo4
