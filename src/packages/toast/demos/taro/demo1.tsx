import React, { useState } from 'react'
import { Cell, Toast } from '@nutui/nutui-react-taro'

const Demo1 = () => {
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
        title="Text文字提示"
        onClick={() => {
          openToast('text', '网络失败，请稍后再试~')
          setShowToast(true)
        }}
      />
      <Cell
        title="Toast 标题提示"
        onClick={() => {
          openToast(
            'text',
            '网络失败，请稍后再试~',
            undefined,
            undefined,
            '标题提示'
          )
          setShowToast(true)
        }}
      />
      <Cell
        title="Success 成功提示"
        onClick={() => {
          openToast('success', '成功提示')
          setShowToast(true)
        }}
      />
      <Cell
        title="Error 失败提示"
        onClick={() => {
          openToast('fail', '失败提示')
          setShowToast(true)
        }}
      />
      <Cell
        title=" Warning 警告提示"
        onClick={() => {
          openToast('warn', '警告提示')
          setShowToast(true)
        }}
      />
      <Cell
        title=" Loading 加载提示"
        onClick={() => {
          openToast('loading', '加载中')
          setShowToast(true)
        }}
      />
    </>
  )
}
export default Demo1
