import React, { useState } from 'react'
import { Cell, Toast } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [state, setState] = useState({
    icon: '',
    content: 'toast',
    duration: 2,
    title: '',
  })
  const [showToast, setShowToast] = useState(false)

  const openToast = (
    icon: string,
    content: string,
    duration?: number,
    title?: string
  ) => {
    const changeState = Object.assign(state, {
      icon,
      content,
      duration,
      title,
    })
    setState(changeState)
  }
  return (
    <>
      <Toast
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
        title="展示时长为10秒"
        onClick={() => {
          openToast('text', '设置展示时长为10秒', 10)
          setShowToast(true)
        }}
      />
      <Cell
        title="隐藏Toast"
        onClick={() => {
          setShowToast(false)
        }}
      />
    </>
  )
}
export default Demo3
