import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Jd } from '@nutui/icons-react-taro'
import { Cell, Toast } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { ToastWordBreakType } from './toast.taro'
import { useTranslate } from '@/sites/assets/locale/taro'

interface T {
  basic: string
  toastText: string
  toastTitle: string
  toastFunction: string
  toastSuccess: string
  toastError: string
  toastLoading: string
  toastWarning: string
  toastAll: string
  toastBottom: string
  toastTransparent: string
  toastDuration: string
  toastDurationText: string
  toastHide: string
  toastCustomIcon: string
  toastWordBreak: string
  toastWordBreak1: string
  toastWordBreak2: string
}

const ToastDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      toastText: '文字提示',
      toastTitle: '标题展示',
      toastFunction: '函数调用',
      toastSuccess: '成功提示',
      toastError: '错误提示',
      toastWarning: '警告提示',
      toastLoading: '加载提示',
      toastAll: 'Toast 不消失',
      toastBottom: '自定义底部高度',
      toastTransparent: '加载状态透明遮罩',
      toastDuration: '设置展示时长',
      toastDurationText: '展示时长为10秒',
      toastHide: '隐藏Toast',
      toastCustomIcon: '自定义Icon',
      toastWordBreak: '换行截断方式',
      toastWordBreak1: '换行时截断单词',
      toastWordBreak2: '换行时不截断单词',
    },
    'en-US': {
      basic: 'Basic Usage',
      toastText: 'Text Message',
      toastTitle: 'Title',
      toastFunction: 'Function',
      toastSuccess: 'Success',
      toastError: 'Error',
      toastWarning: 'Warning',
      toastLoading: 'Loading',
      toastAll: 'Not Disappear',
      toastBottom: 'Custom Bottom Height',
      toastTransparent: 'Loading Transparent Cover',
      toastDuration: 'Set Display Duration',
      toastDurationText: 'Show for 10 seconds',
      toastHide: 'Hide Toast',
      toastCustomIcon: 'Custom Icon',
      toastWordBreak: 'Word Break',
      toastWordBreak1: 'Break All',
      toastWordBreak2: 'Break Word',
    },
  })
  const [state, SetState] = useState({
    msg: 'toast',
    type: 'text',
    duration: 2,
    closeOnOverlayClick: false,
    title: '',
    bottom: '',
    icon: '',
    center: true,
    wordBreak: 'break-all' as ToastWordBreakType,
  })
  const [showToast, SetShowToast] = useState(false)

  const openToast = (
    type: string,
    msg: string,
    duration?: number,
    icon?: string | React.ReactNode,
    closeOnOverlayClick?: boolean,
    wordBreak: ToastWordBreakType = 'break-all'
  ) => {
    const changeState = Object.assign(state, {
      msg,
      type,
      duration,
      icon,
      closeOnOverlayClick,
      wordBreak,
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
          wordBreak={state.wordBreak}
        />
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.toastText}
          onClick={() => {
            openToast('text', `${translated.toastText}`)
            SetShowToast(true)
          }}
        />
        <h2>{translated.toastFunction}</h2>
        <Toast id="test" />
        <Cell
          title={translated.toastFunction}
          onClick={() => {
            Toast.show('test', {
              title: translated.toastFunction,
              type: 'fail',
              duration: 2,
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
        <h2>{translated.toastSuccess}</h2>
        <Cell
          title={translated.toastSuccess}
          onClick={() => {
            openToast('success', translated.toastSuccess)
            SetShowToast(true)
          }}
        />

        <h2>{translated.toastError}</h2>
        <Cell
          title={translated.toastError}
          onClick={() => {
            openToast('fail', translated.toastError)
            SetShowToast(true)
          }}
        />

        <h2>{translated.toastWarning}</h2>
        <Cell
          title={translated.toastWarning}
          onClick={() => {
            openToast('warn', translated.toastWarning)
            SetShowToast(true)
          }}
        />

        <h2>{translated.toastLoading}</h2>
        <Cell
          title={translated.toastLoading}
          onClick={() => {
            openToast('loading', `${translated.toastLoading}`)
            SetShowToast(true)
          }}
        />
        <h2>{translated.toastDuration}</h2>
        <Cell
          title={translated.toastDurationText}
          onClick={() => {
            openToast('text', translated.toastDurationText, 10, '', true)
            SetShowToast(true)
          }}
        />
        <Cell
          title={translated.toastHide}
          onClick={() => {
            SetShowToast(false)
          }}
        />
        <h2>{translated.toastCustomIcon}</h2>
        <Cell
          title={translated.toastCustomIcon}
          onClick={() => {
            openToast('text', translated.toastCustomIcon, 2, <Jd />)
            SetShowToast(true)
          }}
        />
        <h2>{translated.toastWordBreak}</h2>
        <Cell.Group>
          <Cell
            title={translated.toastWordBreak1}
            onClick={() => {
              openToast(
                'text',
                `Let's try ABCDEFGHIJKLMN here.`,
                2,
                undefined,
                undefined,
                'break-all'
              )
              SetShowToast(true)
            }}
          />
          <Cell
            title={translated.toastWordBreak2}
            onClick={() => {
              openToast(
                'text',
                `Let's try ABCDEFGHIJKLMN here.`,
                2,
                undefined,
                undefined,
                'break-word'
              )
              SetShowToast(true)
            }}
          />
        </Cell.Group>
      </div>
    </>
  )
}

export default ToastDemo
