import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Jd } from '@nutui/icons-react-taro'
import { Cell, Toast } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

const ToastDemo = () => {
  const [state, SetState] = useState({
    msg: 'toast',
    type: 'text',
    duration: 2,
    closeOnOverlayClick: false,
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
    icon?: string | React.ReactNode,
    closeOnOverlayClick?: boolean
  ) => {
    const changeState = Object.assign(state, {
      msg,
      type,
      duration,
      icon,
      closeOnOverlayClick,
    })
    SetState(changeState)
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Toast
          msg={state.msg}
          visible={showToast}
          type={state.type}
          duration={state.duration}
          icon={state.icon}
          closeOnOverlayClick={state.closeOnOverlayClick}
          onClose={() => {
            SetShowToast(false)
          }}
        />
        <h2>基础用法</h2>
        <Cell
          title="Text文字提示"
          onClick={() => {
            openToast('text', '网络失败，请稍后再试~')
            SetShowToast(true)
          }}
        />
        <h2>函数调用</h2>
        <Toast id="test" />
        <Cell
          title="函数调用"
          onClick={() => {
            Toast.show('test', {
              title: '函数调用',
              type: 'fail',
              duration: 3,
              position: 'center',
              icon: <Jd />,
              size: 'large',
              lockScroll: true,
              onClose: () => {
                console.log('close')
              },
            })
          }}
        />
        <h2>成功提示</h2>
        <Cell
          title="Success 成功提示"
          onClick={() => {
            openToast('success', '成功提示')
            SetShowToast(true)
          }}
        />

        <h2>失败提示</h2>
        <Cell
          title="Error 失败提示"
          onClick={() => {
            openToast('fail', '失败提示')
            SetShowToast(true)
          }}
        />

        <h2>警告提示</h2>
        <Cell
          title=" Warning 警告提示"
          onClick={() => {
            openToast('warn', '警告提示')
            SetShowToast(true)
          }}
        />

        <h2>加载提示</h2>
        <Cell
          title=" Loading 加载提示"
          onClick={() => {
            openToast('loading', '加载中')
            SetShowToast(true)
          }}
        />

        <h2>展示时长设置</h2>
        <Cell
          title="设置展示时长为10秒提示"
          onClick={() => {
            openToast('text', '设置展示时长为10秒', 10, '', true)
            SetShowToast(true)
          }}
        />
        <Cell
          title="关闭正在显示的toast"
          onClick={() => {
            SetShowToast(false)
          }}
        />
        <h2>自定义icon图标</h2>
        <Cell
          title="传入icon组件中的'JD'图标"
          onClick={() => {
            openToast('text', '设置icon为JD', 2, <Jd />)
            SetShowToast(true)
          }}
        />
      </div>
    </>
  )
}

export default ToastDemo
