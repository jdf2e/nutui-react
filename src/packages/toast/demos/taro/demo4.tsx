import React, { useState } from 'react'
import { Cell, Toast } from '@nutui/nutui-react-taro'

const Demo4 = () => {
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
    setState({
      ...state,
      icon,
      content,
      duration: duration || 0,
      title: title || '',
    })
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
