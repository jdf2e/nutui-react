import React, { useState } from 'react'
import { Cell, Toast } from '@/packages/nutui.react.taro'

const Demo1 = () => {
  const [state, SetState] = useState({
    content: 'toast',
    type: 'text',
    duration: 2,
    icon: '',
    title: '',
  })
  const [showToast, SetShowToast] = useState(false)

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
    SetState(changeState)
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
          SetShowToast(false)
        }}
      />
      <Cell
        title="Text文字提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => openToast('text', '网络失败，请稍后再试~')}
      />
      <Cell
        title="Toast 标题提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => {
          openToast(
            'text',
            '网络失败，请稍后再试~',
            undefined,
            undefined,
            '标题提示'
          )
          SetShowToast(true)
        }}
      />
      <Cell
        title="Success 成功提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => {
          openToast('success', '成功提示')
          SetShowToast(true)
        }}
      />
      <Cell
        title="Error 失败提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => {
          openToast('fail', '失败提示')
          SetShowToast(true)
        }}
      />
      <Cell
        title=" Warning 警告提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => {
          openToast('warn', '警告提示')
          SetShowToast(true)
        }}
      />
      <Cell
        title=" Loading 加载提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => {
          openToast('loading', '加载中')
          SetShowToast(true)
        }}
      />
      <Cell
        title="设置展示时长为10秒提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => {
          openToast('text', '设置展示时长为10秒', 10)
          SetShowToast(true)
        }}
      />
      <Cell
        title="关闭正在显示的toast"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => {
          SetShowToast(false)
        }}
      />
      <Cell
        title="传入icon组件中的'JD'图标"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => {
          openToast('text', '设置icon为JD', 2, 'JD')
          SetShowToast(true)
        }}
      />
    </>
  )
}
export default Demo1
