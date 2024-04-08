import React, { useState } from 'react'
import { Notify, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [showNotify, setShowNotify] = useState(false)
  const [states, setStates] = useState({
    message: '',
    type: 'danger',
  })
  const changeNotify = (message: string, type?: string) => {
    const change = Object.assign(states, { message, type })
    setStates(change)
  }
  return (
    <>
      <Notify
        visible={showNotify}
        type={states.type as any}
        onClose={() => {
          setShowNotify(false)
        }}
        onClick={() => {
          console.log('click')
        }}
      >
        {states.message}
      </Notify>
      <Cell
        title="基础用法"
        onClick={(event: React.MouseEvent) => {
          changeNotify('基础用法')
          setShowNotify(true)
        }}
      />
    </>
  )
}
export default Demo1
