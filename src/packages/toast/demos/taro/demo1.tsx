import React, { useState } from 'react'
import { Cell, Toast } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [state, setState] = useState<{
    icon: string | React.ReactNode
    content?: string
    duration?: number
    title?: string
  }>({
    icon: null,
    content: 'toast',
    duration: 2,
    title: '',
  })
  const [showToast, setShowToast] = useState(false)

  const openToast = (
    icon: string | React.ReactNode,
    title?: string,
    duration?: number,
    content?: string
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
        title="文字提示"
        onClick={() => {
          setState({
            icon: 'text',
            content: '网络失败，请稍后再试~',
          })
          setShowToast(true)
        }}
      />
      <Cell
        title="标题提示"
        onClick={() => {
          openToast('text', '标题提示')
          setShowToast(true)
        }}
      />
      <Cell
        title="成功提示"
        onClick={() => {
          openToast('success', '成功提示')
          setShowToast(true)
        }}
      />
      <Cell
        title="失败提示"
        onClick={() => {
          openToast('fail', '失败提示')
          setShowToast(true)
        }}
      />
      <Cell
        title="警告提示"
        onClick={() => {
          openToast('warn', '警告提示')
          setShowToast(true)
        }}
      />
      <Cell
        title="加载提示"
        onClick={() => {
          openToast('loading', '加载提示')
          setShowToast(true)
        }}
      />
    </>
  )
}
export default Demo1
