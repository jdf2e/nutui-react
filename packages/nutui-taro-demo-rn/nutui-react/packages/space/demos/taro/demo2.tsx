import React from 'react'
// @TODO 暂时使用 taro components 按钮替代展示
import { Button } from '@tarojs/components'
import { Space } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Space wrap>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
      <Button>按钮4</Button>
      <Button>按钮5</Button>
      <Button>按钮6</Button>
    </Space>
  )
}
export default Demo2
