import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <>
      <Input
        type="text"
        placeholder="请输入文本"
        placeholderTextColor="#757575"
      />
      <Input
        type="password"
        placeholder="请输入密码"
        placeholderTextColor="#757575"
      />
      <Input
        type="digit"
        placeholder="请输入数字"
        placeholderTextColor="#757575"
      />
      <Input
        type="number"
        placeholder="请输入整数"
        placeholderTextColor="#757575"
      />
    </>
  )
}
export default Demo4
