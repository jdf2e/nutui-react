import React, { useState } from 'react'
import { Cell, Toast } from '@/packages/nutui.react.taro'

const ToastDemo = () => {
  const [state, SetState] = useState({
    msg: 'toast',
    type: 'text',
    cover: false,
    duration: 2,
    closeOnClickOverlay: false,
    title: '',
    bottom: '',
    icon: '',
    center: true,
  })
  const [showToast, SetShowToast] = useState(false)

  const openToast = (
    type: string,
    msg: string,
    duration?: number,
    icon?: string
  ) => {
    const changeState = Object.assign(state, {
      msg,
      type,
      duration,
      icon,
    })
    SetState(changeState)
  }

  return (
    <>
      <div className="demo">
        <Toast
          msg={state.msg}
          visible={showToast}
          type={state.type}
          cover={state.cover}
          duration={state.duration}
          icon={state.icon}
          closeOnClickOverlay={state.closeOnClickOverlay}
          onClose={() => {
            SetShowToast(false)
          }}
        />
        <h2>基础用法</h2>
        <Cell
          title="Text文字提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('text', '网络失败，请稍后再试~')
            SetShowToast(true)
          }}
        />

        <h2>成功提示</h2>
        <Cell
          title="Success 成功提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('success', '成功提示')
            SetShowToast(true)
          }}
        />

        <h2>失败提示</h2>
        <Cell
          title="Error 失败提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('fail', '失败提示')
            SetShowToast(true)
          }}
        />

        <h2>警告提示</h2>
        <Cell
          title=" Warning 警告提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('warn', '警告提示')
            SetShowToast(true)
          }}
        />

        <h2>加载提示</h2>
        <Cell
          title=" Loading 加载提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('loading', '加载中')
            SetShowToast(true)
          }}
        />

        <h2>展示时长设置</h2>
        <Cell
          title="设置展示时长为10秒提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('text', '设置展示时长为10秒', 10)
            SetShowToast(true)
          }}
        />
        <Cell
          title="关闭正在显示的toast"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            SetShowToast(false)
          }}
        />
        <h2>自定义icon图标</h2>
        <Cell
          title="传入icon组件中的'JD'图标"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('text', '设置icon为JD', 2, 'JD')
            SetShowToast(true)
          }}
        />
      </div>
    </>
  )
}

export default ToastDemo
