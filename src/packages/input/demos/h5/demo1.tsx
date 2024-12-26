import React from 'react'
import { Divider, Input } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <>
      <Input placeholder="请输入文本：容器型" />
      <Divider />
      <Input placeholder="请输入文本：纯文本型" plain />
    </>
  )
}
export default Demo1
