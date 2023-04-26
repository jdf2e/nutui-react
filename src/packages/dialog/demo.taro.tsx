import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Dialog, Cell } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

interface T {
  basic: string
  noTitle: string
  tipDialog: string
  title: string
  title1: string
  title2: string
  title3: string
  content: string
  tips: string
  confirmText: string
  cancelText: string
}

const DialogDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础弹框',
      noTitle: '无标题弹框',
      tipDialog: '提示弹框',
      tips: '提示',
      title: '底部按钮 垂直使用',
      title1: '标签式使用',
      title2: '无底部 Footer 区域',
      title3: '底部 Footer 为 Button 时，点击遮罩不关闭',
      content: '这里是弹框内容',
      confirmText: '确定',
      cancelText: '取消',
    },
    'en-US': {
      basic: 'Basic Usage',
      noTitle: 'No Title',
      tipDialog: 'Tips Dialog',
      tips: 'Tips',
      title: 'Bottom button vertical use',
      title1: 'Template use',
      title2: 'no Footer',
      title3: 'Footer Button, and does not close when click overlay',
      content: 'Function call and template call are supported.',
      confirmText: 'confirm',
      cancelText: 'cancel',
    },
  })

  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.title1}</h2>
        <Cell title={translated.basic} onClick={() => setVisible1(true)} />
        <Dialog
          title={translated.title1}
          visible={visible1}
          confirmText={translated.confirmText}
          cancelText={translated.cancelText}
          onConfirm={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.noTitle} onClick={() => setVisible2(true)} />
        <Dialog
          visible={visible2}
          confirmText={translated.confirmText}
          cancelText={translated.cancelText}
          onConfirm={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.tipDialog} onClick={() => setVisible3(true)} />
        <Dialog
          title={translated.title1}
          visible={visible3}
          confirmText={translated.confirmText}
          hideCancelButton
          onConfirm={() => setVisible3(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title} onClick={() => setVisible4(true)} />
        <Dialog
          title={translated.title1}
          visible={visible4}
          lockScroll
          footerDirection="vertical"
          confirmText={translated.confirmText}
          cancelText={translated.cancelText}
          onConfirm={() => setVisible4(false)}
          onCancel={() => setVisible4(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title3} onClick={() => setVisible5(true)} />
        <Dialog
          title={translated.title3}
          visible={visible5}
          lockScroll
          footerDirection="vertical"
          closeOnOverlayClick={false}
          confirmText={translated.confirmText}
          cancelText={translated.cancelText}
          onConfirm={() => setVisible5(false)}
          onCancel={() => setVisible5(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title2} onClick={() => setVisible6(true)} />
        <Dialog
          title={translated.title2}
          visible={visible6}
          lockScroll
          footerDirection="vertical"
          onClose={() => {
            setVisible6(false)
          }}
          footer={null}
        >
          {translated.content}
        </Dialog>
        <div style={{ height: '200vh' }} />
      </div>
    </>
  )
}

export default DialogDemo
