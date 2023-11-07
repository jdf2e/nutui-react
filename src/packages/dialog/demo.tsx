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
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
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
      noTitle: '无标题弹框、不锁背景滚动',
      tipDialog: '提示弹框',
      tips: '提示',
      title: '底部按钮 垂直布局 使用',
      title1: '标签式使用',
      title2: '无底部 Footer 区域',
      title3: '底部 Footer 为 Button 时，点击遮罩不关闭',
      title4: '打开弹框 3s 后调用关闭方法',
      title5: '打开弹框 3s 后更新弹框内容',
      title6: '点击取消时，拦截',
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
      title2: 'no Footer',
      title3: 'Footer Button, and does not close when click overlay',
      title4: 'after opened the dialog for 3 seconds, call close method',
      title5:
        'after opened the dialog for 3 seconds, update the content of the dialog',
      title6: 'Stop it when click cancel button',
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
      <div className="demo">
        <h2>{translated.funUse}</h2>
        <Cell
          title={translated.basic}
          onClick={() => {
            Dialog.alert({
              className: 'dialog-func',
              title: translated.basic,
              content: translated.content,
            })
          }}
        />
        <Cell
          title={translated.noTitle}
          onClick={() => {
            Dialog.confirm({
              content: translated.noTitle,
              confirmText: translated.confirmText,
              cancelText: translated.cancelText,
              lockScroll: false,
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
        <Cell
          title={translated.title4}
          onClick={() => {
            const dialog = Dialog.confirm({
              content: translated.title4,
              confirmText: translated.confirmText,
              cancelText: translated.cancelText,
            })
            setTimeout(() => {
              dialog.close()
            }, 3000)
          }}
        />
        <Cell
          title={translated.title5}
          onClick={() => {
            const dialog = Dialog.confirm({
              content: translated.title5,
            })
            setTimeout(() => {
              dialog.update({
                content: `${translated.title5} ${translated.title5} `,
              })
            }, 3000)
          }}
        />
        <Cell
          title={translated.title6}
          onClick={() => {
            Dialog.alert({
              title: translated.title6,
              content: translated.content,
              closeOnOverlayClick: false,
              beforeCancel: () => {
                console.log('stop close')
                return false
              },
            })
          }}
        />
        <h2>{translated.title1}</h2>
        <Cell
          title={translated.basic}
          onClick={() => {
            setVisible1(true)
          }}
        />
        <Dialog
          className="test-dialog"
          title={translated.title1}
          visible={visible1}
          onConfirm={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.noTitle} onClick={() => setVisible5(true)} />
        <Dialog
          visible={visible5}
          lockScroll={false}
          onConfirm={() => setVisible5(false)}
          onCancel={() => setVisible5(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title} onClick={() => setVisible2(true)} />
        <Dialog
          title={translated.title1}
          visible={visible2}
          footerDirection="vertical"
          onConfirm={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title3} onClick={() => setVisible4(true)} />
        <Dialog
          title={translated.title3}
          visible={visible4}
          lockScroll={false}
          footerDirection="vertical"
          closeOnOverlayClick={false}
          onConfirm={() => setVisible4(false)}
          onCancel={() => setVisible4(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title2} onClick={() => setVisible3(true)} />
        <Dialog
          title={translated.title2}
          visible={visible3}
          footer={null}
          onClose={() => {
            setVisible3(false)
          }}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title6} onClick={() => setVisible6(true)} />
        <Dialog
          title={translated.title2}
          visible={visible6}
          closeOnOverlayClick={false}
          beforeCancel={() => {
            console.log('stop close')
            return false
          }}
          onClose={() => {
            setVisible6(false)
          }}
        >
          {translated.content}
        </Dialog>
      </div>
    </>
  )
}

export default DialogDemo
