import React from 'react'
import { Divider, Space, TextArea } from '@nutui/nutui-react'

const Demo = () => {
  return (
    <Space direction="vertical">
      <Divider>容器型错误</Divider>
      <TextArea
        status="error"
        defaultValue="输入内容错误"
        description="错误提示信息"
      />
      <Divider>纯文本型错误</Divider>
      <TextArea
        plain
        status="error"
        defaultValue="输入内容错误"
        description="错误提示信息"
      />
    </Space>
  )
}
export default Demo
