import React from 'react'
import { Signature } from './signature'

const SignatureDemo = () => {
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
        <h2>基础用法</h2>
        <Signature confirm={confirm} clear={clear} />
        <p className="demo-tips demo1" style={demoStyles}>
          Tips: 点击确认按钮,下方显示签名图片
        </p>
        <h2>修改颜色和签字粗细</h2>
        <Signature
          lineWidth={4}
          strokeStyle="green"
          confirm={confirm1}
          clear={clear1}
        />
        <p className="demo-tips demo2" style={demoStyles}>
          Tips: 点击确认按钮,下方显示签名图片
        </p>
      </div>
    </>
  )
}

export default SignatureDemo
