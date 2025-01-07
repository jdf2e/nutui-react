import React from 'react'
import { Divider, Input } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Input placeholder="请输入文本：容器型" />
      <Divider />
      <Input plain placeholder="请输入文本：纯文本型" />
    </>
  )
}
export default Demo1
