import React from 'react'
import { Space, TextArea } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <Space direction="vertical">
      <TextArea
        defaultValue="基础用法1"
        onChange={(value) => console.log('change', value)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      />
      <TextArea
        defaultValue="基础用法2"
        type="container"
        onChange={(value) => console.log('change', value)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      />
    </Space>
  )
}
export default Demo1
