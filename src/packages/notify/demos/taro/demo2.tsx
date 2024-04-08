import React, { useState } from 'react'
import { Notify, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [showNotify, setShowNotify] = useState(false)
  const [states, setStates] = useState({
    message: '',
    type: 'danger',
  })
  const changeNotify = (message: string, type: string) => {
    const change = Object.assign(states, { message, type })
    setStates(change)
  }
  return (
    <Cell.Group>
      <Notify
        visible={showNotify}
        type={states.type as any}
        onClose={() => {
          setShowNotify(false)
        }}
      >
        {states.message}
      </Notify>
      <Cell
        title="主要通知"
        onClick={(event: React.MouseEvent) => {
          changeNotify('主要通知', 'primary')
          setShowNotify(true)
        }}
      />
      <Cell
        title="成功通知"
        onClick={(event: React.MouseEvent) => {
          changeNotify('成功通知', 'success')
          setShowNotify(true)
        }}
      />
      <Cell
        title="危险通知"
        onClick={(event: React.MouseEvent) => {
          changeNotify('危险通知', 'danger')
          setShowNotify(true)
        }}
      />
      <Cell
        title="警告通知"
        onClick={(event: React.MouseEvent) => {
          changeNotify('警告通知', 'warning')
          setShowNotify(true)
        }}
      />
    </Cell.Group>
  )
}
export default Demo2
