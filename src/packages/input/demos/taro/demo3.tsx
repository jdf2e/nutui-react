import React, { useState } from 'react'
import { Input, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [val, setVal] = useState('NutUI React')
  return (
    <Cell style={{ display: 'block' }}>
      <Input
        value={val}
        onChange={(val) => setVal(val)}
        placeholder="请输入文本"
      />
    </Cell>
  )
}
export default Demo3
