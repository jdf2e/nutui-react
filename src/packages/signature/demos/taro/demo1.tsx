import React, { useRef } from 'react'
import { Signature, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const confirm = (dataurl: string, isSigned?: boolean) => {
    if (isSigned) {
      console.log('图片地址', dataurl)
    } else {
      console.log('抱歉，没有签名哦~')
    }
  }
  const clear = () => {
    console.log('清除事件')
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
      <p className="demo-tips demo1">Tips: 点击确认按钮,下方显示签名图片</p>
    </>
  )
}
export default Demo1
