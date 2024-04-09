import React, { useState } from 'react'
import { Notify, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [showNotify, setShowNotify] = useState(false)
  const [states, setStates] = useState({
    message: '',
    type: 'danger',
    duration: 2000,
    position: 'top',
  })
  const changeNotify = (
    message: string,
    type?: string,
    duration?: number,
    position?: string
  ) => {
    const change = Object.assign(states, {
      message,
      type,
      duration,
      position,
    })
    setStates(change)
  }
  return (
    <>
      <Notify
        visible={showNotify}
        position={states.position as any}
        duration={states.duration}
        onClose={() => {
          setShowNotify(false)
        }}
      >
        {states.message}
      </Notify>
      <Cell
        title="自定义时长"
        onClick={() => {
          changeNotify('自定义时长', 'base', 10000)
          setShowNotify(true)
        }}
      />
      <Cell
        title="自定义位置"
        onClick={() => {
          changeNotify('自定义位置', 'base', 2000, 'bottom')
          setShowNotify(true)
        }}
      />
    </>
  )
}
export default Demo4
