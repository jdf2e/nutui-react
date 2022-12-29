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
      basic: '基本用法',
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
    Toast.text(msg)
  }
  const titleToast = (msg: string) => {
    Toast.text(msg, { title: `${translated.toastTitle}` })
  }
  const successToast = (msg: string) => {
    Toast.success(msg)
  }
  const errorToast = (msg: string) => {
    Toast.fail(msg)
  }
  const warningToast = (msg: string) => {
    Toast.warn(msg)
  }
  const loadingToast = (msg: string) => {
    Toast.loading(msg)
  }
  const duringToast = (msg: string) => {
    Toast.text(msg, { duration: 10 })
  }
  const toastBottom = (msg: string) => {
    Toast.text(msg, {
      center: false,
      bottom: '10%',
    })
  }
  const iconToast = (msg: string) => {
    Toast.loading(msg, {
      cover: true, // 是否展示透明遮罩层
      coverColor: '', // 遮罩颜色设定
      closeOnClickOverlay: true, // 点击遮罩可关闭
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
          isLink
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => textToast(`${translated.toastText}`)}
        />
        <Cell
          title={translated.toastTitle}
          isLink
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => titleToast(`${translated.toastTitle}`)}
        />
        <Cell
          title={translated.toastSuccess}
          isLink
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => successToast(`${translated.toastSuccess}`)}
        />
        <Cell
          title={translated.toastError}
          isLink
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => errorToast(`${translated.toastError}`)}
        />
        <Cell
          title={translated.toastWarning}
          isLink
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => warningToast(`${translated.toastWarning}`)}
        />
        <Cell
          title={translated.toastLoading}
          isLink
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => loadingToast(`${translated.toastLoading}`)}
        />
        <h2>{translated.toastDuration}</h2>
        <Cell
          title={translated.toastDurationText}
          isLink
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => duringToast(`${translated.toastDurationText}`)}
        />
        <Cell
          title={translated.toastAll}
          isLink
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            Toast.text(translated.toastAll, { duration: 0 })
          }}
        />
        <Button
          style={{ margin: 8 }}
          type="primary"
          shape="round"
          onClick={() => {
            Toast.hide()
          }}
        >
          {translated.toastHide}
        </Button>
        <h2>{translated.toastBottom}</h2>
        <Cell
          title={translated.toastBottom}
          isLink
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => toastBottom(`${translated.toastBottom}`)}
        />
        <h2>{translated.toastTransparent}</h2>
        <Cell
          title={translated.toastTransparent}
          isLink
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => iconToast(`${translated.toastTransparent}`)}
        />
      </div>
    </>
  )
}

export default ToastDemo
