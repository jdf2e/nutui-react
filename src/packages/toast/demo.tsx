import React from 'react'
import Toast from './index'
import Cell from '@/packages/cell'
import Button from '@/packages/button'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  basic: string
  toastText: string
  toastTitle: string
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
}

const ToastDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      toastText: '文字提示',
      toastTitle: '标题展示',
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
    },
    'en-US': {
      basic: 'Basic Usage',
      toastText: 'Text Message',
      toastTitle: 'Title',
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
    },
  })
  const textToast = (msg: string) => {
    Toast.show(msg)
  }
  const titleToast = (msg: string) => {
    Toast.show({
      content: msg,
      title: `${translated.toastTitle}`,
    })
  }
  const successToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'success',
      title: `${translated.toastTitle}`,
    })
  }
  const errorToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'fail',
    })
  }
  const warningToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'warn',
    })
  }
  const loadingToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'loading',
    })
  }
  const duringToast = (msg: string) => {
    Toast.show({
      content: msg,
      duration: 10,
    })
  }
  const toastBottom = (msg: string) => {
    Toast.show({
      content: msg,
      style: {
        '--nutui-toast-inner-top': '90%',
      },
    })
  }
  const iconToast = (msg: string) => {
    Toast.show({
      duration: 2000,
      content: msg,
      style: {
        '--nutui-overlay-bg-color': 'rgba(0,0,0,0.7)',
      },
      closeOnOverlayClick: true,
      onClose: () => {
        console.log('closeToast')
      },
    })
  }

  return (
    <>
      <div className="demo" style={{ paddingBottom: '20px' }}>
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.toastText}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => textToast(`${translated.toastText}`)}
        />
        <Cell
          title={translated.toastTitle}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => titleToast(`${translated.toastTitle}`)}
        />
        <Cell
          title={translated.toastSuccess}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => successToast(`${translated.toastSuccess}`)}
        />
        <Cell
          title={translated.toastError}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => errorToast(`${translated.toastError}`)}
        />
        <Cell
          title={translated.toastWarning}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => warningToast(`${translated.toastWarning}`)}
        />
        <Cell
          title={translated.toastLoading}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => loadingToast(`${translated.toastLoading}`)}
        />
        <h2>{translated.toastDuration}</h2>
        <Cell
          title={translated.toastDurationText}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => duringToast(`${translated.toastDurationText}`)}
        />
        <Cell
          title={translated.toastAll}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            Toast.show({
              content: translated.toastAll,
              duration: 0,
              closeOnOverlayClick: true,
            })
          }}
        />
        <Button
          style={{ margin: 8 }}
          type="primary"
          shape="round"
          onClick={() => {
            Toast.clear()
          }}
        >
          {translated.toastHide}
        </Button>
        <h2>{translated.toastBottom}</h2>
        <Cell
          title={translated.toastBottom}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => toastBottom(`${translated.toastBottom}`)}
        />
        <h2>{translated.toastTransparent}</h2>
        <Cell
          title={translated.toastTransparent}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => iconToast(`${translated.toastTransparent}`)}
        />
      </div>
    </>
  )
}

export default ToastDemo
