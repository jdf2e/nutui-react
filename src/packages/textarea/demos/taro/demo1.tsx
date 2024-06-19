import React from 'react'
import { TextArea } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  return (
    <TextArea
      defaultValue="基础用法"
      className="text-1"
      style={{ fontSize: pxTransform(12) }}
      onChange={(value) => console.log('change', value)}
      onBlur={() => console.log('blur')}
      onFocus={() => console.log('focus')}
    />
  )
}
export default Demo1
