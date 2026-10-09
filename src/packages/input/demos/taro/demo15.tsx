import React from 'react'
import { Divider, Input } from '@nutui/nutui-react-taro'

const Demo15 = () => {
  return (
    <>
      <Input
        placeholder="请输入文本：容器型"
        description="可添加描述性的辅助说明信息"
      />
      <Divider />
      <Input
        plain
        placeholder="请输入文本：纯文本型"
        description="可添加描述性的辅助说明信息"
      />
    </>
  )
}
export default Demo15
