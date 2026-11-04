import React from 'react'
import { Input, Cell } from '@nutui/nutui-react-taro'

const Demo15 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <Input
        placeholder="请输入文本"
        description="可添加描述性的辅助说明信息"
      />
    </Cell>
  )
}
export default Demo15
