import React, { useState } from 'react'
import { Dialog } from './dialog'
import Cell from '../cell'
import { useTranslate } from '@/sites/assets/locale'

interface T {
  funUse: string
  basic: string
  noTitle: string
  tipDialog: string
  title: string
  title1: string
  content: string
  tips: string
  confirmText: string
  cancelText: string
}

const DialogDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      funUse: '函数式调用',
      basic: '基础弹框',
      noTitle: '无标题弹框',
      tipDialog: '提示弹框',
      tips: '提示',
      title: '底部按钮 垂直使用',
      title1: '标签式使用',
      content: '支持函数调用和组件调用两种方式。',
      confirmText: '确定',
      cancelText: '取消',
    },
    'en-US': {
      funUse: 'Function use',
      basic: 'Basic Usage',
      noTitle: 'No Title',
      tipDialog: 'Tips Dialog',
      tips: 'Tips',
      title: 'Bottom button vertical use',
      title1: 'Template use',
      content: 'Function call and template call are supported.',
      confirmText: 'confirm',
      cancelText: 'cancel',
    },
  })

  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)

  return (
    <>
      <div className="demo">
        <h2>{translated.funUse}</h2>
        <Cell
          title={translated.basic}
          onClick={() => {
            Dialog.alert({
              title: translated.basic,
              content: translated.content,
              confirmText: translated.confirmText,
              cancelText: translated.cancelText,
              lockScroll: true,
            })
          }}
        />
        <Cell
          title={translated.noTitle}
          onClick={() => {
            Dialog.alert({
              content: translated.noTitle,
              confirmText: translated.confirmText,
              cancelText: translated.cancelText,
            })
          }}
        />
        <Cell
          title={translated.tipDialog}
          onClick={() => {
            Dialog.alert({
              title: translated.tips,
              content: translated.content,
              hideCancelButton: true,
              confirmText: translated.confirmText,
            })
          }}
        />
        <Cell
          title={translated.title}
          onClick={() => {
            Dialog.alert({
              title: translated.tips,
              content: translated.content,
              footerDirection: 'vertical',
              confirmText: translated.confirmText,
              cancelText: translated.cancelText,
            })
          }}
        />
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
        <Cell title={translated.title} onClick={() => setVisible2(true)} />
        <Dialog
          title={translated.title1}
          visible={visible2}
          lockScroll
          footerDirection="vertical"
          confirmText={translated.confirmText}
          cancelText={translated.cancelText}
          onConfirm={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title} onClick={() => setVisible3(true)} />
        <Dialog
          title={translated.title1}
          visible={visible3}
          lockScroll
          footerDirection="vertical"
          onClose={() => {
            setVisible3(false)
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
