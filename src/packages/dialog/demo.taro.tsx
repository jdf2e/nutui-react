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
  title6: string
  content: string
  tips: string
  confirmText: string
  cancelText: string
}

const DialogDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础弹框',
      noTitle: '无标题弹框、不锁背景滚动',
      tipDialog: '提示弹框',
      tips: '提示',
      title: '底部按钮 垂直使用',
      title1: '标签式使用',
      title2: '无底部 Footer 区域',
      title3: '底部 Footer 为 Button 时，点击遮罩不关闭',
      title6: '点击取消时，拦截',
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
  const [visible7, setVisible7] = useState(false)
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>函数调用</h2>
        <Dialog id="test" />
        <Cell
          title="函数调用"
          onClick={() =>
            Dialog.open('test', {
              className: 'dialog-func',
              title: '函数调用',
              content: '可通过 Dialog.open 打开对话框',
              onConfirm: () => {
                Dialog.close('test')
              },
              onCancel: () => {
                Dialog.close('test')
              },
            })
          }
        />
        <h2>{translated.title1}</h2>
        <Cell title={translated.basic} onClick={() => setVisible1(true)} />
        <Dialog
          className="dialog-tag"
          title={translated.title1}
          visible={visible1}
          onConfirm={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.noTitle} onClick={() => setVisible2(true)} />
        <Dialog
          visible={visible2}
          lockScroll={false}
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
          footerDirection="vertical"
          onConfirm={() => setVisible4(false)}
          onCancel={() => setVisible4(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title3} onClick={() => setVisible5(true)} />
        <Dialog
          title={translated.title3}
          visible={visible5}
          footerDirection="vertical"
          closeOnOverlayClick={false}
          onConfirm={() => setVisible5(false)}
          onCancel={() => setVisible5(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title2} onClick={() => setVisible6(true)} />
        <Dialog
          title={translated.title2}
          visible={visible6}
          footer={null}
          onClose={() => {
            setVisible6(false)
          }}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title6} onClick={() => setVisible7(true)} />
        <Dialog
          title={translated.title2}
          visible={visible7}
          closeOnOverlayClick={false}
          beforeCancel={() => {
            console.log('stop close')
            return false
          }}
          onClose={() => {
            setVisible7(false)
          }}
        >
          {translated.content}
        </Dialog>
      </div>
    </>
  )
}

export default DialogDemo
