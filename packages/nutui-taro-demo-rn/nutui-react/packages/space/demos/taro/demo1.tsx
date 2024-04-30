import React from 'react'
// @TODO 暂时使用 taro components 按钮替代展示
import { Button } from '@tarojs/components'
import { Space } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Space>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  )
}
export default Demo1
