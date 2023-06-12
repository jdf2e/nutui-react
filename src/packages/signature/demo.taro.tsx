import '@/packages/signature/demo.scss'
import React, { useRef } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Button, Signature } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface T {
  basic: string
  title: string
  tips: string
  clear: string
  confirm: string
}
interface signatureRefState {
  confirm: () => void
  clear: () => void
}
const SignatureDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      title: '修改颜色和签字粗细',
      tips: 'Tips: 点击确认按钮, 控制台显示签名图片地址',
      clear: '重签',
      confirm: '确认',
    },
    'zh-TW': {
      basic: '基础用法',
      title: '修改顏色和簽字粗細',
      tips: 'Tips: 點擊確認按鈕, 控製臺顯示簽名圖片地址',
      clear: '重簽',
      confirm: '確認',
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Modify color and signature thickness',
      tips: 'Tips: Click the confirm button and the console will display the signature picture address',
      clear: 'clear',
      confirm: 'confirm',
    },
  })

  const signatureRef = useRef<signatureRefState>(null)
  const signatureRef1 = useRef<signatureRefState>(null)

  const confirm = (dataurl: string) => {
    console.log('图片地址', dataurl)
  }
  const clear = () => {
    console.log('清除事件')
  }

  return (
    <>
      <Header />
      <div
        className={`demo demo-signature ${
          Taro.getEnv() === 'WEB' ? 'web' : ''
        }`}
      >
        <h2>{translated.basic}</h2>
        <Signature onConfirm={confirm} onClear={clear} ref={signatureRef} />
        <div className="demo-btn">
          <Button
            type="default"
            style={{ margin: 8 }}
            onClick={() => {
              signatureRef.current?.clear()
            }}
          >
            {translated.clear}
          </Button>
          <Button
            type="primary"
            onClick={() => {
              signatureRef.current?.confirm()
            }}
          >
            {translated.confirm}
          </Button>
        </div>
        <p className="demo-tips demo1">{translated.tips}</p>
        <h2> {translated.title}</h2>
        <Signature
          lineWidth={4}
          strokeStyle="green"
          onConfirm={confirm}
          onClear={clear}
          canvasId="testCanvas"
          ref={signatureRef1}
        />
        <div className="demo-btn">
          <Button
            type="default"
            style={{ margin: 8 }}
            onClick={() => {
              signatureRef1.current?.clear()
            }}
          >
            {translated.clear}
          </Button>
          <Button
            type="primary"
            onClick={() => {
              signatureRef1.current?.confirm()
            }}
          >
            {translated.confirm}
          </Button>
        </div>
        <p className="demo-tips demo2">{translated.tips}</p>
      </div>
    </>
  )
}

export default SignatureDemo
