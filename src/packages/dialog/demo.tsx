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
  title4: string
  content: string
  tips: string
  okText: string
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
      title4: '打开弹框 3s 后调用关闭方法',
      content: '支持函数调用和组件调用两种方式。',
      okText: '确定',
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
      title4: 'after opened the dialog for 3 seconds, call close method',
      content: 'Function call and template call are supported.',
      okText: 'confirm',
      cancelText: 'cancel',
    },
  })

  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

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
              okText: translated.okText,
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
              okText: translated.okText,
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
              noCancelBtn: true,
              okText: translated.okText,
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
              okText: translated.okText,
              cancelText: translated.cancelText,
            })
          }}
        />
        <Cell
          title={translated.title4}
          onClick={() => {
            const dialog = Dialog.alert({
              title: translated.tips,
              content: translated.content,
              footerDirection: 'vertical',
            })
            setTimeout(() => {
              dialog.close()
            }, 2000)
          }}
        />
        <h2>{translated.title1}</h2>
        <Cell title={translated.basic} onClick={() => setVisible1(true)} />
        <Dialog
          title={translated.title1}
          visible={visible1}
          okText={translated.okText}
          cancelText={translated.cancelText}
          onOk={() => setVisible1(false)}
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
          okText={translated.okText}
          cancelText={translated.cancelText}
          onOk={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
        >
          {translated.content}
        </Dialog>
        <div style={{ height: '200vh' }}></div>
      </div>
    </>
  )
}

export default DialogDemo
