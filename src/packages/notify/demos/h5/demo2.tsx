import React from 'react'
import { Notify, Cell } from '@nutui/nutui-react'

const Demo2 = () => {
  const primaryNotify = (message: string) => {
    Notify.primary(message)
  }
  const successNotify = (message: string) => {
    Notify.success(message)
  }
  const errorNotify = (message: string) => {
    Notify.danger(message)
  }
  const warningNotify = (message: string) => {
    Notify.warn(message)
  }
  return (
    <Cell.Group>
      <Cell
        title="主要通知"
        onClick={(event: React.MouseEvent) => {
          primaryNotify('主要通知')
        }}
      />
      <Cell
        title="成功通知"
        onClick={(event: React.MouseEvent) => {
          successNotify('成功通知')
        }}
      />
      <Cell
        title="危险通知"
        onClick={(event: React.MouseEvent) => {
          errorNotify('危险通知')
        }}
      />
      <Cell
        title="警告通知"
        onClick={(event: React.MouseEvent) => {
          warningNotify('警告通知')
        }}
      />
    </Cell.Group>
  )
}
export default Demo2
