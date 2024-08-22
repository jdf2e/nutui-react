import React, { useRef } from 'react'
import { Signature, Button } from '@nutui/nutui-react'

const Demo2 = () => {
  const confirm = (canvas: HTMLCanvasElement, dataurl: string) => {
    console.log(`图片地址 ${dataurl}`)
    if (document.querySelector('.demo2 img')) {
      return
    }
    const img = document.createElement('img')
    img.src = dataurl
    const demo = document.querySelector('.demo2') as HTMLElement
    demo.appendChild(img)
  }

  const clear = () => {
    const img = document.querySelector('.demo2 img')
    if (img) {
      img.remove()
    }
  }

  const signatureRef = useRef<any>(null)
  return (
    <>
      <Signature
        lineWidth={4}
        strokeStyle="green"
        onConfirm={confirm}
        onClear={clear}
        ref={signatureRef}
      />
      <div className="demo-btn">
        <Button
          size="small"
          style={{ margin: 8 }}
          onClick={() => {
            signatureRef.current?.clear()
          }}
        >
          重签
        </Button>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            signatureRef.current?.confirm()
          }}
        >
          确认
        </Button>
      </div>
      <p className="demo-tips demo2" style={{ margin: '1em 0' }}>
        Tips: 点击确认按钮,下方显示签名图片
      </p>
    </>
  )
}
export default Demo2
