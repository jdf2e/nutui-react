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
  content: string
  tips: string
  okText: string
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
      content: '这里是弹框内容',
      okText: '确定',
      cancelText: '取消',
    },
    'en-US': {
      basic: 'Basic Usage',
      noTitle: 'No Title',
      tipDialog: 'Tips Dialog',
      tips: 'Tips',
      title: 'Bottom button vertical use',
      title1: 'Template use',
      content: 'Function call and template call are supported.',
      okText: 'confirm',
      cancelText: 'cancel',
    },
  })

  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Cell title={translated.basic} onClick={() => setVisible1(true)} />
        <Dialog
          title={translated.title1}
          lockScroll
          visible={visible1}
          okText={translated.okText}
          cancelText={translated.cancelText}
          onOk={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.noTitle} onClick={() => setVisible2(true)} />
        <Dialog
          visible={visible2}
          okText={translated.okText}
          cancelText={translated.cancelText}
          onOk={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.tipDialog} onClick={() => setVisible3(true)} />
        <Dialog
          title={translated.title1}
          visible={visible3}
          okText={translated.okText}
          noCancelBtn
          onOk={() => setVisible3(false)}
          onCancel={() => setVisible3(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title} onClick={() => setVisible4(true)} />
        <Dialog
          title={translated.title1}
          visible={visible4}
          lockScroll
          footerDirection="vertical"
          okText={translated.okText}
          cancelText={translated.cancelText}
          onOk={() => setVisible4(false)}
          onCancel={() => setVisible4(false)}
        >
          {translated.content}
        </Dialog>
        <div style={{ height: '200vh' }}></div>
      </div>
    </>
  )
}

export default DialogDemo
