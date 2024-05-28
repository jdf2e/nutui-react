import React, { useRef } from 'react'
import { Signature, Button } from '@nutui/nutui-react'

const Demo1 = () => {
  const confirm = (
    canvas: HTMLCanvasElement,
    dataurl: string,
    isSigned?: boolean
  ) => {
    console.log(`0 图片地址 ${dataurl}`, isSigned)
    if (!isSigned) {
      console.log('抱歉，没有签名哦~')
      return
    }
    if (document.querySelector('.demo1 img')) {
      return
    }
    const img = document.createElement('img')
    img.src = dataurl
    const demo = document.querySelector('.demo1') as HTMLElement
    demo.appendChild(img)
  }
  const clear = () => {
    const img = document.querySelector('.demo1 img')
    if (img) {
      img.remove()
    }
  }
  const signatureRef = useRef<any>(null)
  return (
    <>
      <Signature onConfirm={confirm} onClear={clear} ref={signatureRef} />
      <div className="demo-btn">
        <Button
          type="default"
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
      <p className="demo-tips demo1" style={{ margin: '1em 0' }}>
        Tips: 点击确认按钮,下方显示签名图片
      </p>
    </>
  )
}
export default Demo1
