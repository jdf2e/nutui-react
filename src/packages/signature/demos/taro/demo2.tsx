import React, { useRef } from 'react'
import { Signature, Button } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const confirm = (dataurl: string) => {
    console.log('图片地址', dataurl)
  }
  const clear = () => {
    console.log('清除事件')
  }
  const signatureRef1 = useRef<any>(null)
  return (
    <>
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
          size="small"
          style={{ margin: 8 }}
          onClick={() => {
            signatureRef1.current?.clear()
          }}
        >
          重签
        </Button>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            signatureRef1.current?.confirm()
          }}
        >
          确认
        </Button>
      </div>
      <p className="demo-tips demo2">Tips: 点击确认按钮,下方显示签名图片</p>
    </>
  )
}
export default Demo2
