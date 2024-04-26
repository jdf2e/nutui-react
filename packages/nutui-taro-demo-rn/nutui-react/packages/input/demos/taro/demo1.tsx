import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Input
        placeholder="请输入文本"
        onChange={(v) => {
          console.log('onChange', v)
        }}
      />
    </>
  )
}
export default Demo1
