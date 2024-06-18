import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <>
      <Input readOnly placeholder="输入框只读" placeholderTextColor="#757575" />
      <Input disabled placeholder="输入框禁用" placeholderTextColor="#757575" />
    </>
  )
}
export default Demo5
