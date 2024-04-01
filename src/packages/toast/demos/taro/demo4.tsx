import React, { useState } from 'react'
import { Cell, Toast } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [state, setState] = useState({
    content: 'toast',
    type: 'text',
    duration: 2,
    icon: '',
    title: '',
  })
  const [showToast, setShowToast] = useState(false)

  const openToast = (
    type: string,
    content: string,
    duration?: number,
    icon?: string,
    title?: string
  ) => {
    const changeState = Object.assign(state, {
      type,
      content,
      duration,
      icon,
      title,
    })
    setState(changeState)
  }
  return (
    <>
      <Toast
        type={state.type}
        content={state.content}
        duration={state.duration}
        icon={state.icon}
        title={state.title}
        visible={showToast}
        onClose={() => {
          setShowToast(false)
        }}
      />
      <Cell
        title="自定义 Icon"
        onClick={() => {
          openToast('text', '设置icon为JD', 2, 'JD')
          setShowToast(true)
        }}
      />
    </>
  )
}
export default Demo4
