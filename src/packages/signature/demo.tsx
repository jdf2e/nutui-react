import React from 'react'
import './demo.scss'
import { Signature } from './signature'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  basic: string
  title: string
  tips: string
}

const SignatureDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      title: '修改颜色和签字粗细',
      tips: 'Tips: 点击确认按钮,下方显示签名图片',
    },
    'zh-TW': {
      basic: '基本用法',
      title: '修改顏色和簽字粗細',
      tips: 'Tips: 點擊確認按鈕,下方顯示簽名圖片',
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Modify color and signature thickness',
      tips: 'Tips: click the confirm button, and the signature image is displayed below',
    },
  })
  const confirm = (canvas: HTMLCanvasElement, data: string) => {
    const img = document.createElement('img')
    img.src = data
    const demo = document.querySelector('.demo1') as HTMLElement
    demo.appendChild(img)
  }
  const clear = () => {
    const img = document.querySelector('.demo1 img')
    if (img) {
      img.remove()
    }
  }

  const confirm1 = (canvas: HTMLCanvasElement, data: string) => {
    const img = document.createElement('img')
    img.src = data
    const demo = document.querySelector('.demo2') as HTMLElement
    demo.appendChild(img)
  }

  const clear1 = () => {
    const img = document.querySelector('.demo2 img')
    if (img) {
      img.remove()
    }
  }

  const demoStyles: React.CSSProperties = { margin: '1em 0' }
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Signature onConfirm={confirm} onClear={clear} />
        <p className="demo-tips demo1" style={demoStyles}>
          {translated.tips}
        </p>
        <h2> {translated.title}</h2>
        <Signature
          lineWidth={4}
          strokeStyle="green"
          onConfirm={confirm1}
          onClear={clear1}
        />
        <p className="demo-tips demo2" style={demoStyles}>
          {translated.tips}
        </p>
      </div>
    </>
  )
}

export default SignatureDemo
