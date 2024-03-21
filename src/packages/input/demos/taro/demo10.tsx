import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const formatter = (value: string) => value.replace(/\d/g, '')
  return (
    <>
      <Input formatter={formatter} placeholder="在输入时执行格式化" />
      <Input
        formatter={formatter}
        formatTrigger="onBlur"
        placeholder="在失焦时执行格式化"
      />
    </>
  )
}
export default Demo10
