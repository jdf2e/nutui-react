import React from 'react'
import { Space, TextArea } from '@nutui/nutui-react'

const Demo = () => {
  return (
    <Space direction="vertical">
      <TextArea
        plain
        defaultValue="基础用法：纯文本型"
        onChange={(value) => console.log('change', value)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      />
      <TextArea
        defaultValue="基础用法：灰底容器型"
        onChange={(value) => console.log('change', value)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      />
      <TextArea
        containerType="white"
        defaultValue="基础用法：白底容器型"
        onChange={(value) => console.log('change', value)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      />
    </Space>
  )
}
export default Demo
